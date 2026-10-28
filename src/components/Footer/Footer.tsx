import { Link } from "react-router-dom";
import { QrCode, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const PRODUCT_LINKS = [
  { label: "Digital Menu", href: "/product#digital-menu" },
  { label: "QR Ordering", href: "/product#qr-ordering" },
  { label: "Menu Management", href: "/product#menu-management" },
  { label: "Analytics", href: "/product#analytics" },
];

const SOLUTION_LINKS = [
  { label: "Cafés", href: "/solutions#cafe" },
  { label: "Casual Dining", href: "/solutions#casual" },
  { label: "Fine Dining", href: "/solutions#fine" },
  { label: "QSRs", href: "/solutions#qsr" },
  { label: "Cloud Kitchens", href: "/solutions#cloud" },
  { label: "Multi-Outlet", href: "/solutions#chain" },
];

const COMPANY_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Book a Demo", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* Brand column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="UrQR Home">
            <span className="footer__logo-icon">
              <QrCode size={18} strokeWidth={2.5} />
            </span>
            <span className="footer__logo-text">
              <span>Ur</span>QR
            </span>
          </Link>
          <p className="footer__brand-desc">
            QR menus and table ordering for cafés, restaurants, bakeries, and food businesses.
          </p>
          <div className="footer__contact">
            <a
              href="https://maps.app.goo.gl/ovDBfpwPSeNXfcpk9"
              className="footer__contact-item footer__contact-item--link"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={14} />
              View our location on Google Maps
            </a>
            <a href="mailto:technelja@gmail.com" className="footer__contact-item footer__contact-item--link">
              <Mail size={14} />
              technelja@gmail.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__nav">
          <div className="footer__col">
            <h3 className="footer__col-title">Product</h3>
            <ul className="footer__links">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Solutions</h3>
            <ul className="footer__links">
              {SOLUTION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p className="footer__legal">
            © {year} UrQR · A product of{" "}
            <span className="footer__nelja">Nelja Tech</span>. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
