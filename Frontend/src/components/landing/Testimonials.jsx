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
            OptiCloud helped us identify $618 in monthly savings across our AWS infrastructure. The Terraform analysis caught oversized instances we would have missed.
          </p>
          <div className="lp-quote-author">
            <span className="lp-feedback-icon">P</span>
            <div>
              <strong>Platform Engineering Team</strong>
              <span>Production workloads · 42 resources</span>
            </div>
          </div>
        </article>

        <article className="lp-quote">
          <div className="lp-quote-mark lp-quote-mark-dark" aria-hidden="true">
            <span className="lp-iso lp-iso-back" />
            <span className="lp-iso lp-iso-front" />
          </div>
          <p>
            The AI-powered recommendations are clear and actionable. We reduced our EBS storage costs by right-sizing unattached volumes without any downtime.
          </p>
          <div className="lp-quote-author">
            <span className="lp-feedback-icon">D</span>
            <div>
              <strong>DevOps Team</strong>
              <span>Staging environment · 24 resources</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
