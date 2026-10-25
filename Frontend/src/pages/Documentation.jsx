import { ArrowRight, CloudUpload, Gauge, ShieldCheck } from "lucide-react";
import { Footer, PageHeading } from "../components/ui/index.jsx";
import "../styles/pages/documentation.css";

export function Documentation() {
  return (
    <>
      <PageHeading title="Documentation" description="A practical guide to understanding your infrastructure with OptiCloud." />
      <div className="docs-grid">
        {[
          { icon: CloudUpload, title: "Upload Terraform", text: "Prepare and upload Terraform files for a read-only configuration analysis." },
          { icon: Gauge, title: "Understand findings", text: "Learn how cost, performance, and architecture opportunities are identified." },
          { icon: ShieldCheck, title: "Review safely", text: "Use suggested changes as a starting point; OptiCloud never deploys on your behalf." },
        ].map(({ icon: Icon, title, text }) => (
          <article className="panel docs-card" key={title}>
            <span><Icon size={19} /></span>
            <h2>{title}</h2>
            <p>{text}</p>
            <button className="text-button">Read guide <ArrowRight size={14} /></button>
          </article>
        ))}
      </div>
      <Footer />
    </>
  );
}
