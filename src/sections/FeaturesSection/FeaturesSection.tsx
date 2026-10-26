import { useState } from "react";
import {
  QrCode, ShoppingCart, LayoutGrid, Map, ChefHat,
  BarChart2, Smartphone, Building2, CheckCircle2,
} from "lucide-react";
import { FEATURES } from "../../data/appData";
import "./FeaturesSection.css";

const ICON_MAP: Record<string, React.ElementType> = {
  QrCode, ShoppingCart, LayoutGrid, Map, ChefHat,
  BarChart2, Smartphone, Building2,
};

const STATUS_LABELS: Record<string, string> = {
  available: "Available",
};

const STATUS_CHIP_CLASS: Record<string, string> = {
  available: "chip chip--emerald",
};

// Map feature IDs to relevant images for the panel
const FEATURE_IMAGES: Record<string, { img: string; alt: string }> = {
  "qr-menu":         { img: "/images/qr-scan.jpg",       alt: "Guest scanning QR code at restaurant table" },
  "qr-ordering":     { img: "/images/hero-restaurant.jpg", alt: "Digital ordering experience" },
  "menu-management": { img: "/images/food-spread.jpg",    alt: "Menu management with food photos" },
  "table-visibility":{ img: "/images/cafe-ambiance.jpg",  alt: "Restaurant floor view" },
  "kitchen-workflow":{ img: "/images/kitchen-team.jpg",   alt: "Kitchen team with digital order display" },
  "analytics":       { img: "/images/hero-restaurant.jpg", alt: "Restaurant analytics overview" },
  "cx":              { img: "/images/qr-scan.jpg",        alt: "Guest smartphone experience" },
  "multi-outlet":    { img: "/images/fine-dining.jpg",    alt: "Multi-outlet restaurant chain" },
};

export default function FeaturesSection() {
  const [active, setActive] = useState(FEATURES[0].id);
  const activeFeature = FEATURES.find((f) => f.id === active)!;
  const Icon = ICON_MAP[activeFeature.icon] ?? QrCode;
  const visual = FEATURE_IMAGES[activeFeature.id];

  return (
    <section className="features-section section" style={{ background: "var(--color-bg-alt)" }} aria-labelledby="features-heading">
      <div className="container">
        <div className="features-section__header">
          <div className="section-label">Core Features</div>
          <h2 id="features-heading" className="features-section__title">
            Everything your restaurant needs in one place
          </h2>
          <p className="features-section__sub">
            UrQR is a complete restaurant technology layer connecting digital menus, ordering, and restaurant operations.
          </p>
        </div>

        <div className="features-layout">
          {/* Tab list */}
          <div className="features-tabs" role="tablist" aria-label="Product features">
            {FEATURES.map((f) => {
              const Ic = ICON_MAP[f.icon] ?? QrCode;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active === f.id}
                  aria-controls={`feature-panel-${f.id}`}
                  id={`feature-tab-${f.id}`}
                  className={`features-tab ${active === f.id ? "features-tab--active" : ""}`}
                  onClick={() => setActive(f.id)}
                >
                  <Ic size={16} aria-hidden="true" />
                  <span>{f.title}</span>
                  <span className={`${STATUS_CHIP_CLASS[f.status]} feature-status-chip`}>
                    {STATUS_LABELS[f.status]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            id={`feature-panel-${activeFeature.id}`}
            role="tabpanel"
            aria-labelledby={`feature-tab-${activeFeature.id}`}
            className="features-panel"
            key={activeFeature.id}
          >
            {/* Image at the top of panel */}
            {visual && (
              <div className="features-panel__image-wrap">
                <img
                  src={visual.img}
                  alt={visual.alt}
                  className="features-panel__image"
                  loading="lazy"
                />
                <div className="features-panel__image-overlay" />
                <div className="features-panel__image-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
              </div>
            )}

            <div className="features-panel__body">
              <div className={`${STATUS_CHIP_CLASS[activeFeature.status]} features-panel__status`}>
                {STATUS_LABELS[activeFeature.status]}
              </div>
              <h3 className="features-panel__title">{activeFeature.title}</h3>
              <p className="features-panel__desc">{activeFeature.description}</p>
              <ul className="features-panel__list">
                {activeFeature.highlights.map((h, i) => (
                  <li key={i} className="features-panel__item">
                    <CheckCircle2 size={16} className="features-panel__check" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
