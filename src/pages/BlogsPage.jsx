import { ArrowRight } from "lucide-react";
import { PageLayout } from "../components/PageChrome";
import { blogs, articles, references } from "../data/siteData";

export default function BlogsPage() {
  return (
    <PageLayout
      eyebrow="HEALTH LIBRARY"
      title="Reliable information for informed conversations"
      breadcrumbItems={[
        { label: "Home", path: "/" },
        { label: "Blogs" },
      ]}
      description="Educational articles about breast health, diagnosis, treatments and patient support. They do not replace personal medical advice."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.title}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm"
          >
            <img src={blog.image} alt="" loading="lazy" className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="text-[15px] font-bold tracking-widest text-royal">{blog.category}</p>
              <h2 className="display-font mt-3 text-xl font-semibold text-heading">{blog.title}</h2>
              <p className="mt-3 text-[16px] leading-7 text-ink">{blog.description}</p>
              <a
                href={`#${blog.id}`}
                className="mt-5 inline-flex items-center gap-2 text-[16px] font-semibold text-royal"
              >
                Read more <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 space-y-8">
        {blogs.map((blog) => {
          const article = articles[blog.id];
          return (
            <article
              key={blog.id}
              id={blog.id}
              className="scroll-mt-28 rounded-3xl border border-line bg-white p-6 sm:p-10"
            >
              <p className="text-[15px] font-bold tracking-widest text-royal">{blog.category}</p>
              <h2 className="display-font mt-3 text-2xl font-semibold text-heading sm:text-3xl">
                {blog.title}
              </h2>
              <p className="mt-4 text-[17px] leading-8 text-ink">{article.intro}</p>
              <div className="mt-5 space-y-4 text-[17px] leading-8 text-ink">
                {article.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl bg-mist p-7">
        <h2 className="display-font text-2xl font-semibold text-heading">Sources</h2>
        <ul className="mt-4 space-y-2">
          {references.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-[16px] text-royal hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}

