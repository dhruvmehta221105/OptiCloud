import { useEffect, useState } from "react";
import { ArrowRight, CloudUpload, Gauge, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Card, Footer, PageHeading } from "../components/ui/index.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/documentation.css";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const docs = [
  { icon: CloudUpload, title: "Upload Terraform", text: "Prepare and upload Terraform files for a read-only configuration analysis.", page: "Connect Infrastructure" },
  { icon: Gauge, title: "Understand findings", text: "Learn how cost, performance, and architecture opportunities are identified.", page: "Analyses" },
  { icon: ShieldCheck, title: "Review safely", text: "Use suggested changes as a starting point; OptiCloud never deploys on your behalf.", page: "Developers" },
];

export function Documentation() {
  const { setPage } = useNavigation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <PageHeading title="Documentation" description="A practical guide to understanding your infrastructure with OptiCloud." />
      <motion.div variants={containerVariants} initial="hidden" animate={mounted ? "show" : "hidden"}>
        <div className="docs-grid">
          {docs.map(({ icon: Icon, title, text, page }) => (
            <Card key={title} className="docs-card" hover>
              <span><Icon size={19} /></span>
              <h2>{title}</h2>
              <p>{text}</p>
              <button className="text-button" onClick={() => setPage(page)}>Open page <ArrowRight size={14} /></button>
            </Card>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
