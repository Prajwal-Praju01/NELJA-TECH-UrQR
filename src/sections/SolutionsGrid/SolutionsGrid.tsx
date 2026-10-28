import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "../../data/appData";
import "./SolutionsGrid.css";

// Map solution IDs to relevant background images/colors
const SOLUTION_VISUALS: Record<string, { bg: string; img?: string }> = {
  cafe:      { bg: "linear-gradient(135deg, #78350f 0%, #a16207 100%)", img: "/images/cafe-ambiance.jpg" },
  qsr:       { bg: "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)" },
  casual:    { bg: "linear-gradient(135deg, #1a3a2a 0%, #1A6B4A 100%)", img: "/images/hero-restaurant.jpg" },
  fine:      { bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", img: "/images/fine-dining.jpg" },
  bakery:    { bg: "linear-gradient(135deg, #78350f 0%, #c2813a 100%)" },
  foodcourt: { bg: "linear-gradient(135deg, #312e81 0%, #4338ca 100%)" },
  cloud:     { bg: "linear-gradient(135deg, #134e4a 0%, #0d9488 100%)" },
  chain:     { bg: "linear-gradient(135deg, #1c1b18 0%, #3d3d3d 100%)" },
};

export default function SolutionsGrid() {
  return (
    <section className="solutions-grid section" aria-labelledby="solutions-heading">
      <div className="container">
        <div className="solutions-grid__header">
          <div className="section-label">Solutions by Business Type</div>
          <h2 id="solutions-heading" className="solutions-grid__title">
            Built for every kind of food business
          </h2>
          <p className="solutions-grid__sub">
            From independent cafés to multi-outlet chains, UrQR is designed to adapt to your dining environment.
          </p>
        </div>

        <div className="solutions-grid__cards">
          {SOLUTIONS.map((sol) => {
            const visual = SOLUTION_VISUALS[sol.id];
            return (
              <Link
                to={`/solutions/${sol.id}`}
                key={sol.id}
                className="sol-card"
                aria-label={`${sol.name} solution`}
              >
                {/* Visual header */}
                <div
                  className="sol-card__visual"
                  style={{ background: visual?.bg }}
                >
                  {visual?.img && (
                    <img
                      src={visual.img}
                      alt=""
                      className="sol-card__visual-img"
                      loading="lazy"
                    />
                  )}
                  <div className="sol-card__visual-overlay" />
                  <span className="sol-card__icon" aria-hidden="true">{sol.icon}</span>
                </div>

                {/* Card body */}
                <div className="sol-card__body">
                  <div className="sol-card__top">
                    <h3 className="sol-card__name">{sol.name}</h3>
                    <span className="chip chip--emerald">{sol.tag}</span>
                  </div>
                  <p className="sol-card__headline">{sol.headline}</p>
                  <div className="sol-card__link">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
