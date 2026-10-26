// UrQR — Centralized application data & configuration
// All demo/sample data is clearly marked and does not represent real customers

// ── Menu Demo Data ──────────────────────────────────────────────────────────

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  isPopular?: boolean;
  emoji: string; // used only as placeholder until images provided
  available: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

export const DEMO_RESTAURANT = {
  name: "Aromas of India",
  tagline: "Fine Casual Dining",
  address: "12, Brigade Road, Bengaluru",
  tableNumber: "T-04",
};

export const DEMO_CATEGORIES: MenuCategory[] = [
  { id: "all", name: "All Items", icon: "🍽️" },
  { id: "starters", name: "Starters", icon: "🥗" },
  { id: "mains", name: "Mains", icon: "🍛" },
  { id: "breads", name: "Breads", icon: "🫓" },
  { id: "beverages", name: "Beverages", icon: "☕" },
  { id: "desserts", name: "Desserts", icon: "🍨" },
];

export const DEMO_MENU_ITEMS: MenuItem[] = [
  {
    id: "m1", name: "Paneer Tikka", description: "Cottage cheese marinated in spiced yoghurt, grilled in tandoor. Served with mint chutney.",
    price: 220, category: "starters", isVeg: true, isPopular: true, emoji: "🫙", available: true,
  },
  {
    id: "m2", name: "Veg Spring Rolls", description: "Crispy rolls stuffed with seasoned mixed vegetables. Four pieces per serving.",
    price: 160, category: "starters", isVeg: true, emoji: "🥢", available: true,
  },
  {
    id: "m3", name: "Chicken 65", description: "Deep-fried chicken in a tangy, spiced South Indian marinade. Best paired with raita.",
    price: 280, category: "starters", isVeg: false, isPopular: true, emoji: "🍗", available: true,
  },
  {
    id: "m4", name: "Masala Dosa", description: "Crisp rice-lentil crepe with spiced potato filling. Served with sambar and three chutneys.",
    price: 130, category: "mains", isVeg: true, isPopular: true, emoji: "🫓", available: true,
  },
  {
    id: "m5", name: "Veg Biryani", description: "Fragrant long-grain basmati rice cooked with seasonal vegetables, whole spices, and saffron.",
    price: 220, category: "mains", isVeg: true, emoji: "🍚", available: true,
  },
  {
    id: "m6", name: "Chicken Biryani", description: "Slow-cooked dum biryani with tender chicken pieces, caramelised onions, and aromatic spices.",
    price: 310, category: "mains", isVeg: false, isPopular: true, emoji: "🍚", available: true,
  },
  {
    id: "m7", name: "Dal Makhani", description: "Slow-simmered black lentils with butter, cream, and a rich tomato-based sauce.",
    price: 180, category: "mains", isVeg: true, emoji: "🍲", available: true,
  },
  {
    id: "m8", name: "Palak Paneer", description: "Creamy spinach gravy with soft paneer cubes. A vegetarian classic.",
    price: 210, category: "mains", isVeg: true, emoji: "🥬", available: false,
  },
  {
    id: "m9", name: "Garlic Naan", description: "Leavened flatbread topped with garlic butter and coriander, baked in tandoor.",
    price: 60, category: "breads", isVeg: true, isPopular: true, emoji: "🫓", available: true,
  },
  {
    id: "m10", name: "Tandoori Roti", description: "Whole-wheat flatbread baked fresh in the tandoor. Served hot.",
    price: 40, category: "breads", isVeg: true, emoji: "🫓", available: true,
  },
  {
    id: "m11", name: "Filter Coffee", description: "South Indian style decoction coffee served in a traditional tumbler-davara set.",
    price: 70, category: "beverages", isVeg: true, isPopular: true, emoji: "☕", available: true,
  },
  {
    id: "m12", name: "Fresh Lime Soda", description: "Freshly squeezed lime with sparkling water. Choice of sweet, salty, or mixed.",
    price: 80, category: "beverages", isVeg: true, emoji: "🥤", available: true,
  },
  {
    id: "m13", name: "Mango Lassi", description: "Thick yoghurt blended with Alphonso mango pulp, lightly sweetened.",
    price: 110, category: "beverages", isVeg: true, emoji: "🥭", available: true,
  },
  {
    id: "m14", name: "Gulab Jamun", description: "Soft milk-solid dumplings soaked in rose-flavoured sugar syrup. Served warm, two pieces.",
    price: 90, category: "desserts", isVeg: true, isPopular: true, emoji: "🍮", available: true,
  },
  {
    id: "m15", name: "Kulfi Falooda", description: "Traditional dense ice cream with rose syrup, basil seeds, and vermicelli noodles.",
    price: 130, category: "desserts", isVeg: true, emoji: "🍨", available: true,
  },
];

