import crowdstrike from "../../assets/landing/loved-crowdstrike.png";
import airbus from "../../assets/landing/loved-airbus.png";
import hays from "../../assets/landing/loved-hays.png";
import sentry from "../../assets/landing/loved-sentry.svg";
import medwing from "../../assets/landing/loved-medwing.png";
import cathay from "../../assets/landing/loved-cathay.png";
import liquid from "../../assets/landing/loved-liquid.png";
import autotrader from "../../assets/landing/loved-autotrader.png";

const logos = [
  { src: crowdstrike, alt: "CrowdStrike" },
  { src: airbus, alt: "Airbus" },
  { src: hays, alt: "Hays" },
  { src: sentry, alt: "Sentry" },
  { src: medwing, alt: "Medwing" },
  { src: cathay, alt: "Cathay Pacific" },
  { src: liquid, alt: "Liquid Web" },
  { src: autotrader, alt: "AutoTrader" },
];

export function CustomerLogos() {
  return (
    <section className="lp-loved" id="integrations">
      <h2>Trusted by engineering teams</h2>
      <div className="lp-loved-grid">
        {logos.map((logo) => (
          <div className="lp-loved-cell" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
