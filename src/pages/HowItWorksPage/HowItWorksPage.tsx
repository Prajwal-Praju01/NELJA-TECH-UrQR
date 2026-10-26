import { HOW_IT_WORKS_STEPS } from "../../data/appData";
import MenuDemo from "../../components/MenuDemo/MenuDemo";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import { CheckCircle2 } from "lucide-react";
import "./HowItWorksPage.css";

export default function HowItWorksPage() {
  return (
    <div className="hiw-page">
      {/* Hero */}
      <section className="hiw-page-hero section" aria-labelledby="hiw-page-heading">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h1 id="hiw-page-heading" className="hiw-page-hero__title">
            From QR scan to kitchen — the UrQR journey
          </h1>
          <p className="hiw-page-hero__sub">
            UrQR connects the guest experience at the table to the restaurant team's operational workflow through a simple digital layer.
          </p>
        </div>
      </section>

      {/* Steps detail */}
      <section className="hiw-detail section" aria-label="Workflow steps">
        <div className="container">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`hiw-detail-step ${index % 2 === 0 ? "" : "hiw-detail-step--flip"}`}
              aria-labelledby={`hiw-step-${step.id}-heading`}
            >
              <div className="hiw-detail-step__num-wrap">
                <div className={`hiw-detail-step__num ${step.side === "restaurant" ? "hiw-detail-step__num--restaurant" : "hiw-detail-step__num--guest"}`}>
                  {step.number}
                </div>
              </div>
              <div className="hiw-detail-step__content">
                <div className={`chip ${step.side === "restaurant" ? "chip--emerald" : "chip--amber"}`}>
                  {step.side === "restaurant" ? "Restaurant setup" : "Guest experience"}
                </div>
                <h2 id={`hiw-step-${step.id}-heading`} className="hiw-detail-step__title">{step.title}</h2>
                <p className="hiw-detail-step__desc">{step.description}</p>
                <ul className="hiw-detail-step__details">
                  {step.details.map((d, i) => (
                    <li key={i} className="hiw-detail-step__detail">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest view */}
      <section className="hiw-demo section" style={{ background: "var(--color-bg-alt)" }} aria-labelledby="hiw-demo-heading">
        <div className="container">
          <div className="hiw-demo__inner">
            <div className="hiw-demo__content">
              <div className="section-label">Guest Experience</div>
              <h2 id="hiw-demo-heading" className="hiw-demo__title">
                What the guest actually sees
              </h2>
              <p className="hiw-demo__sub">
                The interactive demo below shows the guest-facing UrQR menu experience. This runs entirely in the browser — no real orders, no data collected.
              </p>
              <div className="hiw-demo__highlights">
                {[
                  "No app installation required",
                  "Works with standard smartphone camera QR scan",
                  "Browse categories, view item details",
                  "Add to cart and review order (demo only)",
                  "See a simulated order status screen",
                ].map((h, i) => (
                  <div key={i} className="hiw-demo__highlight">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
            <div className="hiw-demo__phone">
              <MenuDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant side */}
      <section className="hiw-restaurant section" aria-labelledby="hiw-restaurant-heading">
        <div className="container">
          <div className="section-label">Restaurant Side</div>
          <h2 id="hiw-restaurant-heading" className="hiw-restaurant__title">
            What the restaurant team manages
          </h2>
          <div className="hiw-restaurant__grid">
            {[
              {
                step: "Menu Dashboard",
                desc: "Add items, set prices, upload images, toggle availability. Changes appear immediately on the guest menu.",
                status: "Available",
                class: "chip--emerald",
              },
              {
                step: "Table QR Management",
                desc: "Generate QR codes for each table. Download in print-ready quality. Replace or regenerate anytime.",
                status: "Available",
                class: "chip--emerald",
              },
              {
                step: "Order Overview",
                desc: "See incoming orders from the dining floor as they arrive. Track which table ordered what.",
                status: "Available",
                class: "chip--emerald",
              },
              {
                step: "Kitchen View",
                desc: "A dedicated screen for kitchen staff showing incoming orders, preparation status, and ready items.",
                status: "Available",
                class: "chip--emerald",
              },
            ].map((item, i) => (
              <div key={i} className="hiw-restaurant__card card">
                <span className={`chip ${item.class}`}>{item.status}</span>
                <h3 className="hiw-restaurant__card-title">{item.step}</h3>
                <p className="hiw-restaurant__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