// ── Pricing Plans ────────────────────────────────────────────────────────────

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null; // null = contact for pricing
  annualPrice: number | null;
  currency: string;
  recommended?: boolean;
  cta: string;
  ctaLink: string;
  suitedFor: string;
  features: PricingFeature[];
  note?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For single-outlet restaurants getting started with digital menus",
    monthlyPrice: 999,
    annualPrice: 799,
    currency: "₹",
    cta: "Book a Demo",
    ctaLink: "/contact",
    suitedFor: "Cafés, QSRs, small restaurants",
    features: [
      { text: "Digital QR menu (up to 60 items)", included: true },
      { text: "1 restaurant outlet", included: true },
      { text: "QR code generation & download", included: true },
      { text: "Menu management dashboard", included: true },
      { text: "Item availability toggle", included: true },
      { text: "Mobile-first menu for guests", included: true },
      { text: "Table-linked QR support (up to 10 tables)", included: true },
      { text: "Basic order overview", included: true },
      { text: "Email support", included: true },
      { text: "Kitchen display concept", included: false },
      { text: "Analytics dashboard", included: false },
      { text: "Multi-outlet management", included: false },
    ],
    note: "Illustrative pricing — contact us for confirmed commercial terms",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For established restaurants wanting the complete digital ordering workflow",
    monthlyPrice: 2499,
    annualPrice: 1999,
    currency: "₹",
    recommended: true,
    cta: "Book a Demo",
    ctaLink: "/contact",
    suitedFor: "Casual dining, fine dining, busy QSRs",
    features: [
      { text: "Digital QR menu (unlimited items)", included: true },
      { text: "1 restaurant outlet", included: true },
      { text: "QR code generation & download", included: true },
      { text: "Full menu management dashboard", included: true },
      { text: "Category & item customisation", included: true },
      { text: "Table-linked QR support (up to 40 tables)", included: true },
      { text: "QR-based ordering workflow", included: true },
      { text: "Kitchen order display", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Multi-outlet management", included: false },
      { text: "Custom onboarding", included: false },
    ],
    note: "Illustrative pricing — contact us for confirmed commercial terms",
  },
  {
    id: "multi",
    name: "Multi-Outlet",
    tagline: "For restaurant groups managing multiple locations under one dashboard",
    monthlyPrice: null,
    annualPrice: null,
    currency: "₹",
    cta: "Contact Us",
    ctaLink: "/contact",
    suitedFor: "Restaurant chains, food courts, cloud kitchen groups",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Unlimited outlets", included: true },
      { text: "Centralised menu management", included: true },
      { text: "Outlet-level dashboards", included: true },
      { text: "Role-based access control", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom onboarding & training", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SLA-backed support", included: true },
      { text: "API access (roadmap)", included: false },
      { text: "POS integration (roadmap)", included: false },
    ],
  },
];

