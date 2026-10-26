import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta section" aria-labelledby="cta-heading">
      {/* Background image */}
      <div className="final-cta__bg" aria-hidden="true">
        <img
          src="/images/fine-dining.jpg"
          alt=""
          className="final-cta__bg-img"
          loading="lazy"
        />
        <div className="final-cta__bg-overlay" />
      </div>

      <div className="container">
        <div className="final-cta__inner">
          <div className="final-cta__content">
            <div className="final-cta__eyebrow">
              <Sparkles size={14} />
              Ready to get started?
            </div>
            <h2 id="cta-heading" className="final-cta__title serif">
              Your tables are ready for a smarter experience.
            </h2>
            <p className="final-cta__sub">
              See how UrQR works for your restaurant. Book a personalised demo with our team and we'll walk you through the guest experience, the management dashboard, and the roadmap ahead.
            </p>
            <div className="final-cta__actions">
              <Link to="/contact" className="btn btn--cta-primary btn--lg" id="final-book-demo">
                <CalendarCheck size={18} />
                Book a Demo
              </Link>
              <Link to="/pricing" className="btn btn--cta-secondary btn--lg" id="final-see-pricing">
                See Pricing <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="final-cta__trust">
              {["No credit card required", "Setup in under 2 minutes", "Cancel anytime"].map((t, i) => (
                <span key={i} className="final-cta__trust-item">
                  <span className="final-cta__trust-dot" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative card */}
          <div className="final-cta__card" aria-hidden="true">
            <div className="final-cta__table-line">
              {["T-01", "T-02", "T-03", "T-04", "T-05", "T-06"].map((t) => (
                <div key={t} className="final-cta__table-chip">{t}</div>
              ))}
            </div>
            <div className="final-cta__order-preview">
              <div className="final-cta__order-item">
                <span>🫙</span>
                <span>Paneer Tikka × 2</span>
                <span>₹440</span>
              </div>
              <div className="final-cta__order-item">
                <span>🍚</span>
                <span>Veg Biryani × 1</span>
                <span>₹220</span>
              </div>
              <div className="final-cta__order-item">
                <span>☕</span>
                <span>Filter Coffee × 2</span>
                <span>₹140</span>
              </div>
              <div className="final-cta__order-total">
                <span>Total</span>
                <span>₹800</span>
              </div>
            </div>
            <div className="final-cta__status-bar">
              <span className="final-cta__status-dot" />
              Table T-04 · Order preparing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
