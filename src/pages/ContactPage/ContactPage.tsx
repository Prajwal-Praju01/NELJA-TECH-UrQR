import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2, Mail, MapPin, Clock } from "lucide-react";
import "./ContactPage.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  restaurant: string;
  businessType: string;
  outlets: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  restaurant?: string;
  businessType?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  restaurant: "",
  businessType: "",
  outlets: "1",
  message: "",
};

const BUSINESS_TYPES = [
  "Café",
  "Quick-Service Restaurant (QSR)",
  "Casual Dining",
  "Fine Dining",
  "Bakery",
  "Food Court",
  "Cloud Kitchen",
  "Restaurant Chain / Multi-outlet",
  "Other",
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[+\d\s\-()]{7,15}$/.test(phone.trim());
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Business email is required.";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!validatePhone(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.restaurant.trim()) errors.restaurant = "Restaurant name is required.";
  if (!data.businessType) errors.businessType = "Please select your business type.";
  return errors;
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      // Re-validate on change after first blur
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, phone: true, restaurant: true, businessType: true, message: true });
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(`contact-${firstErrorField}`)?.focus();
      return;
    }

    setFormState("submitting");

    // Simulate async submission (demo mode — no real endpoint)
    await new Promise((res) => setTimeout(res, 1800));

    // Demo mode: always show success with a clear disclaimer
    setFormState("success");
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setFormState("idle");
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-label">Contact</div>
          <h1 id="contact-heading" className="contact-hero__title">
            Book a demo or get in touch
          </h1>
          <p className="contact-hero__sub">
            Fill in the form below and our team will reach out to arrange a personalised walkthrough of UrQR for your restaurant.
          </p>
        </div>
      </section>

      <section className="contact-main section" aria-label="Contact form and information">
        <div className="container">
          <div className="contact-main__inner">
            {/* Form */}
            <div className="contact-form-wrap">
              {formState === "success" ? (
                <div className="contact-success" role="status" aria-live="polite">
                  <div className="contact-success__icon">
                    <CheckCircle2 size={36} />
                  </div>
                  <h2 className="contact-success__title">Thank you!</h2>
                  <p className="contact-success__msg">
                    Your enquiry has been received. Our team will be in touch shortly.
                  </p>
                  <div className="contact-success__demo-note" role="note">
                    <AlertCircle size={14} />
                    <strong>Demo mode:</strong> This form is not connected to a live submission service. No data was sent to Nelja Tech. This is a frontend demonstration only.
                  </div>
                  <button className="btn btn--secondary" onClick={handleReset} id="contact-reset-btn">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                  aria-label="Demo booking enquiry form"
                  noValidate
                >
                  <h2 className="contact-form__title">Book a Demo</h2>
                  <p className="contact-form__sub">Fields marked <span aria-hidden="true" style={{ color: "var(--color-error)" }}>*</span> are required.</p>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Full name <span className="required" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className={`form-input ${errors.name ? "error" : ""}`}
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Rajan Sharma"
                        aria-required="true"
                        aria-describedby={errors.name ? "error-name" : undefined}
                        aria-invalid={!!errors.name}
                        disabled={formState === "submitting"}
                      />
                      {errors.name && (
                        <span id="error-name" className="form-error" role="alert">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        Business email <span className="required" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={`form-input ${errors.email ? "error" : ""}`}
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@restaurant.com"
                        aria-required="true"
                        aria-describedby={errors.email ? "error-email" : undefined}
                        aria-invalid={!!errors.email}
                        disabled={formState === "submitting"}
                      />
                      {errors.email && (
                        <span id="error-email" className="form-error" role="alert">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">
                        Phone number <span className="required" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={`form-input ${errors.phone ? "error" : ""}`}
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+91 98765 43210"
                        aria-required="true"
                        aria-describedby={errors.phone ? "error-phone" : undefined}
                        aria-invalid={!!errors.phone}
                        disabled={formState === "submitting"}
                      />
                      {errors.phone && (
                        <span id="error-phone" className="form-error" role="alert">
                          <AlertCircle size={12} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-restaurant">
                        Restaurant name <span className="required" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-restaurant"
                        name="restaurant"
                        type="text"
                        className={`form-input ${errors.restaurant ? "error" : ""}`}
                        value={form.restaurant}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your restaurant name"
                        aria-required="true"
                        aria-describedby={errors.restaurant ? "error-restaurant" : undefined}
                        aria-invalid={!!errors.restaurant}
                        disabled={formState === "submitting"}
                      />
                      {errors.restaurant && (
                        <span id="error-restaurant" className="form-error" role="alert">
                          <AlertCircle size={12} /> {errors.restaurant}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-businessType">
                        Business type <span className="required" aria-label="required">*</span>
                      </label>
                      <select
                        id="contact-businessType"
                        name="businessType"
                        className={`form-select ${errors.businessType ? "error" : ""}`}
                        value={form.businessType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-describedby={errors.businessType ? "error-businessType" : undefined}
                        aria-invalid={!!errors.businessType}
                        disabled={formState === "submitting"}
                      >
                        <option value="">Select your business type</option>
                        {BUSINESS_TYPES.map((bt) => (
                          <option key={bt} value={bt}>{bt}</option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <span id="error-businessType" className="form-error" role="alert">
                          <AlertCircle size={12} /> {errors.businessType}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-outlets">
                        Number of outlets
                      </label>
                      <select
                        id="contact-outlets"
                        name="outlets"
                        className="form-select"
                        value={form.outlets}
                        onChange={handleChange}
                        disabled={formState === "submitting"}
                      >
                        {["1", "2–5", "6–20", "20+"].map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Message or requirements
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us about your restaurant, what you're looking for, or any specific questions..."
                      rows={4}
                      disabled={formState === "submitting"}
                    />
                  </div>

                  <div className="contact-form__disclaimer" role="note">
                    <AlertCircle size={14} />
                    <span>
                      <strong>Demo mode:</strong> This form is not currently connected to a live submission endpoint. Submitting it will show a simulated success message. No data is transmitted to Nelja Tech.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary btn--lg"
                    id="contact-submit-btn"
                    disabled={formState === "submitting"}
                    aria-busy={formState === "submitting"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={18} className="contact-form__spinner" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar info */}
              <aside className="contact-info" aria-label="Contact information">
                {/* Restaurant photo */}
                <div className="contact-info__photo">
                  <img
                    src="/images/cafe-ambiance.jpg"
                    alt="Modern Indian café — the kind of restaurant UrQR serves"
                    loading="lazy"
                  />
                  <div className="contact-info__photo-overlay" />
                  <p className="contact-info__photo-caption">UrQR · Bengaluru, India</p>
                </div>

                <div className="contact-info__inner">
                  <h2 className="contact-info__title">Get in touch</h2>
                  <p className="contact-info__sub">
                    Our team is based in Bengaluru and focuses on helping Indian restaurants adopt digital menus. We'd love to understand your needs before recommending a plan.
                  </p>

                  <div className="contact-info__items">
                    <div className="contact-info__item">
                      <div className="contact-info__item-icon">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="contact-info__item-label">Email</p>
                        <p className="contact-info__item-value">hello@urqr.in</p>
                        <p className="contact-info__item-note">(illustrative — not yet live)</p>
                      </div>
                    </div>
                    <div className="contact-info__item">
                      <div className="contact-info__item-icon">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="contact-info__item-label">Location</p>
                        <p className="contact-info__item-value">Bengaluru, Karnataka, India</p>
                        <p className="contact-info__item-note">Serving restaurants across India</p>
                      </div>
                    </div>
                    <div className="contact-info__item">
                      <div className="contact-info__item-icon">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="contact-info__item-label">Response time</p>
                        <p className="contact-info__item-value">Within 1 business day</p>
                        <p className="contact-info__item-note">Mon–Sat, 9am–6pm IST</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-info__note">
                    <p>
                      <strong>A note on honesty:</strong> We will tell you clearly what UrQR can do today versus what is on the development roadmap. We don't believe in overselling features that aren't ready.
                    </p>
                  </div>
                </div>
              </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