// ── FAQ Data ─────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "What is UrQR?",
    answer: "UrQR is a restaurant technology platform by Nelja Tech that helps restaurants create digital menus accessible by QR code. Guests scan a QR code at their table to browse your menu on their phone. The platform is designed to reduce friction in the dining experience for both guests and restaurant teams.",
    category: "product",
  },
  {
    id: "faq2",
    question: "How do customers access the digital menu?",
    answer: "Customers simply scan the QR code placed on their table using any smartphone camera app — no specific app or barcode scanner needed. The menu opens directly in the phone's browser as a mobile-optimised web page.",
    category: "guest",
  },
  {
    id: "faq3",
    question: "Do customers need to install an app?",
    answer: "No. The UrQR guest experience is a progressive web app that loads in the device's default browser. There is no app download required on the guest's side.",
    category: "guest",
  },
  {
    id: "faq4",
    question: "How do I customise my restaurant's menu?",
    answer: "UrQR provides a management dashboard where you can add, edit, or remove menu items, organise categories, update prices, toggle item availability, and upload food photographs. Changes reflect on the guest-facing menu immediately.",
    category: "management",
  },
  {
    id: "faq5",
    question: "Can I use different QR codes for different tables?",
    answer: "Yes, table-linked QR codes are a core part of the UrQR concept. Each QR code can be associated with a specific table number so that orders and browsing sessions are connected to the correct table. Supported table counts depend on the plan you choose.",
    category: "management",
  },
  {
    id: "faq6",
    question: "Is the ordering workflow fully live?",
    answer: "Yes. Guests can browse your full menu, add items to their cart, and place orders through the complete end-to-end ordering flow from their table.",
    category: "product",
  },
  {
    id: "faq7",
    question: "How is UrQR priced?",
    answer: "UrQR offers plan-based monthly or annual subscriptions. The pricing shown on our website is illustrative. Final commercial terms and pricing for your restaurant are confirmed during the onboarding process. Please book a demo or contact us for accurate quotes.",
    category: "pricing",
  },
  {
    id: "faq8",
    question: "How long does it take to set up?",
    answer: "Getting your digital menu live is designed to be fast. Once you have your restaurant details and menu ready, the basic setup can be completed in a single session. Our team will guide you through onboarding.",
    category: "onboarding",
  },
  {
    id: "faq9",
    question: "What support do you offer?",
    answer: "All plans include email support. Growth plan subscribers receive priority email and chat support. Multi-outlet customers receive a dedicated account manager and SLA-backed support. We are based in Bengaluru and primarily serve Indian restaurant businesses.",
    category: "support",
  },
  {
    id: "faq10",
    question: "Will UrQR integrate with my existing POS system?",
    answer: "POS integration is on our product roadmap but is not currently available. If POS integration is important to your decision, please mention it when you contact us — your input helps us prioritise development correctly.",
    category: "integrations",
  },
  {
    id: "faq11",
    question: "Can I manage multiple restaurant locations?",
    answer: "Yes, the Multi-Outlet plan is designed for restaurant groups, chains, and food court operators who need centralised menu management across multiple locations. Contact us to discuss your specific requirements.",
    category: "multi-outlet",
  },
  {
    id: "faq12",
    question: "Does UrQR process payments?",
    answer: "Payment processing is not currently part of the UrQR platform. The current focus is on digital menu access and the guest ordering journey. Payment integration is a future consideration that we will evaluate based on customer needs.",
    category: "product",
  },
];

// ── How It Works Steps ────────────────────────────────────────────────────────

export interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  side: "guest" | "restaurant";
}

