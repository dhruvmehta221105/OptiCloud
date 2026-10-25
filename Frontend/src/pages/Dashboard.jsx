import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, FileCode2, Folder, Gauge, HardDrive, Network, TrendingDown, Upload, Zap, DollarSign } from "lucide-react";
import { Button, Card, Footer, Notice, PageHeading, StatCard, Badge } from "../components/ui/index.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/dashboard.css";

const statData = [
  { label: "Estimated monthly cost", value: "$2,846", detail: "Based on declared configuration", icon: HardDrive },
  { label: "Potential monthly savings", value: "$618", detail: "21.7% of estimated monthly cost", icon: TrendingDown, tone: "green" },
  { label: "Findings detected", value: "8", detail: "3 high · 4 medium · 1 low priority", icon: Zap },
  { label: "Resources analyzed", value: "42", detail: "6 services across 2 zones", icon: Network },
];

const opportunityData = [
  { icon: Zap, title: "Cost efficiency", meta: "4 findings", text: "Right-size compute and optimize storage.", badge: "$618 / mo est.", green: true },
  { icon: Gauge, title: "Performance", meta: "2 findings", text: "Review storage throughput and burst limits.", badge: "1 high priority", green: false },
  { icon: Network, title: "Architecture", meta: "2 findings", text: "Improve resilience and fault isolation.", badge: "1 high priority", green: false },
];

const recentData = [
  { file: "atlas-prod-v12.tf", date: "Oct 24, 10:42 UTC", findings: "8 findings", id: "1" },
  { file: "atlas-prod-v11.tf", date: "Oct 22, 14:18 UTC", findings: "10 findings", id: "2" },
  { file: "harbor-staging-v6.tf", date: "Oct 21, 09:30 UTC", findings: "3 findings", id: "3" },
];

export function Dashboard() {
  const { setPage } = useNavigation();
  return (
    <>
      <PageHeading
        eyebrow="Infrastructure overview"
        title="Infrastructure, in focus."
        description="A clear view of what you run, what it may cost, and what to improve next."
        action={<Button onClick={() => setPage("Connect Infrastructure")}><Upload size={15} /> Upload Terraform</Button>}
      />

      <div className="context-row">
        <div className="project-context"><span className="context-icon"><Folder size={16} /></span><strong>Atlas API</strong><span className="env-tag">Production</span><span className="context-meta">· 42 resources · Terraform</span></div>
        <span className="last-analyzed"><CheckCircle2 size={14} /> Last analyzed Oct 24, 2026 at 10:42 UTC</span>
      </div>

      <section className="stats-grid" aria-label="Infrastructure summary">
        {statData.map((item) => (
          <div key={item.label}>
            <StatCard label={item.label} value={item.value} detail={item.detail} icon={item.icon} tone={item.tone} />
          </div>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel cost-panel">
          <div className="panel-heading">
            <div><h2>Where your estimate goes</h2><p className="panel-subtitle">Monthly estimate by service</p></div>
            <button className="text-button" onClick={() => setPage("Projects")}>View inventory <ArrowRight size={14} /></button>
          </div>
          <div className="cost-total">$2,846 <span>/ month</span><span className="estimate-tag">Configuration-based</span></div>
          <div className="cost-bar" aria-label="Estimated service cost breakdown">
            <span className="bar-compute" /><span className="bar-database" /><span className="bar-storage" /><span className="bar-other" />
          </div>
          <div className="cost-legend">
            <div><span className="legend-dot dot-compute" />EC2 compute <strong>$1,460</strong></div>
            <div><span className="legend-dot dot-database" />RDS databases <strong>$864</strong></div>
            <div><span className="legend-dot dot-storage" />EBS storage <strong>$312</strong></div>
            <div><span className="legend-dot dot-other" />Other resources <strong>$210</strong></div>
          </div>
        </article>

        <article className="panel opportunities-panel">
          <div className="panel-heading"><h2>Your optimization opportunities</h2><button className="text-button" onClick={() => setPage("Analyses")}>View all 8 <ArrowRight size={14} /></button></div>
          <div className="opportunity-list">
            {opportunityData.map((item) => (
              <div key={item.title}>
                <OpportunityRow icon={item.icon} title={item.title} meta={item.meta} text={item.text} badge={item.badge} green={item.green} />
              </div>
            ))}
          </div>
          <p className="panel-footnote">Findings are guidance. No infrastructure changes are deployed.</p>
        </article>

        <article className="panel next-step-panel">
          <div className="panel-heading"><div><h2>Recommended next step</h2><div className="tag-row"><Badge variant="red">High priority</Badge><Badge variant="blue">Cost</Badge><span className="finding-code">OC-104</span></div></div></div>
          <h3>Review oversized application instances</h3>
          <p>Three m5.2xlarge workers are declared for the API tier. Review a smaller instance size against your workload.</p>
          <div className="next-step-bottom"><Badge variant="green">Est. $420 / month opportunity</Badge><Button variant="outline" onClick={() => setPage("Analyses")}>Review recommendation <ArrowRight size={14} /></Button></div>
        </article>

        <article className="panel recent-panel">
          <div className="panel-heading"><h2>Recent analyses</h2><button className="text-button" onClick={() => setPage("Analyses")}>All analyses <ArrowRight size={14} /></button></div>
          <div className="recent-list">
            {recentData.map((item) => (
              <div key={item.id} className="analysis-row">
                <span className="file-icon"><FileCode2 size={16} /></span>
                <div className="analysis-copy"><strong>{item.file}</strong><small>{item.date}</small></div>
                <div className="analysis-result"><span className="status-tag">Completed</span><small>{item.findings}</small></div>
                <ChevronRight className="analysis-chevron" size={15} />
              </div>
            ))}
          </div>
          <div className="recent-footer">Latest upload: Jamie Lee · 3 files · 28 KB</div>
        </article>
      </section>

      <Notice>Demo workspace. Cost and savings estimates use declared Terraform resources and sample regional rates, not live usage or AWS billing. Actual results may vary.</Notice>
      <Footer />
    </>
  );
}

function OpportunityRow({ icon: Icon, title, meta, text, badge, green }) {
  return (
    <div className="opportunity-row">
      <span className="opportunity-icon"><Icon size={15} /></span>
      <div className="opportunity-copy"><strong>{title} <small>{meta}</small></strong><span>{text}</span></div>
      <span className={`opportunity-badge${green ? " badge-green" : ""}`}>{badge}</span>
    </div>
  );
}
