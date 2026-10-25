import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, DollarSign, TrendingDown, TrendingUp, Cloud, HardDrive, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Button, Card, Footer, PageHeading, StatCard, Badge } from "../components/ui/index.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/costs.css";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const serviceRows = [
  { name: "EC2 compute", service: "Amazon EC2", icon: HardDrive, spend: "$1,460", delta: "-3.2%", trend: "down", share: 51 },
  { name: "RDS databases", service: "Amazon RDS", icon: Database, spend: "$864", delta: "+1.1%", trend: "up", share: 30 },
  { name: "EBS storage", service: "Amazon EBS", icon: HardDrive, spend: "$312", delta: "+0.0%", trend: "neutral", share: 11 },
  { name: "Other resources", service: "Miscellaneous", icon: Cloud, spend: "$210", delta: "-8.4%", trend: "down", share: 8 },
];

const trendPoints = [1120, 980, 1240, 1310, 1190, 1060, 1280];

export function Costs() {
  const { setPage } = useNavigation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = 2846;
  const savings = 618;

  return (
    <>
      <PageHeading
        eyebrow="Cloud costs"
        title="Cloud cost intelligence"
        description="Track service-wise spending, cost trends, and potential savings across your AWS infrastructure."
        action={<Button onClick={() => setPage("Dashboard")}><DollarSign size={15} /> Back to dashboard</Button>}
      />

      <motion.div variants={containerVariants} initial="hidden" animate={mounted ? "show" : "hidden"}>
        <section className="stats-grid" aria-label="Cost summary">
          <StatCard label="Total monthly spend" value={`$${total}`} detail="Across AWS services" icon={DollarSign} />
          <StatCard label="Potential monthly savings" value={`$${savings}`} detail="21.7% of total monthly spend" icon={TrendingDown} tone="green" />
          <StatCard label="Projected next month" value="$2,228" detail="Based on current trends" icon={TrendingDown} tone="green" />
          <StatCard label="Services tracked" value="6" detail="EC2 · RDS · EBS · S3 · Lambda · VPC" icon={Cloud} />
        </section>

        <div className="cost-grid">
          <article className="panel cost-trend-panel">
            <div className="panel-heading"><h2>Cost trend (7 days)</h2><span className="trend-total">$2,846</span></div>
            <div className="trend-canvas" aria-label="Cost trend sparkline">
              {trendPoints.map((value, i) => (
                <motion.div key={i} className="trend-bar" style={{ height: `${Math.round((value / 1400) * 100)}%` }} />
              ))}
              <div className="trend-overlay"><span className="trend-label">Oct 18</span><span className="trend-label">Oct 24</span></div>
            </div>
            <p className="trend-note">Daily spend varies with usage patterns. Estimates use declared resources and regional rates.</p>
          </article>

          <article className="panel cost-breakdown-panel">
            <div className="panel-heading"><h2>Service-wise breakdown</h2><button className="text-button" onClick={() => setPage("Dashboard")}>View dashboard <ArrowRight size={14} /></button></div>
            <div className="breakdown-list">
              {serviceRows.map((row, i) => (
                <motion.div key={row.name} variants={itemVariants} className="breakdown-row">
                  <div className="breakdown-cell icon-cell"><span className="breakdown-icon">{row.icon && <row.icon size={14} />}</span><strong>{row.name}</strong><small>{row.service}</small></div>
                  <div className="breakdown-cell share-cell">
                    <div className="breakdown-bar"><span className="breakdown-fill" style={{ width: `${row.share}%` }} /></div>
                    <small>{row.share}%</small>
                  </div>
                  <div className="breakdown-cell spend-cell"><strong>{row.spend}</strong></div>
                  <div className="breakdown-cell delta-cell"><span className={`delta ${row.trend}`}>{row.delta === "+0.0%" ? "—" : row.delta}</span></div>
                </motion.div>
              ))}
            </div>
          </article>

          <article className="panel savings-panel">
            <div className="panel-heading"><h2>Savings opportunities</h2><Badge variant="green">${savings} / month</Badge></div>
            <div className="savings-list">
              <SavingsRow icon={HardDrive} title="Right-size oversized EC2 instances" service="EC2" amount="$420" priority="High" />
              <SavingsRow icon={Database} title="Resize underutilized RDS storage" service="RDS" amount="$126" priority="Medium" />
              <SavingsRow icon={Cloud} title="Delete unattached EBS volumes" service="EBS" amount="$72" priority="Low" />
            </div>
            <div className="savings-footer"><strong>Total identified savings</strong><span>${savings} / month</span></div>
          </article>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}

function TrendBar() {
  return null;
}

function OpportunityRow() {
  return null;
}

function SavingsRow({ icon: Icon, title, service, amount, priority }) {
  const priorityVariant = priority === "High" ? "red" : priority === "Medium" ? "amber" : "green";
  return (
    <div className="savings-row">
      <div className="savings-copy"><strong>{title}</strong><span>{service} · {priority.toLowerCase()} priority</span></div>
      <div className="savings-amount"><span>{amount}</span><span className="savings-meta">/ month</span></div>
      <Badge variant={priorityVariant}>{priority}</Badge>
    </div>
  );
}
