import { useState, useMemo } from "react";
import {
  ShoppingCart, Plus, Minus, ChevronLeft, Check, Clock,
  Search, AlertCircle,
} from "lucide-react";
import {
  DEMO_RESTAURANT, DEMO_CATEGORIES, DEMO_MENU_ITEMS,
  type MenuItem,
} from "../../data/appData";
import "./MenuDemo.css";

type Screen = "menu" | "cart" | "confirm" | "status";

interface CartItem {
  item: MenuItem;
  quantity: number;
  note: string;
}

function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// Small QR-like visual placeholder (not a real scannable QR)
function QRPlaceholder({ size = 80 }: { size?: number }) {
  return (
    <div className="qr-placeholder" style={{ width: size, height: size }} aria-label="QR code placeholder (demo)">
      <svg viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
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
    </div>
  );
}

function TableEntryScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="demo-entry">
      <div className="demo-entry__table-card">
        <div className="demo-entry__restaurant-name">{DEMO_RESTAURANT.name}</div>
        <div className="demo-entry__table">Table {DEMO_RESTAURANT.tableNumber}</div>
        <QRPlaceholder size={96} />
        <p className="demo-entry__scan-hint">Scan to open menu</p>
        <div className="demo-entry__divider">
          <span>or</span>
        </div>
        <button className="btn btn--primary" onClick={onEnter} id="demo-open-menu-btn">
          Open Demo Menu
        </button>
      </div>
      <p className="demo-entry__disclaimer">
        <AlertCircle size={12} />
        This is a frontend demonstration. No orders are placed or payments collected.
      </p>
    </div>
  );
}

