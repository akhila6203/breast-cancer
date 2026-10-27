import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "../components/PageChrome";
import { references } from "../data/siteData";

const cancerSections = [
  {
    title: "About breast cancer",
    body: (
      <>
        <p>
          The breast contains lobules, ducts and connective tissue. Lobules
          produce milk, ducts carry milk towards the nipple, and connective
          tissue provides structural support.
        </p>
        <p>
          According to the World Health Organization, breast cancer develops
          when abnormal cells grow out of control, usually starting in the
          milk ducts or milk-producing lobules. The earliest form (in situ)
          is contained and is not life-threatening in itself. Invasive
          cancers can spread to nearby lymph nodes or other organs.
        </p>
        <p>
          Although it is much more common in women, men can also develop
          breast cancer. Types include ductal carcinoma in situ (DCIS),
          invasive breast carcinoma and less common conditions such as Paget
          disease, phyllodes tumours and inflammatory breast cancer.
        </p>
      </>
    ),
  },
  {
    title: "Signs and symptoms",
    body: (
      <>
        <p>
          A new lump in the breast or underarm is a common sign, but many
          breast changes are not cancer. WHO notes that most breast lumps are
          not cancer, yet an abnormal lump should still be assessed, even if
          it does not hurt.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>A lump or swelling in the breast, chest or armpit.</li>
          <li>A change in size, shape or appearance of the breast.</li>
          <li>Skin dimpling, redness, pitting or thickening (sometimes like orange peel).</li>
          <li>A change in the nipple, including turning inwards, or a rash.</li>
          <li>Unusual nipple discharge, especially if it contains blood.</li>
          <li>Persistent pain with other changes, or another unexplained breast change.</li>
        </ul>
        <p>
          The NHS notes that breast pain by itself is not usually a symptom
          of breast cancer. Having symptoms does not mean you have cancer,
          but it is important to get checked.
        </p>
      </>
    ),
  },
  {
    title: "Causes and risk factors",
    body: (
      <>
        <p>
          There is no single known cause. Risk can be influenced by age,
          inherited genetic variants (including BRCA1, BRCA2 and PALB2),
          family history, breast density, reproductive and hormonal factors,
          alcohol use, body weight and physical activity.
        </p>
        <p>
          Having one or more risk factors does not mean a person will
          develop breast cancer, and people without recognised risk factors
          can also develop it.
        </p>
      </>
    ),
  },
  {
    title: "Diagnosis and imaging",
    body: (
      <>
        <p>
          Cancer Research UK describes triple assessment as a clinical
          examination, imaging (mammogram and/or ultrasound) and, when
          indicated, a biopsy. MRI, lymph node ultrasound and other scans
          are used in selected situations.
        </p>
        <p>
          A biopsy obtains a tissue sample for laboratory examination.
          Pathology findings help establish the diagnosis and may guide
          additional testing and treatment planning. Not every lump requires
          every imaging test.
        </p>
      </>
    ),
  },
  {
    title: "Stages of breast cancer",
    body: (
      <>
        <p>
          Staging commonly uses the TNM framework: tumour (T), regional lymph
          nodes (N), and distant metastasis (M). Clinicians also consider
          tumour biology, grade and other findings.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Stage 0:</strong> Non-invasive disease such as DCIS.
          </li>
          <li>
            <strong>Stage I:</strong> Early invasive cancer with limited
            disease.
          </li>
          <li>
            <strong>Stage II:</strong> Larger tumours and/or limited regional
            lymph node involvement.
          </li>
          <li>
            <strong>Stage III:</strong> More extensive local or regional
            disease.
          </li>
          <li>
            <strong>Stage IV:</strong> Cancer that has spread to distant
            organs or tissues (secondary breast cancer).
          </li>
        </ul>
        <p>
          These are simplified descriptions. Exact staging requires clinical
          assessment and appropriate tests.
        </p>
      </>
    ),
  },
  {
    title: "Treatment options",
    body: (
      <>
        <p>
          NHS guidance explains that treatment depends on the size and type
          of cancer, whether it has spread, and your general health. A
          multidisciplinary team should explain benefits, side effects and
          how treatment may affect you.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Surgery:</strong> Breast-conserving surgery, mastectomy
            and, where appropriate, lymph node procedures or reconstruction.
          </li>
          <li>
            <strong>Radiotherapy:</strong> Uses targeted radiation to reduce
            the risk of local recurrence or to help control symptoms.
          </li>
          <li>
            <strong>Chemotherapy:</strong> Medicines that kill or inhibit
            cancer cells; may be given before or after surgery or for
            advanced disease.
          </li>
          <li>
            <strong>Hormone therapy:</strong> Used for hormone receptor-positive
            cancers to block hormone effects or reduce hormone production.
          </li>
          <li>
            <strong>Targeted therapy and immunotherapy:</strong> Options for
            selected patients and tumour subtypes, not a treatment for every
            breast cancer.
          </li>
        </ul>
        <p>
          Treatment decisions must be made with a qualified oncology team.
          This website does not recommend a specific treatment for any
          individual.
        </p>
      </>
    ),
  },
  {
    title: "Screening and prevention",
    body: (
      <>
        <p>
          No measure can prevent every breast cancer. Appropriate screening
          can detect some cancers before symptoms appear. The recommended
          starting age and screening interval vary by country, age and
          individual risk.
        </p>
        <p>
          Become familiar with your usual breast appearance and feel, and
          report new changes promptly. Routine breast self-examination has
          not been shown to replace evidence-based screening.
        </p>
        <p>
          Regular physical activity, a healthy body weight, limiting alcohol
          and discussing personal or family history with a healthcare
          professional may help with risk reduction and informed screening
          decisions.
        </p>
      </>
    ),
  },
  {
    title: "Outlook and follow-up care",
    body: (
      <>
        <p>
          Outcomes vary according to cancer type, stage, tumour biology,
          treatment and individual circumstances. Early assessment of
          suspicious changes and completing recommended treatment can
          improve outcomes. We do not quote cure rates or guaranteed
          results.
        </p>
        <p>
          Follow-up plans may include clinical reviews, recommended imaging,
          management of side effects and support for physical and emotional
          wellbeing.
        </p>
      </>
    ),
  },
];

