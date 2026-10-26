import MenuDemo from "../../components/MenuDemo/MenuDemo";
import "./DemoSection.css";

export default function DemoSection() {
  return (
    <section className="demo-section section" style={{ background: "var(--color-bg-alt)" }} aria-labelledby="demo-heading">
      <div className="container">
        <div className="demo-section__inner">
          {/* Left: Demo phone */}
          <div className="demo-section__phone">
            <MenuDemo />
          </div>

          {/* Right: Explanation */}
          <div className="demo-section__content">
            <div className="section-label">Interactive Demo</div>
            <h2 id="demo-heading" className="demo-section__title">
              See the guest experience for yourself
            </h2>
            <p className="demo-section__sub">
              This is a fully interactive frontend demonstration of the UrQR guest menu experience. Browse the menu, add items to your cart, and see the order journey — all running locally, with no real order being placed.
            </p>

            <div className="demo-section__steps">
              {[
                { n: "1", text: "Open the demo menu using the button on the phone" },
                { n: "2", text: "Browse categories and add items to your cart" },
                { n: "3", text: "Review your order and total in the cart view" },
                { n: "4", text: "Simulate placing an order and tracking its status" },
              ].map((s) => (
                <div key={s.n} className="demo-step">
                  <div className="demo-step__num">{s.n}</div>
                  <p className="demo-step__text">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="demo-section__note">
              <strong>Note:</strong> This demonstration uses entirely local frontend state. No orders are placed, no data is stored, and no payment is required. Sample menu items and prices are illustrative.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
