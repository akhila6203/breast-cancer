import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import CardSlider from "./CardSlider";
import { gallery } from "../data/siteData";

export default function PhotoGallery({ slider = true }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <SectionTitle
          eyebrow="OUR ENVIRONMENT"
          title="A closer look at our care"
          description="Use genuine, approved hospital photographs here to help patients understand your facilities."
        />
        {slider ? (
          <CardSlider
            items={gallery}
            ariaLabel="Photo gallery"
            visible={{ base: 1, md: 2, lg: 3, xl: 3 }}
            renderItem={(item) => (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-64 w-full rounded-3xl object-cover sm:h-80"
              />
            )}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.img
                key={item.src}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? {} : { scale: 1.03 }}
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-64 w-full rounded-3xl object-cover sm:h-80"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
