import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  ChefHat,
  Check,
  ChevronRight,
  Clock3,
  Plus,
  QrCode,
  ShoppingBag,
  Smartphone,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./StorySection.css";

type Scene = {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof QrCode;
};

const SCENES: Scene[] = [
  {
    eyebrow: "01 / Discover",
    title: "A better first touch at every table.",
    description:
      "A quiet QR stand gives guests an instant invitation to explore, while your team stays focused on the room.",
    icon: QrCode,
  },
  {
    eyebrow: "02 / Scan",
    title: "One scan opens your whole menu.",
    description:
      "Guests use the camera they already have. No app, account, or waiting for a printed menu to arrive.",
    icon: Smartphone,
  },
  {
    eyebrow: "03 / Explore",
    title: "Make every dish easy to choose.",
    description:
      "Rich categories, dish photography, dietary cues, and thoughtful descriptions help guests decide with confidence.",
    icon: Utensils,
  },
  {
    eyebrow: "04 / Order",
    title: "From appetite to order in seconds.",
    description:
      "Guests customise items, adjust quantities, and send a clear order from the table without waving anyone down.",
    icon: ShoppingBag,
  },
  {
    eyebrow: "05 / Serve",
    title: "Give your team a calmer service flow.",
    description:
      "Incoming orders are visible to the right people, with table context that keeps the kitchen and floor in sync.",
    icon: ChefHat,
  },
  {
    eyebrow: "06 / Manage",
    title: "See the operation, not just the order.",
    description:
      "UrQR brings menu control, order activity, and useful signals together so you can keep improving every shift.",
    icon: BarChart3,
  },
];

function QrStand() {
  return (
    <div className="story-stand">
      <div className="story-stand__top">
        <span className="story-stand__brand">UrQR</span>
        <QrCode size={13} />
      </div>
      <div className="story-stand__code" aria-hidden="true">
        {Array.from({ length: 49 }, (_, index) => (
          <span key={index} className={(index * 7 + index % 3) % 5 === 0 ? "is-light" : ""} />
        ))}
      </div>
      <span className="story-stand__caption">Scan for the menu</span>
    </div>
  );
}

function PhoneMenu({ scene }: { scene: number }) {
  if (scene === 0) {
    return (
      <div className="story-phone__welcome">
        <div className="story-phone__restaurant-mark">A</div>
        <span className="story-phone__live">OPEN · 12:30 PM</span>
        <h3>Aromas of India</h3>
        <p>Good food, served your way.</p>
        <button type="button" className="story-phone__start">
          View today&apos;s menu <ChevronRight size={14} />
        </button>
      </div>
    );
  }

  if (scene === 1) {
    return (
      <div className="story-phone__menu">
        <div className="story-phone__topline">
          <div>
            <span className="story-phone__muted">TABLE T-04</span>
            <strong>Aromas of India</strong>
          </div>
          <QrCode size={18} />
        </div>
        <div className="story-phone__hero-dish">
          <img src="/images/food-spread.jpg" alt="A spread of Indian dishes on a restaurant table" />
          <div><span>CURATED FOR YOU</span><strong>Made fresh today</strong></div>
        </div>
        <div className="story-phone__categories"><span className="is-active">Popular</span><span>Starters</span><span>Mains</span></div>
      </div>
    );
  }

  if (scene === 2) {
    return (
      <div className="story-phone__menu">
        <div className="story-phone__topline"><strong>Popular today</strong><span className="story-phone__cart-count">2</span></div>
        <div className="story-menu-item">
          <img src="/images/fine-dining.jpg" alt="" />
          <div><strong>Paneer Tikka</strong><span>Charred, smoky &amp; tender</span><b>₹220</b></div>
          <button type="button" aria-label="Add Paneer Tikka"><Plus size={14} /></button>
        </div>
        <div className="story-menu-item">
          <img src="/images/food-spread.jpg" alt="" />
          <div><strong>Butter Chicken</strong><span>Silky tomato &amp; spice</span><b>₹310</b></div>
          <button type="button" aria-label="Add Butter Chicken"><Plus size={14} /></button>
        </div>
        <div className="story-phone__customise"><span>Customise your order</span><Check size={15} /></div>
      </div>
    );
  }

  if (scene === 3) {
    return (
      <div className="story-phone__menu story-phone__order">
        <div className="story-phone__topline"><strong>Your order</strong><span className="story-phone__muted">TABLE T-04</span></div>
        <div className="story-order-row"><span><strong>Paneer Tikka</strong><small>Extra mint chutney</small></span><b>− &nbsp;2&nbsp; +</b><em>₹440</em></div>
        <div className="story-order-row"><span><strong>Masala Dosa</strong><small>Classic · mild</small></span><b>− &nbsp;1&nbsp; +</b><em>₹130</em></div>
        <div className="story-order-total"><span>Total</span><strong>₹570</strong></div>
        <button type="button" className="story-phone__send">Send order <ChevronRight size={14} /></button>
      </div>
    );
  }

  if (scene === 4) {
    return (
      <div className="story-phone__kitchen">
        <div className="story-phone__topline"><strong>Service view</strong><span className="story-status"><i /> Live</span></div>
        <div className="story-kitchen-card story-kitchen-card--new"><span>NEW · #1042</span><strong>Table T-04</strong><p>2 × Paneer Tikka<br />1 × Masala Dosa</p><b><Clock3 size={12} /> 2 min ago</b></div>
        <div className="story-kitchen-card"><span>PREPARING · #1041</span><strong>Table T-02</strong><p>1 × Butter Chicken</p></div>
      </div>
    );
  }

  return (
    <div className="story-phone__dashboard">
      <div className="story-phone__topline"><div><span className="story-phone__muted">TUESDAY, 12 MAR</span><strong>Good morning, Asha</strong></div><div className="story-avatar">A</div></div>
      <div className="story-dashboard-stat"><span>Today&apos;s orders</span><strong>128</strong><small>↑ 18% vs last Tuesday</small></div>
      <div className="story-dashboard-grid"><div><span>Top dish</span><strong>Paneer Tikka</strong><small>42 orders</small></div><div><span>Avg. prep time</span><strong>14 min</strong><small>↓ 3 min this week</small></div></div>
      <div className="story-dashboard-bars"><i /><i /><i /><i /><i /><i /><i /></div>
    </div>
  );
}

