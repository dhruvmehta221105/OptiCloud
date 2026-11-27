const express = require("express");
const prisma = require("./config/prisma");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/api/health/db", async (_request, response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    response.status(200).json({ status: "ok", database: "connected" });
  } catch (error) {
    console.error("Database health check failed:", error);
    response.status(503).json({ status: "error", database: "disconnected" });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});