export const HOW_IT_WORKS_STEPS: WorkflowStep[] = [
  {
    id: "step1", number: "01",
    title: "Set up your digital menu",
    description: "Use the UrQR management dashboard to add your menu items, organise categories, set prices, and upload food images. Your menu goes live the moment you publish.",
    details: ["Add items with descriptions and prices", "Organise into categories", "Toggle availability in real time", "Upload food photographs"],
    side: "restaurant",
  },
  {
    id: "step2", number: "02",
    title: "Generate and place your QR codes",
    description: "UrQR generates unique QR codes for each table in your restaurant. Print them, place them in table stands, or embed them in your existing collateral.",
    details: ["One QR code per table", "Download in print-ready quality", "Link each code to a specific table", "Replace or regenerate anytime"],
    side: "restaurant",
  },
  {
    id: "step3", number: "03",
    title: "Guests scan and browse",
    description: "When a guest sits down, they scan the table QR code with their phone camera. Your menu opens instantly in their browser — no app download required.",
    details: ["Works with any smartphone camera", "No app installation needed", "Browse categories and filter items", "View images, descriptions, and prices"],
    side: "guest",
  },
  {
    id: "step4", number: "04",
    title: "Manage the dining experience",
    description: "Your restaurant team keeps a clear view of table activity and the ordering journey through the UrQR management interface.",
    details: ["View active tables at a glance", "Track order status", "Kitchen order workflow", "Real-time menu updates"],
    side: "restaurant",
  },
];

// ── Solutions Data ────────────────────────────────────────────────────────────

export interface SolutionType {
  id: string;
  icon: string;
  name: string;
  headline: string;
  painPoints: string[];
  howUrQRHelps: string[];
  tag: string;
}

export const SOLUTIONS: SolutionType[] = [
  {
    id: "cafe",
    icon: "☕",
    name: "Cafés",
    tag: "All-Day Menu",
    headline: "Keep your café moving without the queue at the counter",
    painPoints: ["Peak-hour counter congestion", "Difficulty showcasing seasonal specials", "Menu updates during multi-daypart operations"],
    howUrQRHelps: ["Digital menu accessible from every seat", "Instant menu updates for daily specials", "QR codes on every table to reduce counter pressure"],
  },
  {
    id: "qsr",
    icon: "🍔",
    name: "Quick-Service Restaurants",
    tag: "High Volume",
    headline: "Handle high order volumes with a cleaner guest experience",
    painPoints: ["Long queues at ordering points", "Menu board limitations", "Communicating item availability"],
    howUrQRHelps: ["Guests browse and decide before reaching the counter", "Digital menu with real-time availability", "Reduce decision time with clear categories and images"],
  },
  {
    id: "casual",
    icon: "🍽️",
    name: "Casual Dining",
    tag: "Table Service",
    headline: "Let guests explore your full menu at their own pace",
    painPoints: ["Guests waiting for physical menus", "Describing items without visuals", "Handling multiple menu versions"],
    howUrQRHelps: ["QR menus available the moment guests are seated", "Food images and descriptions for every item", "Single digital menu — no reprinting needed"],
  },
  {
    id: "fine",
    icon: "🥂",
    name: "Fine Dining",
    tag: "Premium Experience",
    headline: "Elevate the guest experience with a polished digital menu",
    painPoints: ["Physical menus that feel inconsistent with décor", "Communicating pairing suggestions", "Menu changes for events and seasons"],
    howUrQRHelps: ["Clean, premium-feeling digital menu presentation", "Rich item descriptions and visual storytelling", "Instant menu updates for events and seasonal changes"],
  },
  {
    id: "bakery",
    icon: "🥐",
    name: "Bakeries",
    tag: "Daily Specials",
    headline: "Showcase your daily bakes without reprinting every morning",
    painPoints: ["Daily availability changes", "Customers unsure what is fresh today", "Counter area congestion during morning rush"],
    howUrQRHelps: ["Toggle item availability in seconds", "Digital menu always reflects current day's stock", "Reduce counter questions with clear item descriptions"],
  },
  {
    id: "foodcourt",
    icon: "🏪",
    name: "Food Courts",
    tag: "Multi-Vendor",
    headline: "Give visitors a clear view of every outlet in your food court",
    painPoints: ["Visitors unsure what each outlet serves", "Menu display limitations in shared spaces", "Managing multiple outlet menus"],
    howUrQRHelps: ["QR code at each outlet for instant menu access", "Each outlet manages its own digital menu", "Centralised visibility for food court management"],
  },
  {
    id: "cloud",
    icon: "📦",
    name: "Cloud Kitchens",
    tag: "Delivery-First",
    headline: "Present your delivery menu as clearly as a dine-in experience",
    painPoints: ["Menu only visible on third-party aggregators", "Difficulty communicating brand and story", "Limited control over menu presentation"],
    howUrQRHelps: ["Own your digital menu independent of aggregators", "Present your brand with your own visual identity", "Share menu link directly with customers"],
  },
  {
    id: "chain",
    icon: "🏢",
    name: "Restaurant Chains",
    tag: "Multi-Outlet",
    headline: "Maintain brand and menu consistency across every location",
    painPoints: ["Menu inconsistencies across branches", "Slow rollout of price and menu changes", "No unified view of outlet performance"],
    howUrQRHelps: ["Centralised menu management across outlets", "Push updates to all locations simultaneously", "Outlet-level dashboards and performance overview"],
  },
];

