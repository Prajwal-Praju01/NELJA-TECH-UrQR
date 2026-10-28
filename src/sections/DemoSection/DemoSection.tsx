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
            <div className="section-label">Try the guest menu</div>
            <h2 id="demo-heading" className="demo-section__title">
              See what your guests see after they scan
            </h2>
            <p className="demo-section__sub">
              Open the sample menu below and try the same basic journey a guest follows: browse dishes, add items, review the cart, and send a test order.
            </p>

            <div className="demo-section__steps">
              {[
              { n: "1", text: "Open the menu on the phone" },
              { n: "2", text: "Browse dishes and add items" },
              { n: "3", text: "Review the cart and total" },
              { n: "4", text: "Send a test order" },
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
