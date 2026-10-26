import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../../data/appData";
import "./FAQSection.css";

export default function FAQSection({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<string | null>(null);
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <section className="faq-section section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-section__header">
          <div className="section-label">Frequently Asked Questions</div>
          <h2 id="faq-heading" className="faq-section__title">
            Common questions about UrQR
          </h2>
          <p className="faq-section__sub">
            If you have a question that isn't answered here, book a demo and our team will walk you through the details.
          </p>
        </div>

        <div className="faq-section__list" role="list">
          {items.map((faq) => (
            <div key={faq.id} className="accordion-item" role="listitem">
              <button
                className="accordion-trigger"
                aria-expanded={open === faq.id}
                aria-controls={`faq-body-${faq.id}`}
                id={`faq-trigger-${faq.id}`}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              >
                {faq.question}
                <ChevronDown
                  size={18}
                  className={`accordion-icon ${open === faq.id ? "open" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-body-${faq.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${faq.id}`}
                className="accordion-content"
                style={{ maxHeight: open === faq.id ? "600px" : "0" }}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
