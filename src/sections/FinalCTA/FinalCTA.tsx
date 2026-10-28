import { Link } from "react-router-dom";
import { CalendarCheck, Sparkles } from "lucide-react";
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
              See it with your own menu
            </div>
            <h2 id="cta-heading" className="final-cta__title serif">
              Give your guests a better way to order.
            </h2>
            <p className="final-cta__sub">
              Book a short demo and we will show you the guest menu, the order flow, and the tools your team uses after an order is placed.
            </p>
            <div className="final-cta__actions">
              <Link to="/contact" className="btn btn--cta-primary btn--lg" id="final-book-demo">
                <CalendarCheck size={18} />
                Book a Demo
              </Link>
            </div>

            {/* Trust signals */}
            <div className="final-cta__trust">
              {["See the guest menu", "Understand the setup", "Ask about your operation"].map((t, i) => (
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
                <span>Paneer Tikka × 2</span>
                <span>₹440</span>
              </div>
              <div className="final-cta__order-item">
                <span>Veg Biryani × 1</span>
                <span>₹220</span>
              </div>
              <div className="final-cta__order-item">
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
