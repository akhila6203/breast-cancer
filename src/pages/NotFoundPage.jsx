
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section-padding flex min-h-[65vh] items-center justify-center bg-white px-5">
      <div className="page-container w-full">
        <div className="mx-auto max-w-2xl py-12 text-center sm:py-16">

          {/* Hospital Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Hospital Logo"
              className="h-16 w-auto max-w-[200px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Simple Coming Soon Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-royal">
            Coming Soon
          </p>

          {/* Heading */}
          <h1 className="display-font text-3xl font-semibold leading-tight text-heading sm:text-4xl md:text-5xl">
            Something Good Is
            <span className="mt-2 block">Coming Soon.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-ink sm:text-base">
            We are currently working on this page to make your experience
            better. Please visit us again soon. Thank you for your patience.
          </p>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-20 bg-royal/30" />

          <p className="text-[15px] font-medium text-heading">
            Your health and well-being always come first.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-royal px-6 py-3 text-[15px] font-semibold text-royal transition hover:bg-royal hover:text-white"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}




// import { Link } from "react-router-dom";

// export default function NotFoundPage() {
//   return (
//     <section className="section-padding text-center">
//       <div className="page-container">
//         <p className="text-[15px] font-bold tracking-widest text-royal">404 · PAGE NOT FOUND</p>
//         <h1 className="display-font mt-4 text-4xl font-semibold text-heading">
//           Let's find your way back.
//         </h1>
//         <p className="mt-4 text-[17px] text-ink">The page you requested could not be found.</p>
//         <Link to="/" className="btn-primary mt-7">
//           Return Home
//         </Link>
//       </div>
//     </section>
//   );
// }
