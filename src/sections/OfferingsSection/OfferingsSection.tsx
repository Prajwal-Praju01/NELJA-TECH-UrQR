import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, ChefHat, QrCode, Utensils } from "lucide-react";
import "./OfferingsSection.css";

const OFFERINGS = [
  {
    icon: QrCode,
    title: "Digital menus for guests",
    description: "Let guests scan a QR code to browse your menu instantly on any smartphone — no app or account required.",
    link: "/product#digital-menu",
    linkLabel: "See digital menus",
  },
  {
    icon: Utensils,
    title: "Ordering from the table",
    description: "Guests can explore dishes, customise their order, and send it directly from their phone.",
    link: "/product#qr-ordering",
    linkLabel: "See QR ordering",
  },
  {
    icon: ChefHat,
    title: "Tools for your team",
    description: "Keep menus updated, see table activity, and give your kitchen a clear view of incoming orders.",
    link: "/product#kitchen-workflow",
    linkLabel: "See team tools",
  },
  {
    icon: BarChart3,
    title: "Reports for your operation",
    description: "See order volumes, popular dishes, and day-to-day activity without building reports yourself.",
    link: "/product#analytics",
    linkLabel: "See analytics",
  },
];

export default function OfferingsSection() {
  return (
    <section className="offerings section" aria-labelledby="offerings-heading">
      <div className="container">
        <div className="offerings__header">
          <div className="section-label">What you get with UrQR</div>
          <h2 id="offerings-heading" className="offerings__title">
            The tools your restaurant needs between seating a guest and serving the order
          </h2>
          <p className="offerings__sub">
            Start with a digital menu and add ordering, table visibility, kitchen workflow, and reporting as your operation needs them.
          </p>
        </div>

        <div className="offerings__grid">
          {OFFERINGS.map((offering) => {
            const Icon = offering.icon;
            return (
              <article className="offering-card" key={offering.title}>
                <div className="offering-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
                <Link to={offering.link} className="offering-card__link">
                  {offering.linkLabel} <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="offerings__footer">
          <p>From one café to a growing restaurant chain, UrQR adapts to your operation.</p>
          <Link to="/product" className="btn btn--secondary">
            Explore all capabilities <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
