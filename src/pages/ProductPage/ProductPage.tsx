import { Link } from "react-router-dom";
import { ArrowRight, QrCode, ShoppingCart, LayoutGrid, Map, ChefHat, BarChart2, Smartphone, Building2, CheckCircle2 } from "lucide-react";
import MenuDemo from "../../components/MenuDemo/MenuDemo";
import "./ProductPage.css";

const MODULES = [
  {
    id: "digital-menu",
    icon: QrCode,
    title: "QR Digital Menu",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "A mobile menu your guests will actually use",
    description: "When guests sit down, they scan a QR code and your full menu opens in their phone's browser. No app, no friction. The menu is fast, mobile-optimised, and shows your dishes with images, descriptions, dietary information, and prices.",
    highlights: [
      "Veg and non-veg labels on every item",
      "Category navigation for easy browsing",
      "Food photographs where provided",
      "Availability indicators — out-of-stock items are clearly marked",
      "Works on any smartphone without app installation",
    ],
    img: "/images/qr-scan.jpg",
    imgAlt: "Guest scanning QR code at restaurant table",
  },
  {
    id: "qr-ordering",
    icon: ShoppingCart,
    title: "QR-Based Ordering",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "From browsing to placing an order — on the guest's phone",
    description: "Guests can add items to a cart, adjust quantities, add customisation notes, and review their order before confirming. Each order is linked to the scanned table.",
    highlights: [
      "Add to cart directly from the menu",
      "Adjust quantities and review order",
      "Table-aware — order linked to scanned table",
      "Clear confirmation before placing an order",
      "Interactive demo available on this website",
    ],
    img: "/images/hero-restaurant.jpg",
    imgAlt: "Guests ordering digitally at restaurant",
  },
  {
    id: "menu-management",
    icon: LayoutGrid,
    title: "Menu Management Dashboard",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "Keep your menu current without any technical skills",
    description: "The UrQR management dashboard gives your team full control over the digital menu. Add items, set prices, upload photographs, organise categories, and toggle availability — all changes appear immediately on the guest-facing menu.",
    highlights: [
      "Add, edit, and remove menu items",
      "Category creation and organisation",
      "Real-time availability toggle",
      "Price and description updates",
      "Photo upload for items",
    ],
    img: "/images/food-spread.jpg",
    imgAlt: "Food items managed through digital dashboard",
  },
  {
    id: "table-visibility",
    icon: Map,
    title: "Table & Order Visibility",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "A clear picture of your dining floor at a glance",
    description: "The table visibility view gives your front-of-house team an at-a-glance overview of which tables are active, what is being ordered, and the status of each order. This connects the physical floor to the digital ordering system.",
    highlights: [
      "Table status indicators",
      "Active and completed order overview",
      "Table-linked order history",
      "Occupancy and turnover visibility",
    ],
    img: "/images/cafe-ambiance.jpg",
    imgAlt: "Restaurant floor visibility overview",
  },
  {
    id: "kitchen-workflow",
    icon: ChefHat,
    title: "Kitchen Workflow",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "A dedicated kitchen view for clear order handling",
    description: "When an order is placed, the kitchen team should see it immediately — with the right information, in the right format. The kitchen workflow view presents incoming orders as clear tickets, with status controls for preparing, ready, and served.",
    highlights: [
      "Incoming order alerts",
      "Preparing / ready / served status controls",
      "Clear order cards with item details",
      "Kitchen-side order confirmation",
    ],
    img: "/images/kitchen-team.jpg",
    imgAlt: "Restaurant kitchen team handling orders",
  },
  {
    id: "analytics",
    icon: BarChart2,
    title: "Restaurant Analytics",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "Understand your restaurant through data, not guesswork",
    description: "The analytics dashboard will surface the key metrics that help restaurant owners understand performance — without requiring complex reporting tools. Sales summaries, order volumes, top-performing dishes, and time-based patterns.",
    highlights: [
      "Daily and weekly sales overview",
      "Order volume trends",
      "Top-selling dishes",
      "Category performance",
    ],
    img: "/images/hero-restaurant.jpg",
    imgAlt: "Restaurant analytics overview",
  },
  {
    id: "cx",
    icon: Smartphone,
    title: "Guest Experience",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "A guest experience designed for every smartphone",
    description: "The UrQR guest-facing interface is a progressive web app that prioritises speed and clarity. Every element — menu structure, item display, cart interaction — is optimised for a small touch screen used in a restaurant environment.",
    highlights: [
      "Mobile-first layout and touch interactions",
      "Fast load times",
      "No account required for guests",
      "Accessible design principles",
      "Works across iOS and Android browsers",
    ],
    img: "/images/qr-scan.jpg",
    imgAlt: "Guest using digital menu on smartphone",
  },
  {
    id: "multi-outlet",
    icon: Building2,
    title: "Multi-Outlet Management",
    status: "Available",
    statusClass: "chip--emerald",
    headline: "Manage every location from one dashboard",
    description: "Restaurant groups, chains, and food courts need to manage multiple menus, teams, and operational views in a consistent way. The multi-outlet management concept allows a central team to control shared brand assets while giving individual locations flexibility.",
    highlights: [
      "Outlet switcher and unified dashboard",
      "Shared or independent menus per location",
      "Brand consistency across outlets",
      "Centralised reporting view",
    ],
    img: "/images/fine-dining.jpg",
    imgAlt: "Multi-outlet restaurant management",
  },
];

