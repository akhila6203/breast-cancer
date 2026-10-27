import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { PageLayout } from "../components/PageChrome";
import { brochures, services } from "../data/siteData";

export default function ServicesPage() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Explore care and treatment services"
      breadcrumbItems={[
        { label: "Home", path: "/" },
        { label: "Services" },
      ]}
      description="Learn about screening, diagnostic assessments, oncology treatments and support services. The appropriate options depend on an individual's diagnosis and clinical assessment."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl bg-mist p-7 sm:p-10">
          <h2 className="display-font text-2xl font-semibold text-heading">
            Need help finding the right service?
          </h2>
          <p className="mt-3 text-[17px] leading-8 text-ink">
            Contact the care team to ask about available services and how to arrange a consultation.
          </p>
          <Link to="/contact" className="btn-primary mt-5">
            Enquire now
          </Link>
        </div>
        <div className="rounded-3xl border border-line bg-white p-7 sm:p-10">
          <h2 className="display-font text-2xl font-semibold text-heading">Download brochures</h2>
          <p className="mt-3 text-[17px] leading-8 text-ink">
            Plain-language PDF guides for patients and families. Place your verified 02.pdf in{" "}
            <code className="text-[15px]">public/brochures/</code>.
          </p>
          <ul className="mt-5 space-y-3">
            {brochures.map((item) => (
              <li key={item.id}>
                <a
                  href={item.file}
                  download
                  className="inline-flex items-center gap-2 font-semibold text-royal hover:underline"
                >
                  <Download size={17} />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
