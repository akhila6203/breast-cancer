import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section-padding text-center">
      <div className="page-container">
        <p className="text-[15px] font-bold tracking-widest text-royal">404 · PAGE NOT FOUND</p>
        <h1 className="display-font mt-4 text-4xl font-semibold text-heading">
          Let's find your way back.
        </h1>
        <p className="mt-4 text-[17px] text-ink">The page you requested could not be found.</p>
        <Link to="/" className="btn-primary mt-7">
          Return Home
        </Link>
      </div>
    </section>
  );
}
