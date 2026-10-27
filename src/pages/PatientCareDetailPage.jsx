
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const details = {
  "b-ready": {
    name: "B-READY",
    label: "DIAGNOSIS",
    title: "Breast Rapid Evaluation, Assessment and Diagnosis",
    intro:
      "From presentation to actionable diagnosis as quickly as possible, because each patient and her diagnostic pathway is unique.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    sections: [
      {
        title: "Triple assessment",
        text: "Clinical examination, breast imaging and pathology are considered together to improve diagnostic confidence, help identify suspicious findings and provide reassurance when findings are benign.",
        bullets: [
          "Clinical examination.",
          "Appropriate breast imaging.",
          "Pathology and tissue sampling when required.",
        ],
      },
      {
        title: "Digital breast tomosynthesis",
        text: "Digital breast tomosynthesis (DBT) produces multiple low-dose images reconstructed into thin slices. Reducing overlapping tissue can help clinicians assess masses, architectural distortions and calcifications, particularly in dense breasts.",
        bullets: [
          "Supports assessment of suspicious breast findings.",
          "May reduce unnecessary recalls and additional imaging in appropriate settings.",
        ],
      },
      {
        title: "Stereotactic breast biopsy",
        text: "This image-guided technique can sample suitable non-palpable lesions, including microcalcifications, small masses and architectural distortions. It may establish a tissue diagnosis without open surgical biopsy when clinically appropriate.",
        bullets: [
          "Targeted tissue sampling guided by imaging.",
          "Pathology findings help inform the next care steps.",
        ],
      },
      {
        title: "Dedicated onco-pathology laboratory",
        text: "Histopathology (HPE) and immunohistochemistry (IHC) help characterise a tumour and identify biomarkers relevant to treatment planning. The programme describes streamlined, standardised laboratory workflows.",
        bullets: [
          "Histopathology reporting.",
          "ER, PR and HER2 testing where indicated.",
          "Other clinically relevant markers according to diagnostic needs.",
        ],
      },
      {
        title: "Rapid genomic profiling",
        text: "The programme brochure describes the Thermo Fisher Genexus Integrated Sequencer. Next-generation sequencing can help identify clinically relevant genomic alterations and may inform targeted therapy selection or clinical trial eligibility where appropriate.",
        bullets: [
          "Automated genomic profiling workflow.",
          "Results interpreted by the treating specialist team.",
        ],
      },
    ],
  },

  "b-ahead": {
    name: "B-AHEAD",
    label: "TREATMENT",
    title: "Molecular Subtype-Tailored Treatment",
    intro:
      "The right treatment, planned together and explained before it begins. Treatment decisions are individualised according to the diagnosis, tumour characteristics and clinical needs.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    sections: [
      {
        title: "Consultations with all three oncology specialties",
        text: "The programme describes consultations with surgical, medical and radiation oncologists before treatment begins, helping patients understand the proposed approach and the roles of each specialist.",
        bullets: [
          "Discuss diagnosis and treatment goals.",
          "Understand treatment sequencing and available options.",
          "Ask about benefits, risks and expected recovery.",
        ],
      },
      {
        title: "Multidisciplinary tumour board",
        text: "Relevant specialists review the patient's diagnosis and available clinical information together to agree on an individualised treatment plan.",
        bullets: [
          "Coordinated specialist input.",
          "Planning based on tumour characteristics and patient needs.",
        ],
      },
      {
        title: "Breast-conserving and oncoplastic surgery",
        text: "When oncologically appropriate, the team aims to preserve the breast. Oncoplastic techniques may help optimise cosmetic outcomes while meeting surgical treatment objectives.",
        bullets: [
          "Surgical planning tailored to the individual case.",
          "Discussion of suitable surgical options and recovery.",
        ],
      },
      {
        title: "Breast brachytherapy",
        text: "For selected eligible patients, accelerated partial breast irradiation (APBI) using brachytherapy may reduce the volume of breast tissue receiving radiation and shorten the treatment course. The brochure references the Elekta Flexitron system.",
        bullets: [
          "Suitability assessed by the radiation oncology team.",
          "Treatment depends on individual clinical indications.",
        ],
      },
      {
        title: "Heart-sparing radiotherapy",
        text: "Deep inspiration breath hold (DIBH) helps move the heart away from the treatment field during breast radiation. The programme brochure describes the Elekta Active Breathing Coordinator (ABC).",
        bullets: [
          "Breathing coordination during selected treatments.",
          "Planning aims to limit exposure of nearby healthy tissues.",
        ],
      },
      {
        title: "Image-guided and adaptive radiotherapy",
        text: "Image-guided and adaptive workflows allow the team to review anatomical changes and adjust a treatment plan when appropriate. The brochure references Accuray Radixact X9 and Elekta Versa HD, as well as Accuray Synchrony motion tracking on Radixact X9.",
        bullets: [
          "Review of anatomical changes during the treatment course.",
          "Motion tracking to help align treatment delivery with the target.",
        ],
      },
      {
        title: "Systemic treatment and scalp cooling",
        text: "Systemic treatment is selected according to cancer subtype and clinical indication. Scalp cooling using the Paxman system may be available for eligible patients who wish to reduce treatment-related hair loss.",
        bullets: [
          "Chemotherapy, endocrine therapy, targeted therapy or immunotherapy when indicated.",
          "Oncology day-care sessions under specialist supervision.",
          "Comfortable treatment facilities as described in the programme brochure.",
        ],
      },
      {
        title: "Supportive care during treatment",
        text: "Supportive services are integrated into the treatment pathway to help patients manage treatment-related and everyday concerns.",
        bullets: [
          "Nutrition guidance tailored to treatment needs and appetite.",
          "Dedicated pain clinic support.",
          "Psychological support for patients and families.",
          "Preventive anti-nausea medication according to regimen risk.",
        ],
      },
    ],
  },

  "b-you": {
    name: "B-YOU",
    label: "REHABILITATION",
    title: "Recover. Rebuild. Rediscover You.",
    intro:
      "Holistic rehabilitation supports physical, emotional and social wellbeing through recovery, ongoing care and long-term survivorship.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=85",
    sections: [
      {
        title: "Lymphoedema care and physiotherapy",
        text: "Rehabilitation support can help patients manage physical changes and work towards mobility and daily activities following treatment.",
        bullets: [
          "Assessment and guidance for lymphoedema-related concerns.",
          "Physiotherapy support according to individual needs.",
          "Advice on suitable movement and rehabilitation goals.",
        ],
      },
      {
        title: "Counselling and support groups",
        text: "Cancer diagnosis and treatment can affect emotional wellbeing and family life. Counselling and support groups provide opportunities to discuss concerns and access emotional support.",
        bullets: [
          "Psychological support for patients and families.",
          "Support with emotional adjustment during recovery.",
          "Guidance on available support services.",
        ],
      },
      {
        title: "Nutrition and exercise support",
        text: "Nutrition guidance can be adapted to treatment needs, appetite changes and recovery. Physical activity recommendations should reflect each patient's health, treatment and recovery stage.",
        bullets: [
          "Nutrition guidance for changing needs during treatment.",
          "Support for gradually returning to appropriate physical activity.",
          "Advice tailored to recovery and everyday life.",
        ],
      },
      {
        title: "Follow-up and long-term survivorship",
        text: "After active treatment, follow-up helps the care team monitor recovery, discuss ongoing concerns and plan appropriate surveillance and supportive care.",
        bullets: [
          "Follow-up appointments and monitoring as advised by the treating team.",
          "Discussion of persistent or new symptoms.",
          "Support for long-term wellbeing and survivorship.",
        ],
      },
    ],
  },
};

