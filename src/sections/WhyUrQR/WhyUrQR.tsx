import { Link } from "react-router-dom";
import { Smartphone, Zap, BarChart2, CheckCircle2, RefreshCw, Layers } from "lucide-react";
import "./WhyUrQR.css";

const PRINCIPLES = [
  {
    icon: Smartphone,
    title: "Mobile-first guest experience",
    desc: "Every guest interaction is designed for a phone. No PDFs, no long load times — a fast, clean menu that works on any device.",
  },
  {
    icon: Zap,
    title: "Simple and friction-free",
    desc: "Scan, browse, order. The guest journey is intentionally short so your guests spend time enjoying food, not navigating software.",
  },
  {
    icon: CheckCircle2,
    title: "Restaurant-focused workflows",
    desc: "Built around how restaurants actually operate — tables, categories, item availability, and kitchen handoff.",
  },
  {
    icon: RefreshCw,
    title: "Always up to date",
    desc: "Update your menu, prices, or availability instantly. Your digital menu reflects reality — every time, every guest.",
  },
  {
    icon: BarChart2,
    title: "Clear operational visibility",
    desc: "Give your team a cleaner picture of what's happening on the floor. Less guesswork, clearer service.",
  },
  {
    icon: Layers,
    title: "Start with what you need",
    desc: "Use the digital menu first, then add ordering and operational tools as your restaurant is ready.",
  },
];

export default function WhyUrQR() {
  return (
    <section className="why-urqr section" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-urqr__inner">
          <div className="why-urqr__left">
            <div className="section-label">Why UrQR</div>
            <h2 id="why-heading" className="why-urqr__title serif">
              A practical digital menu for the way restaurants actually work.
            </h2>
            <p className="why-urqr__sub">
              Guests get a quick way to see the menu and order. Your team gets fewer interruptions and one place to manage what is available.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg" id="why-book-demo">
              Book a Demo
            </Link>

            {/* Food image */}
            <div className="why-urqr__image-card">
              <img
                src="/images/food-spread.jpg"
                alt="Premium Indian restaurant food spread"
                className="why-urqr__image"
                loading="lazy"
              />
              <div className="why-urqr__image-caption">
                <span className="why-urqr__image-caption-dot" />
                Restaurant-quality digital menus
              </div>
            </div>
          </div>

          <div className="why-urqr__right">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="why-card">
                  <div className="why-card__icon">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="why-card__title">{p.title}</h3>
                    <p className="why-card__desc">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
