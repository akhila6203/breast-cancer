import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PageLayout } from "../components/PageChrome";
import { getServiceBySlug, services } from "../data/siteData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const reduceMotion = useReducedMotion();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const detail = service.detail;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title={service.title}
      description={service.description}
      breadcrumbItems={[
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: service.title },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="display-font text-2xl font-semibold text-heading sm:text-3xl">
            {detail.overviewTitle}
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-ink">{detail.overview}</p>
          <ul className="mt-6 space-y-3">
            {detail.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-[16px] leading-7 text-ink">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-royal" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
        <img
          src={detail.image}
          alt=""
          className="h-[280px] w-full object-cover sm:h-[360px] curve-image lg:h-full lg:min-h-[320px]"
        />
      </div>

      {detail.sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reduceMotion ? 0 : index * 0.06 }}
          className="mt-12 scroll-mt-28 rounded-[1.75rem] border border-line bg-mist p-7 sm:p-9"
        >
          <h2 className="display-font text-2xl font-semibold text-heading">{section.title}</h2>
          <div className="mt-4 space-y-4 text-[17px] leading-8 text-ink">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          {section.points?.length > 0 && (
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {section.points.map((point) => (
                <li key={point} className="flex gap-2 text-[15px] leading-6 text-ink">
                  <ChevronRight size={18} className="mt-0.5 shrink-0 text-sky" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      ))}

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-navy via-royaldeep to-royal p-7 text-white sm:p-9">
          <h2 className="display-font text-2xl font-semibold text-white">Ready to talk to our team?</h2>
          <p className="mt-3 text-[16px] leading-7 text-white/90">
            Book a consultation or contact the breast care desk to ask which service fits your situation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/appointments" className="btn-light">
              Book appointment
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/50 px-6 text-[16px] font-semibold text-white hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="premium-card p-7 sm:p-9">
          <h2 className="display-font text-xl font-semibold text-heading">Other services</h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/services/${item.slug}`}
                  className="flex items-center justify-between gap-3 text-[16px] font-semibold text-royal hover:underline"
                >
                  {item.title}
                  <ChevronRight size={18} />
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/services" className="btn-secondary mt-6">
            View all services
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
