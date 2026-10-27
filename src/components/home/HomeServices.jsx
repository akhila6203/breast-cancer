import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";
import { services } from "../../data/siteData";

export default function HomeServices() {
  return (
    <section className="section-padding bg-mist">
      <div className="page-container">
        <SectionTitle
          eyebrow="OUR SERVICES"
          title="Care and guidance for every step"
          description="Screening, diagnosis, treatment information and patient support — explained clearly."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
