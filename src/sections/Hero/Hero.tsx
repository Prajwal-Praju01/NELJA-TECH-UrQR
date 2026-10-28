import { Link } from "react-router-dom";
import { ArrowRight, Scan, Smartphone, ChefHat, Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Full-bleed background image */}
      <div className="hero__bg-image" aria-hidden="true">
        <img
          src="/images/hero-restaurant.jpg"
          alt=""
          className="hero__bg-img"
          fetchPriority="high"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__above-fold">
        <div className="container">
          <div className="hero__inner">
            {/* Left: Text */}
            <div className="hero__content">
              <div className="hero__badge">
                <Star size={12} fill="currentColor" />
                Digital menus and ordering for restaurants
              </div>
              <h1 className="hero__headline">
                Put your menu and table ordering on{" "}
                <em className="hero__headline-em">every guest's phone.</em>
              </h1>
              <p className="hero__sub">
                Guests scan a QR code, browse your menu, and place an order without
                waiting for a menu or downloading an app. Your team sees the order
                and keeps service moving.
              </p>

              <div className="hero__cta-group">
                <Link to="/contact" className="btn btn--hero-primary btn--lg" id="hero-book-demo">
                  Book a Demo
                  <ArrowRight size={16} />
                </Link>
                <Link to="/product" className="btn btn--hero-secondary btn--lg" id="hero-explore">
                  Explore UrQR
                </Link>
              </div>

              {/* Value props */}
              <div className="hero__props">
                <div className="hero__prop">
                  <Scan size={15} className="hero__prop-icon" />
                  No app download for guests
                </div>
                <div className="hero__prop">
                  <Smartphone size={15} className="hero__prop-icon" />
                  Works on any smartphone
                </div>
                <div className="hero__prop">
                  <ChefHat size={15} className="hero__prop-icon" />
                  Built for Indian restaurants
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hero__visual" aria-hidden="true">
              {/* Table card */}
              <div className="hero__table-card hero__float-card">
                <div className="hero__table-card-top">
                  <span className="hero__table-label">Table T-04</span>
                  <span className="hero__restaurant-label">Aromas of India</span>
                </div>
                {/* QR visual */}
                <div className="hero__qr-wrap">
                  <svg viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="hero__qr-svg">
                    <rect x="0" y="0" width="4" height="4" rx="0.5" />
                    <rect x="7" y="0" width="4" height="4" rx="0.5" />
                    <rect x="0" y="7" width="4" height="4" rx="0.5" />
                    <rect x="1" y="1" width="2" height="2" fill="white" rx="0.2" />
                    <rect x="8" y="1" width="2" height="2" fill="white" rx="0.2" />
                    <rect x="1" y="8" width="2" height="2" fill="white" rx="0.2" />
                    <rect x="5" y="0" width="1" height="1" />
                    <rect x="6" y="1" width="1" height="1" />
                    <rect x="5" y="2" width="1" height="1" />
                    <rect x="7" y="5" width="1" height="1" />
                    <rect x="5" y="5" width="2" height="1" />
                    <rect x="5" y="7" width="1" height="1" />
                    <rect x="6" y="8" width="1" height="1" />
                    <rect x="8" y="7" width="3" height="1" />
                    <rect x="9" y="9" width="2" height="1" />
                    <rect x="5" y="9" width="2" height="1" />
                    <rect x="5" y="6" width="1" height="1" />
                  </svg>
                  <p className="hero__scan-hint">Scan to view menu</p>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="hero__phone hero__phone--animated">
                <div className="hero__phone-notch" />
                <div className="hero__phone-screen">
                  <div className="hero__phone-header">
                    <div>
                      <p className="hero__phone-restaurant">Aromas of India</p>
                      <p className="hero__phone-table">Table T-04</p>
                    </div>
                    <div className="hero__phone-badge">Live Menu</div>
                  </div>
                  {/* Mini menu items */}
                  {[
                    { name: "Paneer Tikka", price: "₹220", veg: true, pop: true },
                    { name: "Masala Dosa", price: "₹130", veg: true, pop: true },
                    { name: "Chicken Biryani", price: "₹310", veg: false, pop: true },
                    { name: "Filter Coffee", price: "₹70", veg: true, pop: false },
                  ].map((item, i) => (
                    <div key={i} className="hero__mini-item">
                      <div className="hero__mini-info">
                        <span className="hero__mini-name">{item.name}</span>
                        <span className="hero__mini-price">{item.price}</span>
                      </div>
                      <div className={`hero__mini-veg ${item.veg ? "hero__mini-veg--veg" : "hero__mini-veg--nonveg"}`} />
                      <button className="hero__mini-add">+</button>
                    </div>
                  ))}
                  <div className="hero__phone-cart-bar">
                    <span>2 items</span>
                    <span>View Cart · ₹440</span>
                  </div>
                </div>
                <div className="hero__phone-home" />
              </div>

              {/* Floating status card */}
              <div className="hero__status-card hero__float-card hero__float-card--delayed">
                <div className="hero__status-dot" />
                <div>
                  <p className="hero__status-label">Order #1042</p>
                  <p className="hero__status-sub">Table T-04 · Preparing</p>
                </div>
              </div>

              {/* Floating dish card */}
              <div className="hero__dish-card hero__float-card hero__float-card--slow">
                <span className="hero__dish-emoji">🍛</span>
                <div>
                  <p className="hero__dish-name">Veg Biryani</p>
                  <p className="hero__dish-count">+12 today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats-bar">
        <div className="container">
          <div className="hero__stats-inner">
            {[
              { value: "1", label: "QR code at each table" },
              { value: "0", label: "Guest app downloads" },
              { value: "Live", label: "Menu and availability updates" },
              { value: "Any phone", label: "Works in a mobile browser" },
            ].map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