export default function PatientCareDetailPage() {
  const { programme } = useParams();
  const item = details[programme?.toLowerCase()];

  if (!item) {
    return (
      <main className="min-h-[50vh] bg-[#fffdf9] px-5 py-16 text-center">
        <h1 className="display-font text-3xl font-bold text-[#304b3c]">
          Programme not found
        </h1>
        <Link
          to="/patient-care"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 font-semibold text-white transition hover:bg-[#3D5A47]"
        //   className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f26322] px-6 py-3 font-semibold text-white transition hover:bg-[#d95116]"
        >
          <ArrowLeft size={18} />
          Back to Patient Care
        </Link>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#304b3c]">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[#e5e9e3] bg-[#f7f9f6]"
      >
        <div className="page-container flex flex-wrap items-center gap-2 px-5 py-4 text-[15px] sm:px-8 lg:px-12">
          <Link
            to="/"
            className="font-medium text-[#476b55] transition-colors hover:text-[#f26322]"
          >
            Home
          </Link>
          <span className="text-[#aab5aa]">/</span>
          <Link
            to="/patient-care"
            className="font-medium text-[#476b55] transition-colors hover:text-[#f26322]"
          >
            Patient Care
          </Link>
          <span className="text-[#aab5aa]">/</span>
          <span className="font-semibold text-[#263c30]">{item.name}</span>
        </div>
      </nav>

      {/* Detail page introduction */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="page-container grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <div>
            <Link
              to="/patient-care"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#476b55] transition-colors hover:text-[#f26322]"
            >
              <ArrowLeft size={17} />
              All Patient Care Programmes
            </Link>

            <p className="mt-7 flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f26322]">
              {item.name}
              <span className="h-px w-12 bg-[#f26322]" />
            </p>

            <h1 className="display-font mt-4 text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>

            <p className="mt-5 text-[16px] leading-8 text-[#425b4c]">
              {item.intro}
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#fff0e7] px-4 py-2.5 text-[15px] font-semibold text-[#a94419]">
              <CheckCircle2 size={19} className="text-[#f26322]" />
              {item.label}
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#fff0e7]" />
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#e7eee7]" />
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="relative h-[280px] w-full rounded-[24px] object-cover shadow-lg transition-transform duration-700 group-hover:scale-[1.02] sm:h-[380px] lg:h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* Detailed information */}
      <section className="page-container space-y-5 px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#f26322]">
            PROGRAMME DETAILS
          </p>
          <h2 className="display-font mt-3 text-2xl font-bold text-[#304b3c] sm:text-3xl">
            Understand your care pathway
          </h2>
          <p className="mt-3 text-[16px] leading-8 text-[#425b4c]">
            Explore the services and approaches described in our breast health
            programme. Your appropriate care options will be discussed with
            your treating specialist.
          </p>
        </div>

        {item.sections.map((section, index) => (
          <article
            key={section.title}
            className="group rounded-2xl border border-[#e5e9e3] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#f26322]/40 hover:shadow-md sm:p-7"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-sm font-bold text-[#e65b1c] transition-colors duration-300 group-hover:bg-[#304b3c] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <h2 className="display-font text-xl font-bold leading-snug text-[#304b3c] sm:text-2xl">
                  {section.title}
                </h2>

                <p className="mt-3 text-[16px] leading-8 text-[#425b4c]">
                  {section.text}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[15px] leading-7 text-[#304b3c] sm:text-[16px]"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#f26322]"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        {/* Contact CTA */}
        <div className="mt-10 rounded-[24px] bg-[#304b3c] p-6 text-white sm:p-9">
          <p className="text-sm font-bold tracking-[0.18em] text-[#ff9868]">
            WE ARE HERE TO HELP
          </p>
          <h2 className="display-font mt-3 text-2xl text-[#ecf0ee]  font-bold sm:text-3xl">
            Discuss your care with our team
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-8 text-white">
            Your care plan depends on your individual diagnosis and clinical
            needs. Contact the team to discuss your questions and appropriate
            next steps.
          </p>

          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#f26322] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d95116]"
          >
            Contact Our Team
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
