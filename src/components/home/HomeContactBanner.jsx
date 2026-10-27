import { Link } from "react-router-dom";

export default function HomeContactBanner() {
  return (
    <section className="section-padding">
      <div className="page-container overflow-hidden rounded-[32px] bg-gradient-to-r from-navy to-royal p-8 text-white sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[15px] font-bold tracking-[0.2em] text-sky">WE'RE HERE TO HELP</p>
            <h2 className="display-font mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Have a question about your next step?
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-8 text-white/90">
              Contact our team for general enquiries, appointment information and guidance on accessing the right care.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link to="/contact" className="btn-light">
              Contact Us
            </Link>
            <Link
              to="/appointments"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/50 px-5 py-2 text-center text-[15px] font-semibold text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
