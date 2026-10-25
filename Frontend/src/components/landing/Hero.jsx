import arcsLeft from "../../assets/landing/hero-arcs-left.svg";
import arcsRight from "../../assets/landing/hero-arcs-right.svg";
import cubeIcon from "../../assets/landing/cube-icon.svg";
import icon1 from "../../assets/landing/hero-icon-1.png";
import icon2 from "../../assets/landing/hero-icon-2.png";
import icon3 from "../../assets/landing/hero-icon-3.png";
import icon4 from "../../assets/landing/hero-icon-4.png";
import icon5 from "../../assets/landing/hero-icon-5.png";
import icon6 from "../../assets/landing/hero-icon-6.png";

const orbitIcons = [
  { src: icon1, className: "lp-orbit lp-orbit-1", alt: "Integration" },
  { src: icon3, className: "lp-orbit lp-orbit-2", alt: "Integration" },
  { src: icon4, className: "lp-orbit lp-orbit-3", alt: "Integration" },
  { src: icon2, className: "lp-orbit lp-orbit-4", alt: "Integration" },
  { src: icon5, className: "lp-orbit lp-orbit-5", alt: "Integration" },
  { src: icon6, className: "lp-orbit lp-orbit-6", alt: "Integration" },
];

export function Hero({ onEnterApp }) {
  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero-copy">
        <h1>Create, inspect, and apply synthetic surveillance broadly.</h1>
        <p className="lp-hero-sub">
          Start with a stunning homepage. Stay motivated without hurting your pocket.
        </p>
        <button type="button" className="lp-pill-btn lp-pill-lg" onClick={onEnterApp}>
          Start for free
        </button>
        <p className="lp-hero-demo">
          <span>Want to talk or get a live demo?</span>{" "}
          <button type="button" className="lp-inline-link" onClick={onEnterApp}>
            Get in touch →
          </button>
        </p>
      </div>

      <div className="lp-hero-visual" aria-hidden="true">
        <img className="lp-arcs lp-arcs-left" src={arcsLeft} alt="" width={721} height={700} />
        <img className="lp-arcs lp-arcs-right" src={arcsRight} alt="" width={721} height={700} />
        <div className="lp-hero-hub">
          <img src={cubeIcon} alt="" width={54} height={54} />
        </div>
        {orbitIcons.map((icon) => (
          <img key={icon.className} className={icon.className} src={icon.src} alt={icon.alt} width={88} height={88} />
        ))}
      </div>
    </section>
  );
}
