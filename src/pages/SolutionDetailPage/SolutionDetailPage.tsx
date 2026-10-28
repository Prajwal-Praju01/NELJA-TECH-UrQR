import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "../../data/appData";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import "./SolutionDetailPage.css";

const SOLUTION_IMAGES: Record<string, { img: string; alt: string }> = {
  cafe: { img: "/images/cafe-ambiance.jpg", alt: "Café interior with QR codes on tables" },
  qsr: { img: "/images/hero-restaurant.jpg", alt: "Busy restaurant with digital ordering" },
  casual: { img: "/images/hero-restaurant.jpg", alt: "Casual dining restaurant interior" },
  fine: { img: "/images/fine-dining.jpg", alt: "Fine dining restaurant with elegant service" },
  bakery: { img: "/images/food-spread.jpg", alt: "Bakery food display" },
  foodcourt: { img: "/images/cafe-ambiance.jpg", alt: "Food court with multiple outlets" },
  cloud: { img: "/images/kitchen-team.jpg", alt: "Cloud kitchen team preparing orders" },
  chain: { img: "/images/fine-dining.jpg", alt: "Multi-outlet restaurant chain" },
};

export default function SolutionDetailPage() {
  const { solutionId } = useParams();
  const solution = SOLUTIONS.find((item) => item.id === solutionId);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const visual = SOLUTION_IMAGES[solution.id];

  return (
    <div className="solution-detail">
      <section className="solution-detail__hero section" aria-labelledby="solution-detail-heading">
        <div className="container">
          <Link to="/solutions" className="solution-detail__back">
            <ArrowLeft size={16} /> All solutions
          </Link>
          <div className="solution-detail__hero-grid">
            <div className="solution-detail__copy">
              <div className="section-label">{solution.icon} {solution.name}</div>
              <h1 id="solution-detail-heading" className="solution-detail__title">
                {solution.headline}
              </h1>
              <p className="solution-detail__intro">
                Give your {solution.name.toLowerCase()} a smoother way to serve guests,
                manage menus, and keep every order moving with UrQR.
              </p>
              <div className="solution-detail__actions">
                <Link to="/contact" className="btn btn--primary btn--lg">
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link to="/product" className="btn btn--secondary btn--lg">
                  Explore the product
                </Link>
              </div>
            </div>
            <div className="solution-detail__image-wrap">
              <img src={visual.img} alt={visual.alt} className="solution-detail__image" />
              <span className="chip chip--emerald solution-detail__tag">{solution.tag}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-detail__content section" aria-labelledby="solution-detail-content-heading">
        <div className="container">
          <div className="solution-detail__content-header">
            <div className="section-label">A better fit for your business</div>
            <h2 id="solution-detail-content-heading">Designed around how you operate</h2>
            <p>UrQR helps your team remove friction without changing the character of your business.</p>
          </div>
          <div className="solution-detail__columns">
            <div className="solution-detail__panel solution-detail__panel--challenge">
              <h3>Common challenges</h3>
              <ul>
                {solution.painPoints.map((point) => (
                  <li key={point}><span aria-hidden="true">✗</span>{point}</li>
                ))}
              </ul>
            </div>
            <div className="solution-detail__panel solution-detail__panel--solution">
              <h3>How UrQR helps</h3>
              <ul>
                {solution.howUrQRHelps.map((benefit) => (
                  <li key={benefit}><CheckCircle2 size={18} aria-hidden="true" />{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="solution-detail__bottom-cta">
            <p>See how UrQR can work for your {solution.name.toLowerCase()}.</p>
            <Link to="/contact" className="btn btn--primary">
              Talk to our team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
