import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Microscope,
  ScanLine,
  Users,
  HeartPulse,
  ShieldPlus,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import WaveDivider from "./WaveDivider";
import { careStages, diagnosticSteps, mdtRoles } from "../data/siteData";

function StageCards() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-mist">
      <div className="page-container">
        <SectionTitle
          eyebrow="A CONNECTED CARE PATHWAY"
          title="Three stages of specialist breast care"
          description="These programme labels describe a typical journey from assessment to recovery. The tests and treatments offered depend on clinical need and what is available at the hospital."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {careStages.map((stage, index) => (
            <motion.article
              key={stage.code}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : index * 0.1 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-line bg-white p-7 shadow-premium"
            >
              {index < careStages.length - 1 && (
                <span className="connector absolute right-[-14px] top-12 z-10 hidden h-1 w-7 rounded-full bg-royal lg:block" />
              )}
              <p className="text-[15px] font-bold tracking-[0.16em] text-royal">
                {stage.code}
              </p>
              <p className="mt-1 text-[15px] font-semibold text-sky">{stage.label}</p>
              <h3 className="display-font mt-4 text-2xl font-semibold text-heading">
                {stage.heading}
              </h3>
              <p className="mt-3 text-[16px] leading-7 text-ink">{stage.text}</p>
              <ul className="mt-5 space-y-2.5">
                {stage.points.map((point) => (
                  <li key={point} className="flex gap-2 text-[15px] leading-6 text-ink">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-royal" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagnosticJourney() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <SectionTitle
          eyebrow="DIAGNOSTIC ASSESSMENT"
          title="Triple assessment, explained simply"
          description="Triple assessment usually means a clinical examination, imaging, and tissue sampling when it is indicated. The exact tests depend on your symptoms, age and clinical findings."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {diagnosticSteps.map((step, index) => (
            <article
              key={step.title}
              className="organic-panel relative border border-line bg-mist p-5"
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-royal text-[15px] font-bold text-white">
                {index + 1}
              </span>
              <h3 className="display-font text-xl font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-ink">{step.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[15px] text-ink">
          You may not need every step. A clinician will explain which tests are appropriate and why.
        </p>
      </div>
    </section>
  );
}

function TechnologySection() {
  const items = [
    {
      icon: ScanLine,
      title: "Breast imaging",
      text: "Mammography and ultrasound help look at a lump or screening finding. MRI is used in selected situations rather than as a routine first test.",
    },
    {
      icon: Microscope,
      title: "Image-guided biopsy",
      text: "When a sample is needed, imaging can guide the needle so the most relevant area is examined in the laboratory.",
    },
    {
      icon: ShieldPlus,
      title: "Pathology and immunohistochemistry",
      text: "If cancer is present, receptor tests (such as hormone receptors and HER2) help the team discuss medicines that may be suitable.",
    },
    {
      icon: Sparkles,
      title: "Timely communication",
      text: "Results should be explained in a follow-up discussion. Turnaround times vary; we do not quote guaranteed hours or accuracy percentages.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="pointer-events-none absolute inset-x-0 top-12 h-40 skew-layer bg-ice/80" />
      <div className="section-padding relative">
        <div className="page-container">
          <SectionTitle
            eyebrow="DIAGNOSTIC TECHNOLOGY"
            title="Looking closely, then explaining clearly"
            description="Technology supports diagnosis; it does not replace a conversation with your specialist. Equipment names and guaranteed timeframes are only listed when the hospital confirms them."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {items.map(({ icon: Icon, title, text }) => (
              <article key={title} className="premium-card flex gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ice text-royal">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="display-font text-xl font-semibold text-heading">{title}</h3>
                  <p className="mt-2 text-[16px] leading-7 text-ink">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MultidisciplinarySection() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle
            center={false}
            eyebrow="MULTIDISCIPLINARY BREAST CARE"
            title="Decisions made together, explained to you"
            description="A multidisciplinary team brings several specialties into one discussion. The people involved depend on your diagnosis and the services available at this centre."
          />
          <p className="text-[17px] leading-8 text-ink">
            Coordinated care may include surgeons, imaging specialists, pathologists, medical and radiation oncologists, specialist nurses, and rehabilitation or support professionals. The aim is a plan that fits the cancer type, your health and your preferences.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {mdtRoles.map((role) => (
            <div
              key={role}
              className="flex min-h-[110px] items-center justify-center rounded-[1.5rem] border border-line bg-mist p-4 text-center text-[15px] font-semibold text-heading"
            >
              {role}
            </div>
          ))}
          <div className="flex min-h-[110px] items-center justify-center rounded-[1.5rem] bg-royal p-4 text-center text-[15px] font-semibold text-white">
            Shared treatment planning
          </div>
        </div>
      </div>
    </section>
  );
}

function SurgicalSection() {
  return (
    <section className="section-padding bg-mist">
      <div className="page-container grid items-center gap-10 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1100&q=80"
          alt="Surgical consultation in a clinical setting"
          className="h-[340px] w-full object-cover sm:h-[460px] curve-image"
          loading="lazy"
        />
        <div>
          <SectionTitle
            center={false}
            eyebrow="SURGICAL CARE"
            title="The operation that fits the diagnosis"
            description="NHS guidance notes that surgery is often a main treatment. The appropriate procedure depends on the size and type of cancer, whether it has spread, and your preferences."
          />
          <ul className="space-y-4 text-[16px] leading-7 text-ink">
            <li>
              <strong className="text-heading">Breast-conserving surgery</strong> removes the cancer and a margin of nearby tissue, keeping as much of the breast as is safe.
            </li>
            <li>
              <strong className="text-heading">Mastectomy</strong> removes the whole breast when that is the safer or preferred option. Reconstruction may be discussed at the same time or later.
            </li>
            <li>
              <strong className="text-heading">Oncoplastic approaches</strong> combine cancer surgery with plastic-surgery techniques to support shape and symmetry where available.
            </li>
          </ul>
          <Link to="/services" className="btn-primary mt-7">
            View services <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RadiotherapySection() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle
            center={false}
            eyebrow="RADIOTHERAPY"
            title="Using carefully planned radiation when it helps"
            description="Radiotherapy uses high-energy radiation to treat remaining cancer cells in the breast or nearby tissues, or to help control symptoms. Not every patient needs every technique."
          />
          <p className="text-[17px] leading-8 text-ink">
            Whole-breast radiotherapy is commonly considered after breast-conserving surgery. Partial-breast radiotherapy, deep inspiration breath-hold (a breathing technique that can reduce dose to the heart in selected patients) and image-guided radiotherapy are used in some centres for people who meet clinical criteria. Availability of a named technique should be confirmed with the hospital team.
          </p>
        </div>
        <div className="organic-panel bg-gradient-to-br from-navy to-royal p-8 text-white">
          <HeartPulse className="mb-4 text-sky" size={32} />
          <h3 className="display-font text-2xl font-semibold text-white">In plain language</h3>
          <p className="mt-4 text-[16px] leading-8 text-white/90">
            Planning maps the area to treat and nearby organs to protect. Treatment is usually given as short daily sessions. Tiredness and skin redness are common effects; your team will explain how to look after the skin and when to ask for help.
          </p>
        </div>
      </div>
    </section>
  );
}

function SystemicSection() {
  return (
    <section className="section-padding bg-mist">
      <div className="page-container">
        <SectionTitle
          eyebrow="SYSTEMIC TREATMENT AND SUPPORTIVE CARE"
          title="Medicines that travel through the body, plus support around them"
          description="Chemotherapy, hormone therapy, targeted therapy and, for some people, immunotherapy may be recommended. These are general explanations, not a list of treatments confirmed at this hospital."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Chemotherapy", "Medicines that kill or slow rapidly dividing cells. They may be given before or after surgery, or for advanced disease."],
            ["Hormone therapy", "Used when cancer cells are sensitive to oestrogen or progesterone, to block hormone effects or reduce hormone levels."],
            ["Targeted therapy", "Medicines aimed at specific cancer features, such as HER2, when tests show they may help."],
            ["Supportive care", "Side-effect management, nutrition, psychological support and family education sit alongside cancer treatment."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[1.6rem] border border-line bg-white p-6">
              <h3 className="display-font text-xl font-semibold text-heading">{title}</h3>
              <p className="mt-3 text-[16px] leading-7 text-ink">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[15px] leading-7 text-ink">
          Scalp cooling, if offered, is only suitable for some chemotherapy regimens. Ask the hospital whether it is available and appropriate for you.
        </p>
      </div>
    </section>
  );
}

function RecoverySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <span className="decor-circle -left-20 top-10 h-56 w-56 bg-ice" />
      <span className="decor-circle -right-16 bottom-8 h-48 w-48 bg-mist" />
      <div className="section-padding relative">
        <div className="page-container grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              center={false}
              eyebrow="RECOVERY AND SURVIVORSHIP"
              title="Care continues after treatment"
              description="Recovery includes the body, everyday routines and emotional wellbeing. Follow-up plans are individual."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Physical recovery and movement",
                "Emotional wellbeing",
                "Nutrition after treatment",
                "Returning to daily activities",
                "Follow-up appointments",
                "Long-term family support",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-mist px-4 py-3 text-[16px] font-semibold text-heading"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/patient-care" className="btn-primary mt-7">
              Explore patient care
            </Link>
          </motion.div>
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1100&q=80"
            alt="Supportive conversation after treatment"
            className="h-[340px] w-full object-cover sm:h-[460px] curve-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default function CareProgramme() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <span className="decor-circle -right-24 top-8 h-64 w-64 bg-ice" />
        <div className="section-padding relative">
          <div className="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionTitle
                center={false}
                eyebrow="BREAST HEALTH PROGRAMME"
                title="Compassionate Breast Care. Clearer Answers. Personalised Support."
                description="The programme is designed to guide people from assessment and diagnosis through treatment and recovery, with explanations at every stage."
              />
              <p className="max-w-2xl text-[17px] leading-8 text-ink">
                Finding a breast change can feel unsettling. Most lumps are not cancer, yet timely assessment still matters. We combine clinical review, appropriate tests and coordinated specialist advice so you can take the next step with a clearer picture of your options.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/appointments" className="btn-primary">
                  Book an Appointment
                </Link>
                <Link to="/breast-cancer" className="btn-secondary">
                  About breast cancer
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                alt="Specialist discussing breast care with a patient"
                className="h-[320px] w-full object-cover sm:h-[430px] curve-image"
                loading="lazy"
              />
              <div className="absolute -bottom-5 left-4 max-w-[260px] rounded-2xl bg-white p-5 shadow-premium">
                <Users className="mb-2 text-royal" size={28} />
                <p className="font-semibold text-heading">Guided, not rushed</p>
                <p className="mt-1 text-[15px] leading-6 text-ink">
                  Assessment, treatment and recovery are connected — and explained in British English, without jargon where we can avoid it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider from="#FFFFFF" to="#F5F8FF" />
      <StageCards />
      <WaveDivider from="#F5F8FF" to="#FFFFFF" />
      <DiagnosticJourney />
      <TechnologySection />
      <MultidisciplinarySection />
      <SurgicalSection />
      <RadiotherapySection />
      <SystemicSection />
      <RecoverySection />
    </>
  );
}
