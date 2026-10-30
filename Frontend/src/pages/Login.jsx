import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoWordmark from "../assets/landing/logo-opticloud.png";

const authModes = {
  login: {
    eyebrow: "WELCOME BACK",
    title: "Sign in to your account",
    description: "Access your cloud insights and optimization workspace.",
    submitLabel: "Sign in",
  },
  "create-account": {
    eyebrow: "GET STARTED",
    title: "Create your account",
    description: "Set up your OptiCloud account to get started.",
    submitLabel: "Create account",
  },
  "forgot-password": {
    eyebrow: "ACCOUNT RECOVERY",
    title: "Reset your password",
    description: "Enter your email and we’ll help you get back into your account.",
    submitLabel: "Send reset instructions",
  },
};

export function Login({ mode = "login" }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notice, setNotice] = useState("");
  const content = authModes[mode] || authModes.login;

  function handleSubmit(event) {
    event.preventDefault();
    if (mode === "create-account") {
      setNotice("Account creation is not connected yet. Your details have not been sent.");
    } else if (mode === "forgot-password") {
      setNotice("Password reset is not connected yet. No reset email has been sent.");
    } else {
      setNotice("Sign-in is not connected yet. Your credentials have not been sent.");
    }
  }

  return (
    <main className="login-page">
      <div className="login-topbar">
        <Link className="login-back-link" to={mode === "login" ? "/" : "/login"} aria-label={mode === "login" ? "Back to OptiCloud home" : "Back to sign in"}>
          <ArrowLeft size={17} />
          <span>{mode === "login" ? "Back to home" : "Back to sign in"}</span>
        </Link>
      </div>

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-form-panel">
          <Link className="login-logo" to="/" aria-label="OptiCloud home">
            <img src={logoWordmark} alt="OptiCloud" width={240} height={80} />
          </Link>

          <div className="login-heading">
            <span className="login-eyebrow">{content.eyebrow}</span>
            <h1 id="login-title">{content.title}</h1>
            <p>{content.description}</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {mode === "create-account" && (
              <label className="login-field">
                <span>Full name</span>
                <input autoComplete="name" name="name" placeholder="Your name" required type="text" />
              </label>
            )}

            <label className="login-field">
              <span>Email address</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </label>

            {mode !== "forgot-password" && (
              <label className="login-field">
                <span>Password</span>
                <span className="login-password-input">
                  <input
                    autoComplete={mode === "create-account" ? "new-password" : "current-password"}
                    minLength={mode === "create-account" ? 8 : undefined}
                    name="password"
                    placeholder={mode === "create-account" ? "At least 8 characters" : "Enter your password"}
                    required
                    type={passwordVisible ? "text" : "password"}
                  />
                  <button
                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                    className="login-password-toggle"
                    onClick={() => setPasswordVisible((visible) => !visible)}
                    type="button"
                  >
                    {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </span>
              </label>
            )}

            {mode === "login" && (
              <div className="login-form-options">
                <label className="login-remember">
                  <input name="remember" type="checkbox" />
                  <span>Keep me signed in</span>
                </label>
                <Link className="login-inline-link" to="/forgot-password">Forgot password?</Link>
              </div>
            )}

            {mode === "create-account" && (
              <label className="login-remember login-terms">
                <input name="terms" required type="checkbox" />
                <span>I agree to the terms and privacy policy.</span>
              </label>
            )}

            <button className="login-submit" type="submit">{content.submitLabel}</button>
            <p aria-live="polite" className="login-notice" role="status">{notice}</p>
          </form>

          <p className="login-footer">
            {mode === "login" && (
              <>New to OptiCloud? <Link className="login-inline-link" to="/create-account">Create an account</Link></>
            )}
            {mode === "create-account" && (
              <>Already have an account? <Link className="login-inline-link" to="/login">Sign in</Link></>
            )}
            {mode === "forgot-password" && (
              <>Remember your password? <Link className="login-inline-link" to="/login">Sign in</Link></>
            )}
          </p>
        </div>

        <aside className="login-aside" aria-label="About OptiCloud">
          <div className="login-orbit login-orbit-one" />
          <div className="login-orbit login-orbit-two" />
          <div className="login-aside-content">
            <span className="login-aside-label"><Sparkles size={15} /> CLOUD COST INTELLIGENCE</span>
            <h2>Make every cloud decision count.</h2>
            <p>Bring your infrastructure, costs, and recommendations together in one clear view.</p>
            <div className="login-benefits">
              <div><Gauge size={19} /><span>Understand your cloud spend</span></div>
              <div><ShieldCheck size={19} /><span>Optimize with confidence</span></div>
            </div>
          </div>
          <div className="login-aside-mark" aria-hidden="true">O</div>
        </aside>
      </section>

      <p className="login-legal">© {new Date().getFullYear()} OptiCloud. All rights reserved.</p>
    </main>
  );
}
