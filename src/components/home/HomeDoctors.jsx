import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { doctors } from "../../data/siteData";

export default function HomeDoctors() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-mist">
      <div className="page-container">
        <SectionTitle
          eyebrow="MEET THE TEAM"
          title="Guidance from people who care"
          description="Specialist profiles shown here come from the website data. Confirm names, qualifications and clinic times with the hospital before publishing."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
              whileHover={reduceMotion ? {} : { y: -6 }}
              className="overflow-hidden rounded-3xl bg-white shadow-premium"
            >
              <img
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.role}`}
                loading="lazy"
                className="h-[260px] w-full object-cover object-top sm:h-[300px]"
              />
              <div className="p-6">
                <h3 className="display-font text-xl font-semibold text-heading">{doctor.name}</h3>
                <p className="mt-2 text-[16px] text-ink">{doctor.role}</p>
                <Link
                  to="/appointments"
                  className="mt-5 inline-flex items-center gap-2 text-[16px] font-bold text-royal"
                >
                  Request an appointment <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/our-team" className="btn-secondary">
            View our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
