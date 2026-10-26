import PricingSection from "../../sections/PricingSection/PricingSection";
import FAQSection from "../../sections/FAQSection/FAQSection";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import "./PricingPage.css";

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <section className="pricing-page-hero section--lg" aria-labelledby="pricing-page-heading">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h1 id="pricing-page-heading" className="pricing-page-hero__title">
            Simple plans for every restaurant
          </h1>
          <p className="pricing-page-hero__sub">
            UrQR is structured around plan-based subscriptions. All pricing shown is illustrative — confirmed commercial terms are agreed during the onboarding process. Contact us for accurate quotes and to discuss your restaurant's specific needs.
          </p>
        </div>
      </section>

      <PricingSection />

      <section className="pricing-page-guarantee section" aria-labelledby="pricing-guarantee-heading">
        <div className="container">
          <div className="pricing-guarantee__inner">
            <div className="pricing-guarantee__icon">🤝</div>
            <div>
              <h2 id="pricing-guarantee-heading" className="pricing-guarantee__title">What you can expect</h2>
              <ul className="pricing-guarantee__list">
                {[
                  "A clear walkthrough of the platform before you commit",
                  "Clear access to every platform feature",
                  "Onboarding support to get your digital menu set up correctly",
                  "Pricing transparency — no hidden fees",
                  "A direct conversation with our team, not a generic sales funnel",
                ].map((item, i) => (
                  <li key={i} className="pricing-guarantee__item">
                    <span className="pricing-guarantee__bullet" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </div>
  );
}
