import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { blogs } from "../../data/siteData";

export default function HomeBlogs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-mist">
      <div className="page-container">
        <SectionTitle
          eyebrow="THE LATEST"
          title="Knowledge for your care journey"
          description="Accessible articles about breast health, diagnosis, treatment and patient support."
        />
        <div className="cards-row">
          {blogs.slice(0, 3).map((blog, index) => (
            <motion.article
              key={blog.id || blog.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <img
                src={blog.image}
                alt=""
                loading="lazy"
                className="h-48 w-full object-cover sm:h-52"
              />
              <div className="p-6">
                <p className="text-[15px] font-bold tracking-[0.16em] text-royal">{blog.category}</p>
                <h3 className="display-font mt-3 text-xl font-semibold text-heading">{blog.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-ink">{blog.description}</p>
                <Link
                  to={blog.path}
                  className="mt-5 inline-flex items-center gap-2 text-[16px] font-bold text-royal"
                >
                  Read article <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/blogs" className="text-[16px] font-bold text-royal">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