export default function StorySection() {
  const [activeScene, setActiveScene] = useState(0);
  const sceneRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.scene);
          setActiveScene(index);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.5, 0.9] },
    );

    sceneRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="story-section" aria-labelledby="story-heading">
      <div className="story-section__intro container">
        <div className="section-label">The UrQR experience</div>
        <h2 id="story-heading">A smoother service story, from the first scan to the last plate.</h2>
        <p>Designed around the rhythm of a real restaurant: welcoming, intuitive, and quietly powerful behind the scenes.</p>
      </div>

      <div className="story-section__layout container">
        <div className="story-section__scenes">
          {SCENES.map((scene, index) => {
            const Icon = scene.icon;
            return (
              <article
                key={scene.eyebrow}
                className={`story-scene ${activeScene === index ? "is-active" : ""}`}
                data-scene={index}
                ref={(element) => { sceneRefs.current[index] = element; }}
              >
                <div className="story-scene__number"><Icon size={16} /> {scene.eyebrow}</div>
                <h3>{scene.title}</h3>
                <p>{scene.description}</p>
              </article>
            );
          })}
        </div>

        <div className="story-section__visual" aria-label="UrQR product journey preview">
          <div className="story-visual__glow" />
          <motion.div
            className="story-visual__photo"
            animate={reducedMotion ? undefined : { y: activeScene % 2 === 0 ? -8 : 8 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <img src={activeScene < 2 ? "/images/cafe-ambiance.jpg" : activeScene < 4 ? "/images/fine-dining.jpg" : "/images/kitchen-team.jpg"} alt="" />
          </motion.div>
          <div className="story-visual__scene-label"><span>URQR IN ACTION</span><strong>{SCENES[activeScene].eyebrow.split(" / ")[1]}</strong></div>
          {activeScene === 0 && <QrStand />}
          <motion.div className="story-phone" key={activeScene} initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.45 }}>
            <div className="story-phone__notch" />
            <div className="story-phone__screen"><PhoneMenu scene={activeScene} /></div>
            <div className="story-phone__home" />
          </motion.div>
          {activeScene >= 4 && <div className="story-visual__team-note"><ChefHat size={15} /><span>Team view<br /><strong>Always in sync</strong></span></div>}
        </div>
      </div>

      <div className="story-section__footer container">
        <p><span><Check size={15} /></span> No app downloads. No complicated setup. Just a better way to serve.</p>
        <Link to="/product" className="btn btn--secondary">Explore the product <ChevronRight size={16} /></Link>
      </div>
    </section>
  );
}
