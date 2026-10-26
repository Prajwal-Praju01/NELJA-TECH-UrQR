import { Link } from "react-router-dom";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="section" aria-labelledby="placeholder-heading">
      <div className="container" style={{ maxWidth: "720px" }}>
        <h1 id="placeholder-heading" style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--sp-4)" }}>{title}</h1>
        <p style={{ color: "var(--color-text-2)", marginBottom: "var(--sp-6)" }}>
          This page is under construction. Please check back soon or{" "}
          <Link to="/contact" style={{ color: "var(--color-emerald)", fontWeight: 600 }}>contact us</Link> for more information.
        </p>
        <Link to="/" className="btn btn--secondary">← Back to Home</Link>
      </div>
    </section>
  );
}
