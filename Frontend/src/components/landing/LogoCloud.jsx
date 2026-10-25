import patreon from "../../assets/landing/logo-patreon.svg";
import airbnb from "../../assets/landing/logo-airbnb.svg";
import fiberplane from "../../assets/landing/logo-fiberplane.svg";
import coinbase from "../../assets/landing/logo-coinbase.svg";
import griffin from "../../assets/landing/logo-griffin.svg";
import helpscout from "../../assets/landing/logo-helpscout.svg";
import plaid from "../../assets/landing/logo-plaid.svg";

const logos = [
  { src: patreon, alt: "Patreon", w: 140, h: 28 },
  { src: airbnb, alt: "Airbnb", w: 140, h: 63 },
  { src: fiberplane, alt: "Fiberplane", w: 160, h: 40 },
  { src: coinbase, alt: "Coinbase", w: 150, h: 36 },
  { src: griffin, alt: "Griffin", w: 120, h: 52 },
  { src: helpscout, alt: "Help Scout", w: 160, h: 40 },
  { src: plaid, alt: "Plaid", w: 120, h: 61 },
];

export function LogoCloud() {
  return (
    <section className="lp-logo-cloud" aria-label="Partners">
      <div className="lp-logo-row">
        {logos.map((logo) => (
          <div className="lp-logo-item" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} />
          </div>
        ))}
      </div>
    </section>
  );
}
