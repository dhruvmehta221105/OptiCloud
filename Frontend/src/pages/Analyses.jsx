import { useState, useEffect } from "react";
import { ArrowRight, Check, ChevronRight, CircleHelp, Database, Gauge, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Badge, Button, Card, Footer, PageHeading } from "../components/ui/index.jsx";
import { WorkflowStep } from "../components/ui/steps.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/analyses.css";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const findings = [
  { title: "Review oversized application instances", code: "OC-104", category: "Cost efficiency", priority: "High priority", savings: "$420 / month", description: "Three m5.2xlarge workers are declared for the API tier. Review a smaller instance size against your workload.", icon: Gauge },
  { title: "Right-size managed database storage", code: "OC-082", category: "Cost efficiency", priority: "Medium", savings: "$126 / month", description: "Allocated storage is higher than current usage. Consider a smaller starting allocation with autoscaling enabled.", icon: Database },
  { title: "Improve resilience across availability zones", code: "OC-061", category: "Architecture", priority: "Medium", savings: "Resilience", description: "A production service runs in a single availability zone. Distribute capacity to reduce the impact of a zone outage.", icon: Network },
];

export function Analyses() {
  const { setPage } = useNavigation();
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState(0);
  const [reviewed, setReviewed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const finding = findings[selected];
  const FindingIcon = finding.icon;

  return (
    <>
      <div className="analysis-breadcrumb"><button className="text-button" onClick={() => setPage("Dashboard")}>‹ All findings</button><span>·</span><span>Atlas API</span><span>·</span><span>AN-0248</span><Button variant="outline" onClick={() => setPage("Dashboard")}>Back to dashboard</Button></div>
      <PageHeading
        eyebrow={`${finding.code} · ${finding.category} · Detected in atlas-prod-v12.tf`}
        title={finding.title}
        description=""
      />
      <motion.div variants={containerVariants} initial="hidden" animate={mounted ? "show" : "hidden"}>
        <div className="analysis-flow"><WorkflowStep number="✓" label="Terraform upload" active /><ChevronRight /><WorkflowStep number="✓" label="Analysis" active /><ChevronRight /><WorkflowStep number="✓" label="Detect issue" active /><ChevronRight /><WorkflowStep number="✓" label="AI explanation" active /><ChevronRight /><WorkflowStep number="5" label="Recommendation" active /><ChevronRight /><WorkflowStep number="6" label="Dashboard" /></div>
        <div className="analysis-columns">
          <div className="analysis-main">
            <section className="panel issue-panel">
              <div className="issue-header"><span className="issue-icon"><FindingIcon size={18} /></span><div><strong>Detected issue</strong><small>3 × m5.2xlarge · AWS region us-east-1</small></div><Badge variant="blue">{finding.category}</Badge></div>
              <p>{finding.description} A smaller instance is a candidate for right-sizing, subject to workload validation.</p>
            </section>
            <section className="panel why-panel">
              <div className="panel-heading"><h2>Why this matters</h2><span className="ai-label"><Sparkles size={13} /> AI explanation</span></div>
              <p>You are paying for the capacity you provision, even when the workload does not use it. Each worker reserves 8 vCPUs and 32 GiB of memory; three workers multiply that baseline cost.</p>
              <p>An m5.large has 2 vCPUs and 8 GiB, and may be worth testing if the workload fits. Validate in a non-production environment before changing production capacity.</p>
              <div className="explanation-note"><CircleHelp size={14} /> Based on Terraform-declared inputs and current regional estimates. OptiCloud cannot observe actual runtime use from this file.</div>
            </section>
            <section className="recommendation-section">
              <div className="section-title"><div><h2>Recommended change</h2><p>Evaluate m5.large for a lower-cost fit. Keep instance count and placement unchanged.</p></div><span>Terraform example · Review required</span></div>
              <Card className="code-comparison-wrap" hover>
                <div className="code-comparison">
                  <CodePanelTitle>BEFORE · CURRENT</CodePanelTitle>
                  <pre className="code-pre before">
                    {["resource \"aws_instance\" \"api_worker\" {", "  count         = 3", "  instance_type = \"m5.2xlarge\"", "  ami           = var.worker_ami", "  terraform_tag = \"production\"", "}"].map((line, i) => (
                      <div key={i} className="code-line"><span>{String(i + 1).padStart(2, "0")}</span>{line}</div>
                    ))}
                  </pre>
                  <CodePanelTitle>AFTER · PROPOSED</CodePanelTitle>
                  <pre className="code-pre after">
                    {["resource \"aws_instance\" \"api_worker\" {", "  count         = 3", "  instance_type = \"m5.large\"", "  ami           = var.worker_ami", "  terraform_tag = \"production\"", "}"].map((line, i) => (
                      <div key={i} className={`code-line${i === 2 ? " code-changed" : ""}`}><span>{String(i + 1).padStart(2, "0")}</span>{line}</div>
                    ))}
                  </pre>
                </div>
              </Card>
            </section>
            <section className="panel before-change">
              <h2>Before you make this change</h2>
              <div className="checklist-grid">
                <div><strong>1 · Check workload metrics</strong><p>Review CPU, memory, and network utilization over a representative load.</p></div>
                <div><strong>2 · Test in staging</strong><p>Validate the instance size against your application's normal workload.</p></div>
                <div><strong>3 · Review the Terraform plan</strong><p>Apply changes through your normal review and deployment process.</p></div>
              </div>
            </section>
          </div>
          <aside className="analysis-aside">
            <section className="panel savings-card">
              <h2>Potential monthly savings</h2>
              <strong>$420 <small>/ month, estimated</small></strong>
              <div className="cost-compare">
                <span>Current compute</span><b>$641 / mo</b><i /><span>Proposed compute</span><b>$221 / mo</b>
              </div>
              <p>3 instances · us-east-1 · Linux On-Demand estimate. Instance family, usage, and workload can affect actual costs.</p>
            </section>
            <section className="panel review-card">
              <h2>Review status</h2>
              <div className="review-status"><span className={`status-dot${reviewed ? " reviewed" : ""}`} />{reviewed ? "Reviewed" : "Open"}<small>{reviewed ? "Marked by you" : "Not yet reviewed"}</small></div>
              <Button variant={reviewed ? "outline" : "primary"} onClick={() => setReviewed(!reviewed)}>{reviewed ? <><Check size={14} /> Mark as open</> : <><Check size={14} /> Mark as reviewed</>}</Button>
              <button className="text-button" onClick={() => setSelected((selected + 1) % findings.length)}>Next finding <ArrowRight size={13} /></button>
            </section>
            <section className="panel finding-list">
              <h2>Other findings</h2>
              {findings.map((item, index) => (
                <motion.div key={item.code} variants={itemVariants} className={`finding-list-item${selected === index ? " selected" : ""}`} onClick={() => setSelected(index)}>
                  <span className="finding-priority-dot" /><span><strong>{item.title}</strong><small>{item.code} · {item.category}</small></span><ChevronRight size={14} />
                </motion.div>
              ))}
            </section>
          </aside>
        </div>
      </motion.div>
      <div className="caution-banner"><CircleHelp size={15} /><span>Reviewable guidance, never automatic deployment. This example reduces capacity and may affect performance. Validate, edit your Terraform, and deploy through your existing workflow.</span></div>
      <Footer />
    </>
  );
}

function CodePanelTitle({ children }) {
  return <div className="code-title">{children}</div>;
}
