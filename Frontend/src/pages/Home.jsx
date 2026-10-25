import { LandingNavbar } from "../components/landing/LandingNavbar.jsx";
import { Hero } from "../components/landing/Hero.jsx";
import { LogoCloud } from "../components/landing/LogoCloud.jsx";
import { FeatureShare } from "../components/landing/FeatureShare.jsx";
import { FeatureFeedback } from "../components/landing/FeatureFeedback.jsx";
import { OrangeBanner } from "../components/landing/OrangeBanner.jsx";
import { AnalyticsSection } from "../components/landing/AnalyticsSection.jsx";
import { Testimonials } from "../components/landing/Testimonials.jsx";
import { CustomerLogos } from "../components/landing/CustomerLogos.jsx";
import { DashboardPreview } from "../components/landing/DashboardPreview.jsx";
import { FinalCTA } from "../components/landing/FinalCTA.jsx";
import { LandingFooter } from "../components/landing/LandingFooter.jsx";

export function Home({ setPage }) {
  const enterApp = () => setPage("Dashboard");
  const navigate = (destination) => setPage(destination);

  return (
    <div className="landing-page">
      <LandingNavbar onEnterApp={enterApp} onNavigate={navigate} />
      <main>
        <Hero onEnterApp={enterApp} />
        <LogoCloud />
        <FeatureShare />
        <FeatureFeedback />
        <OrangeBanner />
        <AnalyticsSection />
        <Testimonials />
        <CustomerLogos />
        <DashboardPreview onEnterApp={enterApp} />
        <FinalCTA onEnterApp={enterApp} />
      </main>
      <LandingFooter onNavigate={navigate} />
    </div>
  );
}
