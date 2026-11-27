# OptiCloud Backend

## Local setup

1. Install Node.js and PostgreSQL.
2. Create a local PostgreSQL database named `opticloud`.
3. If `.env` does not exist, copy the example and set `DATABASE_URL` to your local database credentials. Keep `.env` private.

   ```powershell
   Copy-Item .env.example .env
   ```

4. From this directory, install dependencies and generate the Prisma Client:

   ```powershell
   npm install
   npm run prisma:generate
   ```

5. Start the API:

   ```powershell
   npm run dev
   ```

The database health check is available at `http://localhost:3000/api/health/db`.

## Prisma migrations

The Prisma schema is in `prisma/schema.prisma`; migration files belong in `prisma/migrations` and should be committed to GitHub with schema changes. Each developer uses their own `.env` and local `opticloud` database.

After adding a Prisma model, create and apply a migration locally with:

```powershell
npm run prisma:migrate -- --name describe_change
```

Commit the resulting migration directory. Teammates pull the schema and migration files, then run `npm run prisma:migrate` to apply them to their own local database. Use `npm run prisma:deploy` to apply committed migrations without creating new ones, and `npm run prisma:studio` to open Prisma Studio.