function MenuScreen({
  cart,
  onAdd,
  onRemove,
  onViewCart,
}: {
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
  onViewCart: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const cartCount = cart.reduce((s, c) => s + c.quantity, 0);
  const cartTotal = cart.reduce((s, c) => s + c.item.price * c.quantity, 0);

  const filtered = useMemo(() => {
    const byCat =
      activeCategory === "all"
        ? DEMO_MENU_ITEMS
        : DEMO_MENU_ITEMS.filter((m) => m.category === activeCategory);
    if (!search.trim()) return byCat;
    const q = search.toLowerCase();
    return byCat.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q)
    );
  }, [activeCategory, search]);

  function getCartQty(id: string) {
    return cart.find((c) => c.item.id === id)?.quantity ?? 0;
  }

  return (
    <div className="menu-screen">
      {/* Header */}
      <div className="menu-screen__header">
        <div className="menu-screen__restaurant">
          <div>
            <h2 className="menu-screen__name">{DEMO_RESTAURANT.name}</h2>
            <p className="menu-screen__table">Table {DEMO_RESTAURANT.tableNumber}</p>
          </div>
          <div className="menu-screen__badge">Demo</div>
        </div>
        {/* Search */}
        <div className="menu-screen__search-wrap">
          <Search size={14} className="menu-screen__search-icon" />
          <input
            type="search"
            placeholder="Search menu…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="menu-screen__search"
            aria-label="Search menu items"
          />
        </div>
        {/* Categories */}
        <div className="menu-screen__cats" role="tablist" aria-label="Menu categories">
          {DEMO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu-screen__cat ${activeCategory === cat.id ? "menu-screen__cat--active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="menu-screen__items" role="tabpanel">
        {filtered.length === 0 ? (
          <div className="menu-screen__empty">
            <p>No items found</p>
          </div>
        ) : (
          filtered.map((item) => {
            const qty = getCartQty(item.id);
            return (
              <div
                key={item.id}
                className={`menu-item ${!item.available ? "menu-item--unavailable" : ""}`}
              >
                <div className="menu-item__emoji" aria-hidden="true">{item.emoji}</div>
                <div className="menu-item__info">
                  <div className="menu-item__top">
                    <span className={`tag ${item.isVeg ? "tag--veg" : "tag--nonveg"}`}>
                      {item.isVeg ? "Veg" : "Non-veg"}
                    </span>
                    {item.isPopular && (
                      <span className="tag tag--popular">Popular</span>
                    )}
                  </div>
                  <h3 className="menu-item__name">{item.name}</h3>
                  <p className="menu-item__desc">{item.description}</p>
                  <div className="menu-item__bottom">
                    <span className="menu-item__price">{formatINR(item.price)}</span>
                    {!item.available ? (
                      <span className="menu-item__unavail">Not available</span>
                    ) : qty === 0 ? (
                      <button
                        className="btn btn--outline-emerald btn--sm"
                        onClick={() => onAdd(item)}
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <Plus size={14} /> Add
                      </button>
                    ) : (
                      <div className="menu-item__qty-ctrl">
                        <button
                          aria-label={`Remove one ${item.name}`}
                          onClick={() => onRemove(item.id)}
                          className="menu-item__qty-btn"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="menu-item__qty-val">{qty}</span>
                        <button
                          aria-label={`Add one more ${item.name}`}
                          onClick={() => onAdd(item)}
                          className="menu-item__qty-btn menu-item__qty-btn--add"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Sticky cart bar */}
      {cartCount > 0 && (
        <div className="menu-screen__cart-bar">
          <button
            className="menu-screen__cart-btn"
            onClick={onViewCart}
            id="demo-view-cart-btn"
          >
            <span className="menu-screen__cart-count">{cartCount}</span>
            <ShoppingCart size={16} />
            <span>View Cart</span>
            <span className="menu-screen__cart-total">{formatINR(cartTotal)}</span>
          </button>
        </div>
      )}
    </div>
  );
}

function CartScreen({
  cart,
  onAdd,
  onRemove,
  onBack,
  onPlaceOrder,
}: {
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
}) {
  const subtotal = cart.reduce((s, c) => s + c.item.price * c.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  return (
    <div className="cart-screen">
      <div className="cart-screen__header">
        <button className="cart-screen__back" onClick={onBack} aria-label="Back to menu">
          <ChevronLeft size={18} /> Menu
        </button>
        <h2 className="cart-screen__title">Your Order</h2>
        <span className="cart-screen__table">Table {DEMO_RESTAURANT.tableNumber}</span>
      </div>

      <div className="cart-screen__items">
        {cart.map(({ item, quantity }) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item__emoji" aria-hidden="true">{item.emoji}</div>
            <div className="cart-item__info">
              <p className="cart-item__name">{item.name}</p>
              <p className="cart-item__unit">{formatINR(item.price)} each</p>
            </div>
            <div className="cart-item__qty-ctrl">
              <button onClick={() => onRemove(item.id)} aria-label={`Remove one ${item.name}`}>
                <Minus size={12} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => onAdd(item)} aria-label={`Add one ${item.name}`}>
                <Plus size={12} />
              </button>
            </div>
            <span className="cart-item__subtotal">{formatINR(item.price * quantity)}</span>
          </div>
        ))}
      </div>

      <div className="cart-screen__summary">
        <div className="cart-screen__row">
          <span>Subtotal</span>
          <span>{formatINR(subtotal)}</span>
        </div>
        <div className="cart-screen__row">
          <span>GST (5%)</span>
          <span>{formatINR(gst)}</span>
        </div>
        <div className="cart-screen__row cart-screen__row--total">
          <span>Total</span>
          <span>{formatINR(total)}</span>
        </div>
      </div>

      <div className="cart-screen__disclaimer">
        <AlertCircle size={12} />
        Demo mode — no payment is required or processed
      </div>

      <button
        className="btn btn--primary"
        onClick={onPlaceOrder}
        style={{ width: "100%", justifyContent: "center", padding: "0.875rem" }}
        id="demo-place-order-btn"
      >
        Place Order (Demo)
      </button>
    </div>
  );
}

function ConfirmScreen({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="confirm-screen">
      <div className="confirm-screen__icon">
        <Check size={28} strokeWidth={3} />
      </div>
      <h2 className="confirm-screen__title">Order Placed!</h2>
      <p className="confirm-screen__sub">
        Your order has been sent to the restaurant team.
        <br />
        <strong>(Demo simulation — no real order was placed)</strong>
      </p>
      <div className="confirm-screen__order-id">
        Order #{Math.floor(Math.random() * 9000) + 1000}
      </div>
      <button className="btn btn--primary btn--lg" onClick={onConfirm} id="demo-track-btn">
        Track Order
      </button>
    </div>
  );
}

function StatusScreen({ onReset }: { onReset: () => void }) {
  const stages = [
    { label: "Order received", done: true, active: false },
    { label: "Preparing your dishes", done: false, active: true },
    { label: "Ready to serve", done: false, active: false },
    { label: "Enjoy your meal!", done: false, active: false },
  ];

  return (
    <div className="status-screen">
      <h2 className="status-screen__title">Live Order Status</h2>
      <p className="status-screen__sub">Table {DEMO_RESTAURANT.tableNumber} · Demo simulation</p>
      <div className="status-screen__stages">
        {stages.map((s, i) => (
          <div key={i} className={`status-stage ${s.done ? "status-stage--done" : ""} ${s.active ? "status-stage--active" : ""}`}>
            <div className="status-stage__dot">
              {s.done && <Check size={10} strokeWidth={3} />}
              {s.active && <span className="status-stage__pulse" />}
            </div>
            <span className="status-stage__label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="status-screen__eta">
        <Clock size={16} />
        Estimated time: 18–22 min
      </div>
      <button
        className="btn btn--secondary"
        onClick={onReset}
        style={{ marginTop: "var(--sp-6)", width: "100%", justifyContent: "center" }}
      >
        Try Demo Again
      </button>
    </div>
  );
}

export default function MenuDemo() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [started, setStarted] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: MenuItem) {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1, note: "" }];
    });
  }

  function removeFromCart(id: string) {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === id);
      if (!existing) return prev;
      if (existing.quantity <= 1) return prev.filter((c) => c.item.id !== id);
      return prev.map((c) =>
        c.item.id === id ? { ...c, quantity: c.quantity - 1 } : c
      );
    });
  }

  function reset() {
    setCart([]);
    setScreen("menu");
    setStarted(false);
  }

  return (
    <div className="menu-demo" role="region" aria-label="Interactive menu demonstration">
      {/* Phone frame */}
      <div className="phone-frame">
        <div className="phone-frame__notch" aria-hidden="true" />
        <div className="phone-frame__screen">
          {!started ? (
            <TableEntryScreen onEnter={() => setStarted(true)} />
          ) : screen === "menu" ? (
            <MenuScreen
              cart={cart}
              onAdd={addToCart}
              onRemove={removeFromCart}
              onViewCart={() => setScreen("cart")}
            />
          ) : screen === "cart" ? (
            <CartScreen
              cart={cart}
              onAdd={addToCart}
              onRemove={removeFromCart}
              onBack={() => setScreen("menu")}
              onPlaceOrder={() => setScreen("confirm")}
            />
          ) : screen === "confirm" ? (
            <ConfirmScreen onConfirm={() => setScreen("status")} />
          ) : (
            <StatusScreen onReset={reset} />
          )}
        </div>
        <div className="phone-frame__home" aria-hidden="true" />
      </div>
    </div>
  );
}
