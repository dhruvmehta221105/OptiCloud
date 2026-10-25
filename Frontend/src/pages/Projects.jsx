import { useEffect, useMemo, useState } from "react";
import { ArrowDownUp, ArrowRight, ArrowUpRight, ChevronDown, Folder, HardDrive, ListFilter, Plus, Search, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Card, Footer, Notice, PageHeading, StatCard, Badge } from "../components/ui/index.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/projects.css";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const projects = [
  { name: "Atlas API", environment: "Production", description: "Customer-facing API & background workers", source: "atlas-prod-v12.tf", updated: "Oct 24, 10:42 UTC", findings: 8, priority: "3 high priority", cost: "$2,846", savings: "$618", owner: "JL" },
  { name: "Harbor Platform", environment: "Staging", description: "Internal services & developer tooling", source: "harbor-staging-v6.tf", updated: "Oct 23, 18:06 UTC", findings: 3, priority: "1 high priority", cost: "$912", savings: "$156", owner: "PS" },
  { name: "Edge Delivery", environment: "Production", description: "Content delivery & static assets", source: "edge-prod-v5.tf", updated: "Oct 22, 09:15 UTC", findings: 2, priority: "0 high priority", cost: "$460", savings: "$68", owner: "AM" },
];

export function Projects() {
  const { setPage } = useNavigation();
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [environment, setEnvironment] = useState("All environments");
  const [sortNewest, setSortNewest] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesQuery = `${project.name} ${project.description} ${project.source}`.toLowerCase().includes(query.toLowerCase());
      return matchesQuery && (environment === "All environments" || project.environment === environment);
    });
    return sortNewest ? filtered : [...filtered].reverse();
  }, [query, environment, sortNewest]);

  return (
    <>
      <PageHeading
        eyebrow="Workspace"
        title="Projects"
        description="Organize your infrastructure. Keep every analysis and recommendation in context."
        action={<Button onClick={() => setPage("Connect Infrastructure")}><Plus size={16} /> New project</Button>}
      />
      <section className="stats-grid project-stats">
        <StatCard label="Projects in workspace" value="3" detail="2 production · 1 staging" icon={Folder} />
        <StatCard label="Estimated monthly cost" value="$4,218" detail="Across the latest completed analyses" icon={HardDrive} />
        <StatCard label="Potential monthly savings" value="$842" detail="Estimated opportunity · not realized savings" icon={TrendingDown} tone="green" />
      </section>
      <motion.div variants={containerVariants} initial="hidden" animate={mounted ? "show" : "hidden"}>
        <section className="panel project-table-panel">
          <div className="table-toolbar">
            <label className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects by name..." /></label>
            <div className="table-controls">
              <label className="select-control"><ListFilter size={15} /><select aria-label="Filter by environment" value={environment} onChange={(event) => setEnvironment(event.target.value)}><option>All environments</option><option>Production</option><option>Staging</option></select><ChevronDown size={13} /></label>
              <button className="select-control sort-control" onClick={() => setSortNewest(!sortNewest)}><ArrowDownUp size={15} /> {sortNewest ? "Last analyzed" : "Oldest first"} <ChevronDown size={13} /></button>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>PROJECT / SOURCE</th><th>LATEST ANALYSIS</th><th>FINDINGS</th><th>EST. MONTHLY</th><th>POTENTIAL SAVINGS</th><th>OWNER</th><th /></tr></thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <motion.tr key={project.name} variants={itemVariants} className="table-row">
                    <td><div className="project-name"><Folder size={15} /><strong>{project.name}</strong><span className={`env-tag ${project.environment === "Staging" ? "env-staging" : ""}`}>{project.environment}</span></div><p>{project.description}</p><small>{project.source} · {project.name === "Atlas API" ? "42" : project.name === "Harbor Platform" ? "24" : "10"} resources</small></td>
                    <td><span className="status-tag">Completed</span><small className="table-secondary">{project.updated}</small></td>
                    <td><strong>{project.findings} findings</strong><small className="table-secondary">{project.priority}</small></td>
                    <td><strong>{project.cost}</strong><small className="table-secondary">per month</small></td>
                    <td><strong className="positive-text">{project.savings}</strong><small className="table-secondary">per month, est.</small></td>
                    <td><span className="owner-avatar">{project.owner}</span></td>
                    <td><button className="row-open" aria-label={`Open ${project.name}`} onClick={() => setPage(`Project:${project.name}`)}><ArrowUpRight size={16} /></button></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {filteredProjects.length === 0 && <div className="empty-state">No projects match that search. Try a different name or environment.</div>}
          </div>
          <div className="table-footer"><span>Showing {filteredProjects.length} of 3 projects · 76 resources</span><span>Page 1 of 1</span></div>
        </section>
        <section className="project-bottom-grid">
          <Card className="getting-started" hover>
            <h2>A better starting point for every review</h2>
            <div className="steps-grid">
              <Step number="01" title="Create a project" text="Separate services and environments." />
              <Step number="02" title="Upload Terraform" text="Bring in the configuration you own." />
              <Step number="03" title="Review the findings" text="Understand the trade-offs first." />
            </div>
          </Card>
          <Card className="connect-card" hover>
            <h2>Bring another service into focus</h2>
            <p>Start with a Terraform file. No AWS credentials or account connection required.</p>
            <button className="text-button" onClick={() => setPage("Connect Infrastructure")}>Upload infrastructure <ArrowRight size={14} /></button>
          </Card>
        </section>
      </motion.div>
      <Notice>Demo projects and estimates. Totals reflect the latest analysis per project; they are not a bill or a forecast of actual usage.</Notice>
      <Footer />
    </>
  );
}

function Step({ number, title, text }) {
  return <div className="step"><span>{number}</span><strong>{title}</strong><p>{text}</p></div>;
}
