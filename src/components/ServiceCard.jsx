
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Service Image */}
      <div className="relative h-52 overflow-hidden bg-mist sm:h-56">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Heading and Description */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold leading-snug text-heading">
          {service.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-7 text-ink">
          {service.description}
        </p>

        {/* Read More */}
        <Link
          to={service.path}
          className="mt-5 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-royal transition-colors hover:opacity-75"
        >
          Learn More
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}



// import {
//   ScanSearch,
//   Activity,
//   HeartPulse,
//   Stethoscope,
//   Radiation,
//   HandHeart,
//   ArrowUpRight,
// } from "lucide-react";
// import { motion, useReducedMotion } from "framer-motion";
// import { Link } from "react-router-dom";

// const icons = {
//   ScanSearch,
//   Activity,
//   HeartPulse,
//   Stethoscope,
//   Radiation,
//   HandHeart,
// };

// export default function ServiceCard({ service, index = 0 }) {
//   const Icon = icons[service.icon] || HeartPulse;
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
//       whileHover={reduceMotion ? {} : { y: -6 }}
//       className="premium-card group p-6 sm:p-7"
//     >
//       <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ice text-royal transition group-hover:bg-royal group-hover:text-white">
//         <Icon size={27} />
//       </div>
//       <h3 className="display-font text-xl font-semibold text-heading sm:text-2xl">
//         {service.title}
//       </h3>
//       <p className="mt-3 text-[16px] leading-7 text-ink">{service.description}</p>
//       <Link
//         to={service.path}
//         className="mt-5 inline-flex items-center gap-2 text-[16px] font-bold text-royal"
//       >
//         Explore service
//         <ArrowUpRight size={17} />
//       </Link>
//     </motion.article>
//   );
// }
