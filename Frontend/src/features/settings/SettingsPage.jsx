import { Button, Footer, PageHeading } from "../../components/shared/ui.jsx";
import "./settings.css";

export function SettingsPage() {
  return <><PageHeading title="Settings" description="Manage your workspace preferences." /><section className="panel settings-panel"><h2>Workspace</h2><div className="setting-row"><span><strong>Workspace name</strong><small>Shown to members of your team</small></span><input defaultValue="Acme Engineering" /></div><div className="setting-row"><span><strong>Default region</strong><small>Used for cost estimation</small></span><select defaultValue="us-east-1"><option>us-east-1</option><option>us-west-2</option><option>eu-west-1</option></select></div><div className="setting-row"><span><strong>Display currency</strong><small>Estimates are shown in this currency</small></span><select defaultValue="USD"><option>USD</option><option>EUR</option><option>GBP</option></select></div><Button>Save preferences</Button></section><Footer /></>;
}