export default function BreastCancerPage() {
  const [expanded, setExpanded] = useState(0);

  return (
    <PageLayout
      eyebrow="BREAST HEALTH EDUCATION"
      title="Understanding breast cancer"
      breadcrumbItems={[
        { label: "Home", path: "/" },
        { label: "About Breast Cancer" },
      ]}
      description="Learn about breast anatomy, signs and symptoms, risk factors, diagnosis, staging, treatment and screening. This is general education, not personal medical advice."
    >
      <div className="mb-10 rounded-3xl border border-line bg-mist p-6 sm:p-8">
        <p className="text-[17px] leading-8 text-ink">
          Breast cancer information can help you prepare questions and seek
          timely medical advice. This guide does not diagnose symptoms or
          replace advice from your healthcare team.
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-line p-5 lg:sticky lg:top-28">
          <h2 className="mb-4 font-semibold text-heading">On this page</h2>
          <nav className="space-y-2">
            {cancerSections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => {
                  setExpanded(index);
                  document
                    .getElementById(`cancer-section-${index}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`block w-full rounded-xl px-3 py-2 text-left text-[15px] ${
                  expanded === index
                    ? "bg-ice font-semibold text-royal"
                    : "text-ink hover:bg-mist"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        <div className="space-y-5">
          {cancerSections.map((section, index) => (
            <motion.section
              id={`cancer-section-${index}`}
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white"
            >
              <button
                onClick={() => setExpanded(expanded === index ? -1 : index)}
                aria-expanded={expanded === index}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              >
                <span className="display-font text-xl font-semibold text-heading">
                  {section.title}
                </span>
                <span className="text-2xl text-royal">
                  {expanded === index ? "−" : "+"}
                </span>
              </button>
              {expanded === index && (
                <div className="space-y-4 border-t border-line p-5 text-[17px] leading-8 text-ink sm:p-6">
                  {section.body}
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-line bg-white p-7 sm:p-10">
        <h2 className="display-font text-2xl font-semibold text-heading">Trusted references</h2>
        <ul className="mt-4 space-y-3">
          {references.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-[16px] font-semibold text-royal hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-3xl bg-navy p-7 text-white sm:p-10">
        <h2 className="display-font text-2xl font-semibold text-white">
          Have questions about breast health?
        </h2>
        <p className="mt-3 text-[17px] leading-8 text-white/85">
          Arrange a consultation to discuss symptoms, screening eligibility
          or questions about diagnosis and treatment.
        </p>
        <Link to="/appointments" className="btn-light mt-5">
          Request an appointment
        </Link>
      </div>
    </PageLayout>
  );
}

