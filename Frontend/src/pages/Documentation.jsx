import { ArrowRight, CloudUpload, Gauge, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Card, Footer, PageHeading } from "../components/ui/index.jsx";
import "../styles/pages/documentation.css";

const docs = [
  { icon: CloudUpload, title: "Upload Terraform", text: "Prepare and upload Terraform files for a read-only configuration analysis." },
  { icon: Gauge, title: "Understand findings", text: "Learn how cost, performance, and architecture opportunities are identified." },
  { icon: ShieldCheck, title: "Review safely", text: "Use suggested changes as a starting point; OptiCloud never deploys on your behalf." },
];

export function Documentation() {
  return (
    <>
      <PageHeading title="Documentation" description="A practical guide to understanding your infrastructure with OptiCloud." />
      <div className="docs-grid">
        {docs.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="docs-card" hover>
            <span><Icon size={19} /></span>
            <h2>{title}</h2>
            <p>{text}</p>
            <button className="text-button">Read guide <ArrowRight size={14} /></button>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
