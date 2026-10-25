import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Code2, FileCode2, GitBranch, KeyRound, Rocket, ShieldCheck, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Card, Footer, PageHeading, StatCard } from "../components/ui/index.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/developers.css";

const tools = [
  { icon: Terminal, title: "CLI workflow", text: "Run repeatable checks in CI before infrastructure changes land.", action: "Read CLI guide", page: "Documentation" },
  { icon: GitBranch, title: "Pull request reviews", text: "Share findings with your team and keep recommendations close to code.", action: "View analyses", page: "Analyses" },
  { icon: KeyRound, title: "API access", text: "Connect OptiCloud to internal developer tooling when API access is enabled.", action: "Manage settings", page: "Settings" },
];

export function Developers() {
  const { setPage } = useNavigation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <PageHeading
        eyebrow="Developer workspace"
        title="Build with infrastructure context."
        description="Give developers a safe, review-first path from Terraform change to a clear recommendation."
        action={<Button onClick={() => setPage("Documentation")}><BookOpen size={15} /> Read the docs</Button>}
      />
      <motion.div className="developer-content" initial={{ opacity: 0, y: 10 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3 }}>
        <section className="stats-grid developer-stats">
          <StatCard label="Connected projects" value="3" detail="Terraform sources in this workspace" icon={FileCode2} />
          <StatCard label="Open recommendations" value="8" detail="Ready for engineering review" icon={Code2} tone="amber" />
          <StatCard label="Review coverage" value="92%" detail="Latest analyses completed successfully" icon={ShieldCheck} tone="green" />
        </section>
        <section className="developer-hero panel">
          <div>
            <span className="developer-icon"><Rocket size={20} /></span>
            <h2>A clear handoff for every infrastructure change</h2>
            <p>Start from a project, inspect the Terraform-backed finding, then take the proposed change through your normal review process. OptiCloud never deploys changes for you.</p>
            <div className="developer-actions">
              <Button onClick={() => setPage("Project:Atlas API")}>Open Atlas API <ArrowRight size={14} /></Button>
              <Button variant="outline" onClick={() => setPage("Connect Infrastructure")}>Upload Terraform</Button>
            </div>
          </div>
          <div className="developer-flow" aria-label="Developer workflow">
            <div><span>01</span><strong>Connect</strong><small>Bring in Terraform</small></div>
            <div><span>02</span><strong>Review</strong><small>Understand findings</small></div>
            <div><span>03</span><strong>Ship safely</strong><small>Apply through your workflow</small></div>
          </div>
        </section>
        <section className="developer-grid">
          {tools.map(({ icon: Icon, title, text, action, page }) => (
            <Card key={title} className="developer-tool" hover>
              <span className="tool-icon"><Icon size={18} /></span>
              <h2>{title}</h2>
              <p>{text}</p>
              <button className="text-button" onClick={() => setPage(page)}>{action} <ArrowRight size={14} /></button>
            </Card>
          ))}
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
