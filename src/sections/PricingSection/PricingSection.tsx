import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "../../data/appData";
import "./PricingSection.css";

interface Props {
  compact?: boolean; // when true, used as a homepage teaser
}

export default function PricingSection({ compact }: Props) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing-section section" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="pricing-section__header">
          <div className="section-label">Pricing</div>
          <h2 id="pricing-heading" className="pricing-section__title">
            {compact ? "Simple, transparent plans" : "Choose the right plan for your restaurant"}
          </h2>
          <p className="pricing-section__sub">
            All plans include the core digital menu experience. Pricing shown is illustrative — final commercial terms are confirmed during onboarding.
          </p>

          {/* Billing toggle */}
          <div className="pricing-toggle" role="group" aria-label="Billing period">
            <button
              className={`pricing-toggle__btn ${!annual ? "pricing-toggle__btn--active" : ""}`}
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              id="billing-monthly-btn"
            >
              Monthly
            </button>
            <button
              className={`pricing-toggle__btn ${annual ? "pricing-toggle__btn--active" : ""}`}
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              id="billing-annual-btn"
            >
              Annual <span className="pricing-toggle__save">Save ~20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-cards">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.recommended ? "pricing-card--recommended" : ""}`}
              aria-label={`${plan.name} plan`}
            >
              {plan.recommended && (
                <div className="pricing-card__badge">Most Popular</div>
              )}
              <div className="pricing-card__top">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-card__price">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="pricing-card__currency">{plan.currency}</span>
                    <span className="pricing-card__amount">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="pricing-card__period">/mo</span>
                  </>
                ) : (
                  <span className="pricing-card__contact">Contact for pricing</span>
                )}
              </div>

              {annual && plan.monthlyPrice !== null && (
                <p className="pricing-card__billed">Billed annually · illustrative price</p>
              )}

              <p className="pricing-card__suited">
                <strong>Best for:</strong> {plan.suitedFor}
              </p>

              {!compact && (
                <ul className="pricing-card__features">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`pricing-feature ${f.included ? "" : "pricing-feature--excluded"}`}>
                      {f.included ? (
                        <Check size={14} className="pricing-feature__icon pricing-feature__icon--yes" aria-label="Included" />
                      ) : (
                        <X size={14} className="pricing-feature__icon pricing-feature__icon--no" aria-label="Not included" />
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to={plan.ctaLink}
                className={`btn ${plan.recommended ? "btn--primary" : "btn--outline-emerald"} btn--lg`}
                style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}
                id={`pricing-cta-${plan.id}`}
              >
                {plan.cta}
              </Link>

              {plan.note && (
                <p className="pricing-card__note">{plan.note}</p>
              )}
            </div>
          ))}
        </div>

        {compact && (
          <div className="pricing-section__more">
            <Link to="/pricing" className="btn btn--secondary" id="pricing-see-all">
              See full feature comparison <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
