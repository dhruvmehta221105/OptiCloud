# OptiCloud — Backend Design Notes

**Project:** OptiCloud · AI Cloud Cost & Architecture Optimizer  
**Tagline:** Understand. Optimize. Scale.  
**Team:** Naman (Backend Lead) · Dhruv (Full Stack)  
**Focus:** Backend system design (HLD + LLD)

---

## 1. One-Liner
Read-only analysis of Terraform / Docker configs + AWS cost data → severity-scored findings → AI recommendations, never auto-deploy.

---

## 2. High Level Design (HLD)

### System Architecture

```mermaid
graph TD
    subgraph Client
        UI[React Frontend<br/>Vite · React Router]
    end

    subgraph Edge
        GW[Nginx / API Gateway<br/>SSL · CORS · Rate Limit]
    end

    subgraph Backend
        AUTH[Auth Service<br/>JWT · RBAC]
        USER[User Service<br/>Orgs · Projects]
        ING[Ingestion Service<br/>Upload · Queue]
        ANA[Analysis Service<br/>Terraform · Docker]
        FIN[Findings Service<br/>Severity · Savings]
        COST[Cost Service<br/>Pricing · Trends]
    end

    subgraph Data
        DB[(PostgreSQL<br/>Primary)]
        CACHE[(Redis<br/>Cache + Queue)]
        STORE[(S3 / MinIO<br/>Object Store)]
    end

    UI --> GW
    GW --> AUTH & USER & ING & ANA & FIN & COST
    AUTH & USER & ING & ANA & FIN & COST --> DB
    ING & ANA & FIN & COST --> CACHE
    ING --> STORE
```

### Service Responsibilities

| Service | Does |
|---------|------|
| **Auth** | JWT access/refresh, bcrypt, org-scoped RBAC |
| **User** | Users, organizations, project membership |
| **Ingestion** | File upload → S3 → enqueue analysis job |
| **Analysis** | Parse HCL/Dockerfile, detect resources |
| **Findings** | Score severity, calculate savings, generate diffs |
| **Cost** | AWS pricing, cost trends, breakdown by service |

---

## 3. Low Level Design (LLD)

### Database Schema (PostgreSQL)

```mermaid
erDiagram
    USER ||--o{ ORG_MEMBER : member_of
    ORGANIZATION ||--o{ ORG_MEMBER : owns
    ORGANIZATION ||--o{ PROJECT : contains
    PROJECT ||--o{ ANALYSIS : runs
    ANALYSIS ||--o{ RESOURCE : discovers
    ANALYSIS ||--o{ FINDING : produces
    PROJECT ||--o{ COST_SNAPSHOT : tracks

    USER {
        uuid id PK
        string email UK
        string password_hash
        string full_name
        timestamp created_at
    }

    ORGANIZATION {
        uuid id PK
        string name
        string slug UK
        enum plan
        uuid created_by FK
    }

    PROJECT {
        uuid id PK
        uuid org_id FK
        string name
        enum environment
        string cloud_provider
    }

    ANALYSIS {
        uuid id PK
        uuid project_id FK
        enum status
        int file_count
        int total_resources
        timestamp started_at
        timestamp completed_at
    }

    RESOURCE {
        uuid id PK
        uuid analysis_id FK
        string resource_type
        string region
        decimal monthly_cost
        jsonb configuration
    }

    FINDING {
        uuid id PK
        uuid analysis_id FK
        enum severity
        enum category
        decimal potential_savings
        text recommendation
        text terraform_before
        text terraform_after
    }

    COST_SNAPSHOT {
        uuid id PK
        uuid project_id FK
        string service
        decimal cost
        timestamp recorded_at
    }
```

### Module Design

```mermaid
classDiagram
    class AuthService {
        +register()
        +login()
        +signJWT()
        +verifyJWT()
    }
    class UserService {
        +createOrg()
        +inviteMember()
        +listProjects()
    }
    class IngestionService {
        +uploadFile()
        +storeS3()
        +enqueueJob()
    }
    class AnalysisService {
        +parseHCL()
        +parseDockerfile()
        +detectResources()
    }
    class FindingsService {
        +scoreSeverity()
        +calcSavings()
        +genDiff()
    }
    class CostService {
        +getPrice()
        +getTrends()
        +getBreakdown()
    }

    AuthService --> UserService
    IngestionService --> AnalysisService
    AnalysisService --> FindingsService
    AnalysisService --> CostService
```

