import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Card, Footer, PageHeading } from "../components/ui/index.jsx";
import "../styles/pages/settings.css";

export function Settings() {
  return (
    <>
      <PageHeading eyebrow="Workspace" title="Settings" description="Manage your workspace preferences." />
      <section className="panel settings-panel">
        <h2>Workspace</h2>
        <div className="setting-row"><span><strong>Workspace name</strong><small>Shown to members of your team</small></span><input defaultValue="Acme Engineering" /></div>
        <div className="setting-row"><span><strong>Default region</strong><small>Used for cost estimation</small></span><select defaultValue="us-east-1"><option>us-east-1</option><option>us-west-2</option><option>eu-west-1</option></select></div>
        <div className="setting-row"><span><strong>Display currency</strong><small>Estimates are shown in this currency</small></span><select defaultValue="USD"><option>USD</option><option>EUR</option><option>GBP</option></select></div>
        <Button>Save preferences</Button>
      </section>
      <section className="panel settings-panel" style={{ marginTop: 14 }}>
        <h2>Account</h2>
        <div className="setting-row"><span><strong>Plan</strong><small>Starter · Renews monthly</small></span><Badge variant="blue">Active</Badge></div>
        <div className="setting-row"><span><strong>Billing email</strong><small>Invoices are sent here</small></span><input defaultValue="jamie@acme.example" /></div>
      </section>
      <Footer />
    </>
  );
}

function Badge({ children, variant = "gray" }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