// ── Features Data ─────────────────────────────────────────────────────────────

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  status: "available";
  highlights: string[];
}

export const FEATURES: Feature[] = [
  {
    id: "qr-menu",
    icon: "QrCode",
    title: "QR Digital Menu",
    description: "A mobile-first menu that guests can open by scanning a QR code at their table. No app required.",
    status: "available",
    highlights: ["Food images, descriptions, and prices", "Dietary and veg/non-veg labels", "Category navigation", "Search and filter"],
  },
  {
    id: "qr-ordering",
    icon: "ShoppingCart",
    title: "QR-Based Ordering",
    description: "Guests can add items to a cart, adjust quantities, and place an order from their phone.",
    status: "available",
    highlights: ["Browse and add to cart", "Item customisation notes", "Cart review and edit", "Table-aware order placement"],
  },
  {
    id: "menu-management",
    icon: "LayoutGrid",
    title: "Menu Management",
    description: "A clean dashboard to add and edit items, organise categories, and control availability in real time.",
    status: "available",
    highlights: ["Add and edit menu items", "Category organisation", "Real-time availability toggle", "Pricing and image updates"],
  },
  {
    id: "table-visibility",
    icon: "Map",
    title: "Table & Order Visibility",
    description: "See which tables are active and get a clear overview of the ordering activity across your floor.",
    status: "available",
    highlights: ["Table status at a glance", "Active order overview", "Table-linked order history", "Occupancy indicators"],
  },
  {
    id: "kitchen-workflow",
    icon: "ChefHat",
    title: "Kitchen Workflow",
    description: "A dedicated kitchen view showing incoming orders, preparation status, and ready-to-serve items.",
    status: "available",
    highlights: ["New order alerts", "Preparing / ready / done status", "Clear order cards", "Kitchen-side confirmation"],
  },
  {
    id: "analytics",
    icon: "BarChart2",
    title: "Restaurant Analytics",
    description: "Understand your restaurant performance with sales summaries, order volumes, and popular dishes.",
    status: "available",
    highlights: ["Daily and weekly sales charts", "Order volume trends", "Top-selling dishes", "Time-based performance"],
  },
  {
    id: "cx",
    icon: "Smartphone",
    title: "Guest Experience",
    description: "A smooth, modern menu browsing experience designed for every smartphone and every guest.",
    status: "available",
    highlights: ["Mobile-first design", "Instant QR access", "Clear order summary", "No login required for guests"],
  },
  {
    id: "multi-outlet",
    icon: "Building2",
    title: "Multi-Outlet Management",
    description: "Manage multiple restaurant locations from a single dashboard with shared or independent menus.",
    status: "available",
    highlights: ["Outlet switcher dashboard", "Shared brand identity", "Location-level menu control", "Centralised reporting"],
  },
];