export default function ProductPage() {
  return (
    <div className="product-page">
      {/* Page hero */}
      <section className="product-hero section" aria-labelledby="product-hero-heading">
        <div className="container">
          <div className="product-hero__inner">
            <div className="product-hero__content">
              <div className="section-label">Product</div>
              <h1 id="product-hero-heading" className="product-hero__title">
                The UrQR platform, explained
              </h1>
              <p className="product-hero__sub">
                UrQR is a restaurant technology platform designed to make digital menus and the ordering journey better for your guests — and your team.
              </p>
              <div className="product-hero__note">
                All capabilities shown are available as part of the UrQR platform.
              </div>
              <Link to="/contact" className="btn btn--primary btn--lg" id="product-book-demo">
                Book a Demo <ArrowRight size={16} />
              </Link>
            </div>
            <div className="product-hero__demo">
              <MenuDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Module sections */}
      {MODULES.map((mod, index) => {
        const Icon = mod.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={mod.id}
            id={mod.id}
            className={`product-module section ${isEven ? "product-module--light" : "product-module--alt"}`}
            aria-labelledby={`module-${mod.id}-heading`}
          >
            <div className="container">
              <div className={`product-module__inner ${isEven ? "" : "product-module__inner--flip"}`}>
                <div className="product-module__content">
                  <div className="product-module__meta">
                    <div className="product-module__icon-wrap">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className={`chip ${mod.statusClass}`}>{mod.status}</span>
                  </div>
                  <h2 id={`module-${mod.id}-heading`} className="product-module__title">
                    {mod.headline}
                  </h2>
                  <p className="product-module__desc">{mod.description}</p>
                  <ul className="product-module__highlights">
                    {mod.highlights.map((h, i) => (
                      <li key={i} className="product-module__highlight">
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="product-module__visual">
                  <div className="product-module__visual-card">
                    <img
                      src={mod.img}
                      alt={mod.imgAlt}
                      className="product-module__visual-img"
                      loading="lazy"
                    />
                    <div className="product-module__visual-badge">
                      <div className="product-module__visual-icon">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <span>{mod.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="product-cta section" aria-labelledby="product-cta-heading">
        <div className="container">
          <div className="product-cta__inner">
            <h2 id="product-cta-heading" className="product-cta__title">
              Ready to see UrQR in action?
            </h2>
            <p className="product-cta__sub">
              Book a personalised demo and our team will walk you through the current platform and the roadmap ahead.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg" id="product-cta-demo">
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
