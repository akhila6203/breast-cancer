import { Link } from "react-router-dom";

export function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-[14px] text-ink/75">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            )}
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className="font-medium text-royal hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-heading">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero relative overflow-hidden bg-gradient-to-br from-navy via-royaldeep to-royal px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <span className="decor-circle -right-16 -top-10 h-56 w-56 bg-white/10" />
      <span className="decor-circle bottom-[-4rem] left-[-3rem] h-44 w-44 bg-sky/25" />
      <div className="page-container relative">
        <p className="text-[15px] font-bold tracking-[0.18em] text-sky">{eyebrow}</p>
        <h1 className="display-font mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-8 text-white/90">{description}</p>
      </div>
    </section>
  );
}

export function ContentSection({ title, children }) {
  return (
    <section
      className="mb-10 scroll-mt-28"
      id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    >
      <h2 className="display-font mb-4 text-2xl font-semibold text-heading sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-[17px] leading-8 text-ink">{children}</div>
    </section>
  );
}

export function PageLayout({ eyebrow, title, description, children, breadcrumbItems }) {
  return (
    <>
      {breadcrumbItems?.length > 0 && (
        <div className="border-b border-line bg-mist/90 px-5 py-3 sm:px-8 lg:px-12">
          <div className="page-container">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
      )}
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <main className="section-padding">
        <div className="page-container">{children}</div>
      </main>
    </>
  );
}
