import { Link } from "react-router-dom";
import { HOW_IT_WORKS_STEPS } from "../../data/appData";
import { ArrowRight } from "lucide-react";
import "./HowItWorks.css";

const STEP_IMAGES: Record<string, string> = {
  step1: "/images/food-spread.jpg",
  step2: "/images/cafe-ambiance.jpg",
  step3: "/images/qr-scan.jpg",
  step4: "/images/kitchen-team.jpg",
};

export default function HowItWorks() {
  return (
    <section className="hiw section" aria-labelledby="hiw-heading">
      <div className="container">
        <div className="hiw__header">
          <div className="section-label">How It Works</div>
          <h2 id="hiw-heading" className="hiw__title">
            From menu setup to guest scan — in four simple steps
          </h2>
        </div>

        <div className="hiw__grid">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.id} className="hiw-step">
              {/* Step image */}
              <div className="hiw-step__visual">
                <img
                  src={STEP_IMAGES[step.id]}
                  alt=""
                  className="hiw-step__img"
                  loading="lazy"
                />
                <div className="hiw-step__img-overlay" />
                <div
                  className={`hiw-step__num-badge ${
                    step.side === "restaurant" ? "hiw-step__num-badge--restaurant" : "hiw-step__num-badge--guest"
                  }`}
                >
                  {step.number}
                </div>
              </div>

              {/* Step body */}
              <div className="hiw-step__body">
                <div className="hiw-step__side-chip">
                  {step.side === "restaurant" ? "Restaurant side" : "Guest side"}
                </div>
                <h3 className="hiw-step__title">{step.title}</h3>
                <p className="hiw-step__desc">{step.description}</p>
                <ul className="hiw-step__details">
                  {step.details.map((d, i) => (
                    <li key={i} className="hiw-step__detail">
                      <span className="hiw-step__bullet" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw__cta">
          <Link to="/how-it-works" className="btn btn--primary btn--lg" id="hiw-learn-more">
            See Full Workflow <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
