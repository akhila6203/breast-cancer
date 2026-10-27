import SectionTitle from "./SectionTitle";
import CardSlider from "./CardSlider";
import { videos } from "../data/siteData";

export default function VideoSlider() {
  return (
    <section className="video-section section-padding bg-gradient-to-br from-navy via-royaldeep to-royal">
      <div className="page-container">
        <SectionTitle
          light
          eyebrow="LEARN & UNDERSTAND"
          title="Education can make every question count."
          description="Watch educational films about breast awareness, clinic visits and treatment conversations."
        />
        <CardSlider
          items={videos}
          ariaLabel="Educational videos"
          dark
          renderItem={(item) => (
            <article className="overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/10 shadow-premium">
              <div className="aspect-video overflow-hidden bg-navy">
                <iframe
  title={item.title}
  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
  className="h-full w-full"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
              </div>
              <div className="p-4">
                <h3 className="display-font text-lg font-semibold" style={{ color: "#ffffff" }}>
                  {item.title}
                </h3>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}
