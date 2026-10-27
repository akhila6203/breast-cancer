import {
  ScanSearch,
  Activity,
  HeartPulse,
  Stethoscope,
  Radiation,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const icons = {
  ScanSearch,
  Activity,
  HeartPulse,
  Stethoscope,
  Radiation,
  HandHeart,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || HeartPulse;
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
      whileHover={reduceMotion ? {} : { y: -6 }}
      className="premium-card group p-6 sm:p-7"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ice text-royal transition group-hover:bg-royal group-hover:text-white">
        <Icon size={27} />
      </div>
      <h3 className="display-font text-xl font-semibold text-heading sm:text-2xl">
        {service.title}
      </h3>
      <p className="mt-3 text-[16px] leading-7 text-ink">{service.description}</p>
      <Link
        to={service.path}
        className="mt-5 inline-flex items-center gap-2 text-[16px] font-bold text-royal"
      >
        Explore service
        <ArrowUpRight size={17} />
      </Link>
    </motion.article>
  );
}
