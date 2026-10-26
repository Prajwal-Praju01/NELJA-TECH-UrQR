import { Clock, ClipboardList, RefreshCw, AlertTriangle, Eye } from "lucide-react";
import "./ProblemSolution.css";

const ITEMS = [
  {
    icon: Clock,
    problem: "Customers wait to access a physical menu",
    solution: "Guests scan a QR code and your menu opens on their phone instantly — no wait, no hand-offs.",
  },
  {
    icon: ClipboardList,
    problem: "Manual order-taking creates friction and errors",
    solution: "A clear digital ordering journey helps guests place accurate orders at their own pace.",
  },
  {
    icon: RefreshCw,
    problem: "Updating physical menus is slow and expensive",
    solution: "Change prices, toggle availability, or add new dishes instantly from the management dashboard.",
  },
  {
    icon: AlertTriangle,
    problem: "Communication gaps between front of house and kitchen",
    solution: "A unified order view connects the dining floor to the kitchen workflow.",
  },
  {
    icon: Eye,
    problem: "Limited visibility into what tables are doing",
    solution: "A table status overview gives your team a clear picture of the floor at a glance.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="problem-solution section" aria-labelledby="problem-heading">
      <div className="container">
        <div className="problem-solution__layout">
          {/* Left: Image */}
          <div className="problem-solution__image-col" aria-hidden="true">
            <div className="problem-solution__image-card">
              <img
                src="/images/hero-restaurant.jpg"
                alt=""
                className="problem-solution__image"
                loading="lazy"
              />
              <div className="problem-solution__image-overlay" />
              <div className="problem-solution__image-badge">
                <span className="problem-solution__badge-dot" />
                <div>
                  <p className="problem-solution__badge-title">5 key challenges solved</p>
                  <p className="problem-solution__badge-sub">designed for Indian restaurants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="problem-solution__content">
            <div className="problem-solution__header">
              <div className="section-label">Problem → Solution</div>
              <h2 id="problem-heading" className="problem-solution__title">
                Real restaurant challenges, addressed thoughtfully
              </h2>
              <p className="problem-solution__sub">
                UrQR is designed around the actual friction points restaurant teams and guests encounter every day.
              </p>
            </div>

            <div className="problem-solution__items">
              {ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="ps-item">
                    <div className="ps-item__icon-col">
                      <div className="ps-item__icon">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      {i < ITEMS.length - 1 && <div className="ps-item__line" aria-hidden="true" />}
                    </div>
                    <div className="ps-item__content">
                      <div className="ps-item__problem">
                        <span className="ps-item__problem-label">Challenge</span>
                        <p className="ps-item__problem-text">{item.problem}</p>
                      </div>
                      <div className="ps-item__arrow" aria-hidden="true">→</div>
                      <div className="ps-item__solution">
                        <span className="ps-item__solution-label">UrQR approach</span>
                        <p className="ps-item__solution-text">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