---

## 4. API Summary

| Domain | Endpoints | Auth |
|--------|-----------|------|
| **Auth** | `POST /auth/login`, `POST /auth/register`, `GET /auth/me` | Public / JWT |
| **Orgs** | `GET /organizations`, `POST /organizations`, `POST /organizations/:slug/members` | JWT |
| **Projects** | `GET /orgs/:slug/projects`, `POST /orgs/:slug/projects`, `GET /projects/:id` | JWT |
| **Uploads** | `POST /projects/:id/uploads`, `GET /uploads/:id` | JWT |
| **Analyses** | `GET /projects/:id/analyses`, `GET /analyses/:id`, `POST /analyses/:id/re-run` | JWT |
| **Findings** | `GET /analyses/:id/findings`, `PATCH /findings/:id` | JWT |
| **Costs** | `GET /projects/:id/costs`, `GET /projects/:id/savings` | JWT |

---

## 5. Backend Folder Structure

```
Backend/
├── src/
│   ├── index.js           # Entry
│   ├── config.js          # Env, DB, Redis
│   ├── app.js             # Express setup
│   │
│   ├── middleware/
│   │   ├── auth.js        # JWT + RBAC
│   │   ├── cors.js
│   │   └── errorHandler.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── orgs.js
│   │   ├── projects.js
│   │   ├── uploads.js
│   │   ├── analyses.js
│   │   ├── findings.js
│   │   └── costs.js
│   │
│   ├── controllers/       # Route handlers
│   ├── services/          # Biz logic (auth, ingestion, analysis, findings, cost)
│   ├── models/            # DB schemas (User, Org, Project, Analysis, Resource, Finding, Cost)
│   ├── utils/             # db.js, redis.js, queue.js, s3.js, logger.js
│   ├── jobs/              # analysisJob.js (BullMQ worker)
│   └── migrations/        # .sql files
│
├── package.json
├── .env.example
├── Dockerfile
└── docker-compose.yml
```

---

## 6. Data Flow — Analysis Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant UI as Frontend
    participant API as Gateway
    participant ING as Ingestion
    participant Q as BullMQ
    participant ANA as Analysis
    participant FIN as Findings
    participant COST as Cost
    participant DB as PostgreSQL
    participant S3 as Object Store

    U->>UI: Upload .tf / Dockerfile
    UI->>API: POST /uploads
    API->>ING: Validate file
    ING->>S3: Store file
    ING->>DB: Create Analysis (pending)
    ING->>Q: Enqueue job
    Q->>ANA: Run analysis
    ANA->>ANA: Parse Terraform / Docker
    ANA->>COST: AWS pricing lookup
    ANA->>FIN: Score findings
    ANA->>DB: Save resources + findings
    ANA->>DB: Mark Analysis completed
    ANA-->>UI: WS / Poll: Ready
    U->>UI: View dashboard
```

---

## 7. Security & Auth

- **JWT** access (15m) + refresh (7d) tokens
- **RBAC:** Owner / Admin / Member / Viewer
- **Org-scoped queries:** Users see only their org's data
- **Bcrypt** password hashing
- **CORS:** Restricted to frontend origin
- **Zod:** Request validation on all endpoints

---

## 8. Team Split

| Member | Owns |
|--------|------|
| **Naman** | Backend APIs, Auth, DB, Ingestion, Analysis, Findings, Cost services |
| **Dhruv** | Frontend UI, API consumption, Dashboard, Deployment |

---

## 9. Quick Start (Backend)

```bash
cd Backend
npm install
cp .env.example .env
npm run migrate
npm run dev        # nodemon on :5000
```

**Stack:** Node.js + Express + PostgreSQL + Redis + BullMQ + AWS S3 + JWT

---

*OptiCloud — Catch the waste before it ships.*