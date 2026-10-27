import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "../components/PageChrome";
import { doctors } from "../data/siteData";

export default function TeamPage() {
  return (
    <PageLayout
      eyebrow="OUR TEAM"
      title="Meet the people behind your care"
      breadcrumbItems={[
        { label: "Home", path: "/" },
        { label: "Our Team" },
      ]}
      description="Browse specialists listed on this website. Please confirm qualifications, specialties and clinic availability with the hospital."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <article
            key={doctor.name}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-premium"
          >
            <img
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.role}`}
              className="h-72 w-full object-cover object-top"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="display-font text-xl font-semibold text-heading">{doctor.name}</h2>
              <p className="mt-2 text-[16px] text-ink">{doctor.role}</p>
              <p className="mt-2 text-[15px] leading-6 text-ink">{doctor.focus}</p>
              <Link
                to="/appointments"
                className="mt-5 inline-flex items-center gap-2 text-[16px] font-semibold text-royal"
              >
                Request a consultation <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
