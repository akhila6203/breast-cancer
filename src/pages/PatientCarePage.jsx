
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const programmes = [
  {
    id: "b-ready",
    name: "B-READY",
    subtitle: "Breast Rapid Evaluation, Assessment and Diagnosis",
    description:
      "From presentation to actionable diagnosis as quickly as possible, because each patient's diagnostic pathway is unique.",
    points: [
      "Triple assessment: clinical examination, breast imaging and pathology.",
      "Digital breast tomosynthesis to assess suspicious breast findings.",
      "Stereotactic biopsy for suitable non-palpable lesions.",
      "Histopathology and immunohistochemistry, including ER, PR and HER2 when indicated.",
      "Genomic profiling where clinically appropriate to help guide treatment decisions.",
    ],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Healthcare professionals reviewing diagnostic information",
    path: "/patient-care/b-ready",
    number: "01",
    label: "DIAGNOSIS",
  },
  {
    id: "b-ahead",
    name: "B-AHEAD",
    subtitle: "Molecular Subtype-Tailored Treatment",
    description:
      "The right treatment, planned together and explained before it begins. Specialists coordinate treatment according to the diagnosis and the patient's clinical needs.",
    points: [
      "Consultations with surgical, medical and radiation oncologists.",
      "Multidisciplinary tumour board review and individualised planning.",
      "Breast-conserving and oncoplastic surgery when appropriate.",
      "Specialist radiotherapy options for eligible patients.",
      "Systemic treatment and supportive care based on clinical indication.",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Healthcare specialists discussing a treatment plan",
    path: "/patient-care/b-ahead",
    number: "02",
    label: "TREATMENT",
  },
  {
    id: "b-you",
    name: "B-YOU",
    subtitle: "Recover. Rebuild. Rediscover You.",
    description:
      "Holistic rehabilitation supports physical, emotional and social wellbeing during recovery, throughout follow-up and into long-term survivorship.",
    points: [
      "Lymphoedema care and physiotherapy.",
      "Counselling and support for patients and families.",
      "Nutrition guidance and appropriate exercise support.",
      "Follow-up care and monitoring.",
      "Support for long-term wellbeing and survivorship.",
    ],
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A supportive conversation between a healthcare professional and patient",
    path: "/patient-care/b-you",
    number: "03",
    label: "REHABILITATION",
  },
];

export default function PatientCarePage() {
  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#304b3c]">
      {/* Small breadcrumb only — no large banner */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[#e5e9e3] bg-[#f7f9f6]"
      >
        <div className="page-container px-5 py-4 sm:px-8 lg:px-12">
          <ol className="flex items-center gap-2 text-[15px]">
            <li>
              <Link
                to="/"
                className="font-medium text-[#476b55] transition-colors hover:text-[#f26322]"
              >
                Home
              </Link>
            </li>
            <li className="text-[#aab5aa]" aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-[#263c30]">
              Patient Care
            </li>
          </ol>
        </div>
      </nav>

      {/* Intro — centred heading and description */}
      <section className="px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f26322]">
            {/* <span className="h-px w-8 bg-[#f26322]" /> */}
            BREAST HEALTH INITIATIVE
            {/* <span className="h-px w-8 bg-[#f26322]" /> */}
          </p>

          <h1 className="display-font mt-5 text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
            Care across the entire patient journey
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-[#425b4c] sm:text-lg">
            Our Breast Health Initiative brings together coordinated care
            across diagnosis, treatment and rehabilitation. Each stage is
            designed around the patient's individual diagnosis, clinical
            needs and ongoing wellbeing.
          </p>
        </div>

        <div className="page-container mt-9 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "B-READY", "Diagnosis", "/patient-care/b-ready"],
            ["02", "B-AHEAD", "Treatment", "/patient-care/b-ahead"],
            ["03", "B-YOU", "Rehabilitation", "/patient-care/b-you"],
          ].map(([number, name, label, path]) => (
            <Link
              key={name}
              to={path}
              className="group flex items-center gap-4 rounded-2xl border border-[#e5e9e3] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f26322]/50 hover:shadow-lg sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] font-bold text-[#f26322] transition-colors group-hover:bg-[#f26322] group-hover:text-white">
                {number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold tracking-wide text-[#304b3c]">
                  {name}
                </span>
                <span className="mt-1 block text-[15px] text-[#425b4c]">
                  {label}
                </span>
              </span>
              <ArrowRight
                size={19}
                className="shrink-0 text-[#f26322] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Programme sections — image and content alternate */}
      <section className="page-container space-y-16 px-5 pb-16 sm:space-y-20 sm:px-8 sm:pb-20 lg:px-12">
        {programmes.map((item, index) => (
          <article
            key={item.id}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            {/* Image: right for B-AHEAD; left for B-READY and B-YOU */}
            <div
              className={`relative ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#fff0e7]" />
              <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#e7eee7]" />

              <div className="relative overflow-hidden rounded-[24px] bg-[#edf2ec] shadow-md">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:h-[360px] lg:h-[410px]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-bold tracking-wide text-[#304b3c] shadow-sm">
                  {item.label}
                </span>
              </div>
            </div>

            {/* Text: centred vertically, left-aligned */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <p className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f26322]">
                {item.name}
                <span className="h-px w-12 bg-[#f26322]" />
              </p>

              <h2 className="display-font mt-4 text-2xl font-bold leading-tight text-[#304b3c] sm:text-3xl lg:text-[38px]">
                {item.subtitle}
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-[#425b4c]">
                {item.description}
              </p>

              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[15px] leading-7 text-[#304b3c] sm:text-[16px]"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#f26322]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={item.path}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-md"
                // className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#f26322] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#d95116] hover:shadow-md"
              >
                Know More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}



// import { Link } from "react-router-dom";
// import { HeartPulse } from "lucide-react";
// import { PageLayout } from "../components/PageChrome";

// export default function PatientCarePage() {
//   return (
//     <PageLayout
//       eyebrow="PATIENT CARE"
//       title="Support for you and your family"
//       breadcrumbItems={[
//         { label: "Home", path: "/" },
//         { label: "Patient Care" },
//       ]}
//       description="Practical guidance for preparing for appointments, understanding information and navigating the care journey."
//     >
//       <div className="grid gap-5 md:grid-cols-2">
//         {[
//           [
//             "Before your appointment",
//             "Bring relevant reports, a medication list and your questions. Consider bringing a trusted support person.",
//           ],
//           [
//             "Understanding your diagnosis",
//             "Ask your clinician to explain the diagnosis, stage, pathology and any additional tests you may need.",
//           ],
//           [
//             "During treatment",
//             "Discuss expected benefits, side effects, practical arrangements and when to seek urgent medical attention.",
//           ],
//           [
//             "After treatment",
//             "Ask about follow-up appointments, recommended imaging, recovery and available supportive care.",
//           ],
//           [
//             "Emotional wellbeing",
//             "Anxiety and uncertainty are common. Ask about counselling, specialist nursing support and trusted organisations.",
//           ],
//           [
//             "Nutrition and daily life",
//             "A dietitian or nurse can advise on eating well during treatment, fatigue and returning to everyday activities.",
//           ],
//         ].map(([title, text]) => (
//           <article key={title} className="premium-card p-7">
//             <HeartPulse className="mb-4 text-royal" size={30} />
//             <h2 className="display-font text-xl font-semibold text-heading">{title}</h2>
//             <p className="mt-3 text-[16px] leading-7 text-ink">{text}</p>
//           </article>
//         ))}
//       </div>
//       <div className="mt-10">
//         <Link to="/contact" className="btn-primary">
//           Contact our team
//         </Link>
//       </div>
//     </PageLayout>
//   );
// }

