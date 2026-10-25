import { HardDrive } from "lucide-react";
import "./steps.css";

export function BoxIcon() {
  return <span className="box-icon" aria-hidden="true"><HardDrive size={17} /></span>;
}

export function WorkflowStep({ number, label, active }) {
  return <div className={`workflow-step${active ? " workflow-active" : ""}`}><span>{number}</span>{label}</div>;
}

export function AsideStep({ number, title, text }) {
  return <div className="aside-step"><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></div>;
}
