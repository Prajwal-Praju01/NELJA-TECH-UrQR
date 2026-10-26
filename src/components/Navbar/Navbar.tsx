import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, QrCode, ChevronDown } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="banner">
        <div className="navbar__inner container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="UrQR — Home">
            <span className="navbar__logo-icon">
              <QrCode size={22} strokeWidth={2.5} />
            </span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-ur">Ur</span>QR
            </span>
            <span className="navbar__logo-by">by Nelja Tech</span>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__actions">
            <Link to="/contact" className="btn btn--secondary btn--sm">
              Contact
            </Link>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Book a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar__mobile-toggle"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav__inner">
          <nav className="mobile-nav__links" aria-label="Mobile navigation links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `mobile-nav__link ${isActive ? "mobile-nav__link--active" : ""}`
                }
              >
                {link.label}
                <ChevronDown size={16} className="mobile-nav__chevron" />
              </NavLink>
            ))}
          </nav>
          <div className="mobile-nav__cta">
            <Link to="/contact" className="btn btn--secondary" style={{ width: "100%", justifyContent: "center" }}>
              Contact Us
            </Link>
            <Link to="/contact" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
              Book a Demo
            </Link>
          </div>
          <p className="mobile-nav__footer">UrQR by Nelja Tech · Bengaluru, India</p>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="mobile-nav__overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Spacer */}
      <div className="navbar__spacer" aria-hidden="true" />
    </>
  );
}
