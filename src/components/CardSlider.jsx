import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

function usePerView() {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCount(3);
      else if (width >= 768) setCount(2);
      else setCount(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function CardSlider({
  items,
  renderItem,
  ariaLabel = "Carousel",
  dark = false,
}) {
  const visibleCount = usePerView();
  const [index, setIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const maxIndex = Math.max(0, items.length - visibleCount);
  const gap = 20;
  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - gap * (visibleCount - 1)) / visibleCount
      : 0;

  useLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return undefined;

    const measure = () => setViewportWidth(node.clientWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount]);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const previous = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  const buttonClass = dark
    ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-navy text-white hover:bg-white/20"
    : "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy shadow-sm hover:bg-ice";

  return (
    <div aria-label={ariaLabel}>
      <div className="relative px-12 sm:px-14">
        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap }}
            animate={{ x: cardWidth ? -index * (cardWidth + gap) : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
          >
            {items.map((item, itemIndex) => (
              <div
                key={item.id || item.title || item.name || item.youtubeId || itemIndex}
                className="shrink-0"
                style={{ width: cardWidth || "100%" }}
              >
                {renderItem(item, itemIndex)}
              </div>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 ${buttonClass}`}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 ${buttonClass}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label={`${ariaLabel} pages`}>
        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            role="tab"
            aria-selected={dotIndex === index}
            aria-label={`Go to slide ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 rounded-full transition ${
              dotIndex === index
                ? dark
                  ? "w-8 bg-white"
                  : "w-8 bg-royal"
                : dark
                  ? "w-2.5 bg-white/40"
                  : "w-2.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
