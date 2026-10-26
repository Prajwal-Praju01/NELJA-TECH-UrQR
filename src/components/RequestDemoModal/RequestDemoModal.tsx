import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, X } from "lucide-react";
import "./RequestDemoModal.css";

interface DemoForm {
  name: string;
  email: string;
  state: string;
  city: string;
  phone: string;
  restaurant: string;
}

type DemoErrors = Partial<Record<keyof DemoForm, string>>;

const INITIAL_FORM: DemoForm = {
  name: "",
  email: "",
  state: "",
  city: "",
  phone: "",
  restaurant: "",
};

const CITIES_BY_STATE: Record<string, string[]> = {
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  Delhi: ["New Delhi"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
};

function validate(form: DemoForm): DemoErrors {
  const errors: DemoErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
  if (!form.state) errors.state = "Select a state.";
  if (!form.city) errors.city = "Select a city.";
  if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) errors.phone = "Enter a valid 10-digit number.";
  if (!form.restaurant.trim()) errors.restaurant = "Restaurant name is required.";
  return errors;
}

export default function RequestDemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<DemoErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 3500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function updateField(name: keyof DemoForm, value: string) {
    setForm((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}),
    }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      document.getElementById(`demo-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (!isOpen) return null;

  return (
    <div className="demo-modal" role="presentation">
      <button className="demo-modal__backdrop" aria-label="Close demo request" onClick={() => setIsOpen(false)} />
      <section className="demo-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
        <button className="demo-modal__close" aria-label="Close demo request" onClick={() => setIsOpen(false)}>
          <X size={32} strokeWidth={1.8} />
        </button>

        {submitted ? (
          <div className="demo-modal__success" role="status" aria-live="polite">
            <CheckCircle2 size={54} />
            <h2 id="demo-modal-title">Thanks for your interest!</h2>
            <p>Your demo request has been recorded for this frontend demonstration. Our team will be in touch shortly.</p>
            <button className="demo-modal__submit" onClick={() => setIsOpen(false)}>Continue to website</button>
          </div>
        ) : (
          <>
            <h2 id="demo-modal-title" className="demo-modal__title">Request a Demo</h2>
            <form className="demo-modal__form" onSubmit={handleSubmit} noValidate>
              <label className="demo-modal__field">
                <span>Name <b>*</b></span>
                <input id="demo-name" value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label className="demo-modal__field">
                <span>Email <b>*</b></span>
                <input id="demo-email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} />
                {errors.email && <small>{errors.email}</small>}
              </label>

              <div className="demo-modal__row">
                <label className="demo-modal__field">
                  <span>State <b>*</b></span>
                  <select id="demo-state" value={form.state} onChange={(event) => updateField("state", event.target.value)} aria-invalid={Boolean(errors.state)}>
                    <option value="">Select State</option>
                    {Object.keys(CITIES_BY_STATE).map((state) => <option key={state} value={state}>{state}</option>)}
                  </select>
                  {errors.state && <small>{errors.state}</small>}
                </label>
                <label className="demo-modal__field">
                  <span>City <b>*</b></span>
                  <select id="demo-city" value={form.city} onChange={(event) => updateField("city", event.target.value)} disabled={!form.state} aria-invalid={Boolean(errors.city)}>
                    <option value="">Select City</option>
                    {(CITIES_BY_STATE[form.state] ?? []).map((city) => <option key={city} value={city}>{city}</option>)}
                  </select>
                  {errors.city && <small>{errors.city}</small>}
                </label>
              </div>

              <label className="demo-modal__field">
                <span>Phone <b>*</b></span>
                <div className="demo-modal__phone">
                  <span>+91</span>
                  <input id="demo-phone" inputMode="numeric" maxLength={10} placeholder="Enter 10-digit phone number" value={form.phone} onChange={(event) => updateField("phone", event.target.value.replace(/\D/g, ""))} aria-invalid={Boolean(errors.phone)} />
                </div>
                {errors.phone && <small>{errors.phone}</small>}
              </label>

              <label className="demo-modal__field">
                <span>Restaurant Name <b>*</b></span>
                <input id="demo-restaurant" value={form.restaurant} onChange={(event) => updateField("restaurant", event.target.value)} aria-invalid={Boolean(errors.restaurant)} />
                {errors.restaurant && <small>{errors.restaurant}</small>}
              </label>

              <button type="submit" className="demo-modal__submit">Submit</button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
