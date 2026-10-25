import { ArrowLeft, ArrowRight, CheckCircle2, FileCode2, Folder, Gauge, Network, Upload } from "lucide-react";
import { Button, Card, Footer, PageHeading, StatCard, Badge } from "../components/ui/index.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/developers.css";

const projects = {
  "Atlas API": { environment: "Production", description: "Customer-facing API & background workers", source: "atlas-prod-v12.tf", resources: "42", findings: "8", cost: "$2,846", savings: "$618", owner: "Jamie Lee" },
  "Harbor Platform": { environment: "Staging", description: "Internal services & developer tooling", source: "harbor-staging-v6.tf", resources: "24", findings: "3", cost: "$912", savings: "$156", owner: "Priya Shah" },
  "Edge Delivery": { environment: "Production", description: "Content delivery & static assets", source: "edge-prod-v5.tf", resources: "10", findings: "2", cost: "$460", savings: "$68", owner: "Alex Morgan" },
};

export function ProjectDetails() {
  const { page, setPage } = useNavigation();
  const name = page.replace("Project:", "") || "Atlas API";
  const project = projects[name] || projects["Atlas API"];

  return (
    <>
      <button className="text-button project-back" onClick={() => setPage("Projects")}><ArrowLeft size={14} /> All projects</button>
      <PageHeading eyebrow={`${project.environment} project`} title={name} description={project.description} action={<Button onClick={() => setPage("Connect Infrastructure")}><Upload size={15} /> Upload new analysis</Button>} />
      <div className="project-detail-meta"><span><Folder size={15} /> {project.source}</span><span><CheckCircle2 size={15} /> Last analyzed Oct 24, 2026 at 10:42 UTC</span><span>Owner · {project.owner}</span></div>
      <section className="stats-grid project-detail-stats">
        <StatCard label="Resources analyzed" value={project.resources} detail="Across declared Terraform services" icon={Network} />
        <StatCard label="Open findings" value={project.findings} detail="Review before your next deploy" icon={Gauge} tone="amber" />
        <StatCard label="Estimated monthly cost" value={project.cost} detail="Configuration-based estimate" icon={FileCode2} />
        <StatCard label="Potential savings" value={project.savings} detail="Estimated monthly opportunity" icon={ArrowRight} tone="green" />
      </section>
      <section className="project-detail-grid">
        <Card className="project-latest" hover>
          <div className="panel-heading"><div><h2>Latest analysis</h2><p className="panel-subtitle">atlas-prod-v12.tf · Completed</p></div><Badge variant="green">Healthy upload</Badge></div>
          <div className="analysis-summary"><span className="summary-icon"><FileCode2 size={18} /></span><div><strong>8 recommendations detected</strong><p>3 high priority · 4 medium · 1 low priority</p></div><Button variant="outline" onClick={() => setPage("Analyses")}>Review findings <ArrowRight size={14} /></Button></div>
        </Card>
        <Card className="project-next" hover>
          <h2>Keep this project current</h2>
          <p>Upload a new Terraform snapshot whenever your infrastructure changes to keep recommendations relevant.</p>
          <button className="text-button" onClick={() => setPage("Connect Infrastructure")}>Upload another snapshot <ArrowRight size={14} /></button>
        </Card>
      </section>
      <Footer />
    </>
  );
}
