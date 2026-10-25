import gabriel from "../../assets/landing/testimonial-gabriel.png";
import buzz from "../../assets/landing/testimonial-buzz.png";
import acmeStar from "../../assets/landing/logo-acme-star.svg";

export function Testimonials() {
  return (
    <section className="lp-testimonials">
      <div className="lp-testimonials-grid">
        <article className="lp-quote">
          <div className="lp-quote-mark lp-quote-mark-lavender" aria-hidden="true">
            <span className="lp-iso lp-iso-back" />
            <span className="lp-iso lp-iso-front" />
          </div>
          <p>
            Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an
            accelerated expanding organization in which the product undergoes rapid changes,
            Campsite enables us to maintain visibility on what&apos;s transpiring across various
            teams — impeccably aligning with our pre-existing procedures.
          </p>
          <div className="lp-quote-author">
            <img src={gabriel} alt="" width={40} height={40} />
            <div>
              <strong>Gabriel Valdivia</strong>
              <span>Principal Product Designer, Patreon</span>
            </div>
          </div>
        </article>

        <article className="lp-quote">
          <div className="lp-quote-mark lp-quote-mark-dark" aria-hidden="true">
            <img src={acmeStar} alt="" width={39} height={39} />
          </div>
          <p>
            Cloudhub has demonstrated exceptional worth in preserving open communication among
            designers regarding their current endeavors, a challenge that previously impeded our
            progress. It continually stands as a distinctive platform guiding our dialogue towards
            imagination and consistent review, an element I highly value. Moreover, it has
            accelerated our propensity for early-stage feedback beyond my expectations.
          </p>
          <div className="lp-quote-author">
            <img src={buzz} alt="" width={40} height={40} />
            <div>
              <strong>Buzz Usborne</strong>
              <span>Principal Designer, Buildkite</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
