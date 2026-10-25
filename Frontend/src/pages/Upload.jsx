import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, Cloud, CloudUpload, FileCode2, Folder, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button, Footer, Notice, PageHeading } from "../components/ui/index.jsx";
import { AsideStep, BoxIcon, WorkflowStep } from "../components/ui/steps.jsx";
import { useNavigation } from "../context/NavigationContext.jsx";
import "../styles/pages/upload.css";

export function Upload() {
  const { setPage } = useNavigation();
  const inputRef = useRef(null);
  const [files, setFiles] = useState([
    { name: "atlas-prod-v12.tf", size: "18 KB" },
    { name: "variables.tf", size: "6 KB" },
    { name: "outputs.tf", size: "4 KB" },
  ]);
  const [dragging, setDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [notice, setNotice] = useState("");

  function addFiles(fileList) {
    const accepted = Array.from(fileList).filter((file) => /\.(tf|tfvars|hcl|zip)$/i.test(file.name));
    if (!accepted.length) {
      setNotice("Choose Terraform, HCL, or ZIP files to continue.");
      return;
    }
    setFiles((existing) => [
      ...existing,
      ...accepted.map((file) => ({ name: file.name, size: `${Math.max(1, Math.round(file.size / 1024))} KB` })),
    ]);
    setNotice(`${accepted.length} file${accepted.length > 1 ? "s" : ""} added to this local demo.`);
  }

  return (
    <>
      <PageHeading
        eyebrow="Connect infrastructure"
        title="Bring your infrastructure into focus"
        description="Upload your Terraform configuration to uncover cost, performance, and architecture opportunities."
      />
      <div className="workflow-steps"><WorkflowStep number="1" label="Terraform upload" active /><ChevronRight /><WorkflowStep number="2" label="Analysis" /><ChevronRight /><WorkflowStep number="3" label="Detect issues" /><ChevronRight /><WorkflowStep number="4" label="AI explanation" /><ChevronRight /><WorkflowStep number="5" label="Recommendation" /><ChevronRight /><WorkflowStep number="6" label="Dashboard" /></div>
      <div className="upload-choice-grid">
        <div className="upload-choice selected"><CloudUpload size={19} /><span><strong>Terraform upload</strong><small>Analyze configuration files</small></span><CheckCircle2 size={15} /></div>
        <div className="upload-choice disabled"><Cloud size={19} /><span><strong>Connect AWS</strong><small>Direct account integration</small></span><span className="coming-soon">Coming soon</span></div>
        <div className="upload-choice disabled"><BoxIcon /><span><strong>Docker analysis</strong><small>Container configuration insights</small></span><span className="coming-soon">Coming soon</span></div>
      </div>

      <div className="upload-layout">
        <section className="panel upload-panel">
          <div className="upload-panel-heading"><div><h2>Upload Terraform</h2><p>Project</p></div><span className="mvp-label">MVP · Configuration analysis</span></div>
          <label className="project-select"><Folder size={15} /><span>Atlas API <small>Production</small></span><ChevronDown size={15} /></label>
          <p className="upload-help">This analysis will be saved to Atlas API. Previous analyses stay available.</p>
          <div
            className={`dropzone${dragging ? " dropzone-active" : ""}`}
            onDragOver={(event) => { event.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => { event.preventDefault(); setDragging(false); addFiles(event.dataTransfer.files); }}
          >
            <span className="drop-icon"><CloudUpload size={21} /></span>
            <strong>Drop Terraform files here</strong>
            <span>or browse files from your computer</span>
            <Button variant="outline" onClick={() => inputRef.current?.click()}><Folder size={14} /> Browse files</Button>
            <small>.tf files · Up to 10 files · 10 MB total</small>
            <input ref={inputRef} className="visually-hidden" type="file" multiple accept=".tf,.tfvars,.hcl,.zip" onChange={(event) => addFiles(event.target.files)} />
          </div>
          <div className="file-list-heading"><strong>Ready to analyze</strong><span>{files.length} files · 28 KB</span></div>
          <div className="uploaded-files">{files.map((file, index) => (
            <div key={`${file.name}-${index}`} className="uploaded-file"><FileCode2 size={15} /><span>{file.name}</span><small>{file.size}</small><CheckCircle2 size={14} /><button aria-label={`Remove ${file.name}`} onClick={() => setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index))}><X size={13} /></button></div>
          ))}</div>
          {notice && <div className="upload-message" role="status">{notice}</div>}
          <div className="upload-submit-row"><span><strong>Files validated. Ready when you are.</strong><small>Analysis usually takes less than a minute.</small></span><Button disabled={analyzing || files.length === 0} onClick={() => { setAnalyzing(true); window.setTimeout(() => { setAnalyzing(false); setPage("Analyses"); }, 900); }}>{analyzing ? <><span className="spinner" /> Analyzing</> : <><Sparkles size={15} /> Run analysis</>}</Button></div>
        </section>
        <aside className="upload-aside">
          <section className="panel">
            <h2>What happens next</h2>
            <AsideStep number="1" title="Map your resources" text="Identify AWS resources, dependencies, and declared configuration." />
            <AsideStep number="2" title="Detect opportunities" text="Check for cost, performance, and architecture issues." />
            <AsideStep number="3" title="Understand the why" text="Review AI explanations and suggested Terraform changes." />
          </section>
          <section className="panel before-upload"><h2>Before you upload</h2><ul><li>Include related .tf files for more context.</li><li>Remove credentials, secrets, and sensitive values.</li><li>Remote modules and runtime usage are not resolved in this MVP.</li></ul><button className="text-button">Read the upload guide <ArrowRight size={13} /></button></section>
          <div className="privacy-card"><ShieldCheck size={16} /><div><strong>Exploring OptiCloud?</strong><p>These Atlas API files are sample data. No AWS connection is active.</p></div></div>
        </aside>
      </div>
      <Notice>Read-only by design. OptiCloud analyzes uploaded configuration; it cannot access your AWS account or apply Terraform changes.</Notice>
      <Footer />
    </>
  );
}
