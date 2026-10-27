import { Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import CardSlider from "./CardSlider";
import { testimonials } from "../data/siteData";

export default function TestimonialsSlider() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <SectionTitle
          eyebrow="PATIENT VOICES"
          title="Stories of care and support"
          description="Share approved patient feedback with permission and appropriate privacy safeguards."
        />
        <CardSlider
          items={testimonials}
          ariaLabel="Patient testimonials"
          renderItem={(item) => (
            <article className="flex h-full min-h-[260px] flex-col rounded-[28px] border border-line bg-mist p-6 text-center sm:p-7">
              <Quote className="mx-auto mb-4 text-royal" size={32} />
              <p className="display-font text-lg leading-relaxed text-heading sm:text-xl">
                “{item.quote}”
              </p>
              <p className="mt-auto pt-5 font-bold text-heading">{item.name}</p>
              <p className="mt-2 text-[15px] text-ink">{item.detail}</p>
            </article>
          )}
        />
      </div>
    </section>
  );
}
