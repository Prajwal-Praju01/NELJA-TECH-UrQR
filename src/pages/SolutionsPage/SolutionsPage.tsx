import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "../../data/appData";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import "./SolutionsPage.css";

const SOLUTION_IMAGES: Record<string, { img: string; alt: string }> = {
  cafe:      { img: "/images/cafe-ambiance.jpg",   alt: "Café interior with QR codes on tables" },
  qsr:       { img: "/images/hero-restaurant.jpg", alt: "Busy restaurant with digital ordering" },
  casual:    { img: "/images/hero-restaurant.jpg", alt: "Casual dining restaurant interior" },
  fine:      { img: "/images/fine-dining.jpg",     alt: "Fine dining restaurant with elegant service" },
  bakery:    { img: "/images/food-spread.jpg",     alt: "Bakery food display" },
  foodcourt: { img: "/images/cafe-ambiance.jpg",   alt: "Food court with multiple outlets" },
  cloud:     { img: "/images/kitchen-team.jpg",    alt: "Cloud kitchen team preparing orders" },
  chain:     { img: "/images/fine-dining.jpg",     alt: "Multi-outlet restaurant chain" },
};

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      {/* Hero */}
      <section className="solutions-hero section" aria-labelledby="solutions-hero-heading">
        <div className="container">
          <div className="section-label">Solutions</div>
          <h1 id="solutions-hero-heading" className="solutions-hero__title">
            Built for every kind of food business
          </h1>
          <p className="solutions-hero__sub">
            UrQR is designed to adapt to the way your specific type of restaurant operates. Select your business type below to understand how the platform can work for you.
          </p>
          <div className="solutions-hero__jump">
            {SOLUTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="btn btn--secondary btn--sm">
                {s.icon} {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solution sections */}
      {SOLUTIONS.map((sol, index) => {
        const visual = SOLUTION_IMAGES[sol.id];
        const isEven = index % 2 === 0;
        return (
          <section
            key={sol.id}
            id={sol.id}
            className={`sol-section section ${isEven ? "sol-section--light" : "sol-section--alt"}`}
            aria-labelledby={`sol-${sol.id}-heading`}
          >
            <div className="container">
              <div className="sol-section__inner">
                {/* Visual - photo card */}
                <div className="sol-section__visual">
                  <div className="sol-section__visual-card">
                    <img
                      src={visual.img}
                      alt={visual.alt}
                      className="sol-section__visual-img"
                      loading="lazy"
                    />
                    <div className="sol-section__visual-footer">
                      <span className="sol-section__icon" aria-hidden="true">{sol.icon}</span>
                      <div>
                        <div className="sol-section__visual-name">{sol.name}</div>
                        <span className="chip chip--emerald">{sol.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sol-section__content">
                  <div className="section-label">{sol.name}</div>
                  <h2 id={`sol-${sol.id}-heading`} className="sol-section__title">
                    {sol.headline}
                  </h2>

                  <div className="sol-section__columns">
                    <div>
                      <h3 className="sol-section__col-title sol-section__col-title--problem">
                        Common challenges
                      </h3>
                      <ul className="sol-section__list">
                        {sol.painPoints.map((p, i) => (
                          <li key={i} className="sol-section__list-item sol-section__list-item--problem">
                            <span className="sol-section__bullet sol-section__bullet--problem" aria-hidden="true">✗</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="sol-section__col-title sol-section__col-title--solution">
                        How UrQR can help
                      </h3>
                      <ul className="sol-section__list">
                        {sol.howUrQRHelps.map((h, i) => (
                          <li key={i} className="sol-section__list-item">
                            <CheckCircle2 size={16} className="sol-section__check" aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact" className="btn btn--primary" id={`sol-cta-${sol.id}`}>
                    Learn more about UrQR for {sol.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA />
    </div>
  );
}
