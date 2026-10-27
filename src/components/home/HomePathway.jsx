
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import WaveDivider from "../WaveDivider";
import { careStages } from "../../data/siteData";

import breastCare1 from "../../assets/home/breastCare1.jpg";

import assessmentImage from "../../assets/home/assessment.jpg";
import diagnosisImage from "../../assets/home/diagnosis.jpg";
import treatmentImage from "../../assets/home/treatment.jpg";

export default function HomePathway() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* BREAST CANCER CARE INTRODUCTION */}
      <section className="relative overflow-hidden bg-white">
        <div className="section-padding">
          <div className="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* LEFT SIDE CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -24,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                center={false}
                eyebrow="BREAST CANCER CARE & SUPPORT"
                title="Expert guidance for your breast health journey"
                description="From understanding breast changes to exploring diagnosis, treatment and recovery, access clear information and compassionate support at every step."
              />

            <p className="max-w-2xl text-[16px] leading-7 text-ink">
  A breast lump or an unexpected change can cause concern.
  Many breast changes are not cancer, but it is important to
  seek professional assessment when something feels different.
  Qualified healthcare professionals can explain appropriate
  examinations, investigations and possible next steps.
</p>

              {/* COMPASSIONATE CARE CARD - LEFT SIDE */}
<motion.div
  initial={{
    opacity: 0,
    y: reduceMotion ? 0 : 15,
  }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.15 }}
  className="mt-4 mb-5 rounded-2xl border border-[#dfe8de] bg-[#f7f9f6] p-5 sm:p-6"
  // className="mb-6 rounded-2xl border border-[#dfe8de] bg-[#f7f9f6] p-5 sm:p-6"
>
  <div className="flex items-start gap-3 sm:gap-4">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
      <Users size={25} />
    </span>

    <div>
      <h3 className="text-lg font-bold text-[#304b3c]">
        Compassionate care and guidance
      </h3>

      <p className="mt-1 text-[15px] leading-6 text-[#304b3c]">
        Understand assessments, discuss care options and prepare for
        conversations with your healthcare team.
      </p>
    </div>
  </div>

  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
    {[
      "Clear information",
      "Supportive care",
      "Informed decisions",
    ].map((item) => (
      <span
        key={item}
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#304b3c]"
      >
        <CheckCircle2
          size={17}
          className="shrink-0 text-[#3D8065]"
        />
        {item}
      </span>
    ))}
  </div>
</motion.div>

              {/* <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"> */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
  to="/appointments"
  className="btn-primary inline-flex items-center justify-center gap-2 !py-2"
>
  Book an Appointment
  <ArrowUpRight size={18} />
</Link>

<Link
  to="/breast-cancer"
  className="btn-secondary inline-flex items-center justify-center !py-2"
>
  Learn About Breast Cancer
</Link>
              </div>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : 24,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-[#dfe8de] bg-[#f7f9f6] shadow-md">
                <img
                 src={breastCare1}
                  alt="Healthcare professional providing medical care"
                  className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[460px] lg:h-[520px]"
                  // className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[380px] lg:h-[440px]"
                  loading="lazy"
                />
              </div>

              {/* HIGHLIGHTED CONTENT BELOW IMAGE */}
              {/* <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 15,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-3 -mt-8 rounded-2xl border border-[#dfe8de] bg-white p-5 shadow-lg sm:mx-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
                    <Users size={25} />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-[#304b3c]">
                      Compassionate care and guidance
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-[#304b3c]">
                      Understand assessments, discuss care options and
                      prepare for conversations with your healthcare team.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                  {[
                    "Clear information",
                    "Supportive care",
                    "Informed decisions",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#304b3c]"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#3D8065]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div> */}
            </motion.div>

          </div>
        </div>
      </section>

      <WaveDivider from="#FFFFFF" to="#F6F9F6" />

      {/* BREAST CARE JOURNEY */}
      <section className="section-padding bg-mist">
        <div className="page-container">
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 20,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionTitle
              eyebrow="YOUR BREAST CARE JOURNEY"
              title="Understanding the stages of breast care"
              description="Learn about the typical steps involved in breast health assessment, diagnosis and ongoing care. Recommended tests and treatments depend on individual clinical needs."
            />
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careStages.map((stage, index) => (
              <motion.article
                key={stage.code}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-premium transition-shadow duration-300 hover:shadow-lg sm:p-7"
              >
                
{/* SERVICE CODE + LOCAL IMAGE */}
<div className="flex items-center justify-between gap-4">
  {/* LEFT SIDE: CODE + LABEL ONE BELOW ANOTHER */}
  <div className="flex flex-col gap-2">
    <p className="text-[15px] font-bold tracking-[0.16em] text-royal">
      {stage.code}
    </p>

    <p className="text-[15px] font-semibold text-sky">
      {stage.label}
    </p>
  </div>

  {/* RIGHT SIDE: LOCAL IMAGE */}
  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[#dfe8de] bg-white shadow-sm sm:h-[72px] sm:w-[72px]">
    <img
      src={
        [
          assessmentImage,
          diagnosisImage,
          treatmentImage,
        ][index % 3]
      }
      alt={`${stage.heading} medical care`}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  </div>
</div>

                {/* <p className="mt-3 text-[15px] font-semibold text-sky">
                  {stage.label}
                </p> */}

                <h3 className="display-font mt-3 text-xl font-semibold leading-snug text-heading sm:text-2xl">
                  {stage.heading}
                </h3>

                <p className="mt-3 text-[16px] leading-7 text-ink">
                  {stage.text}
                </p>

                <ul className="mt-5 space-y-3">
                  {stage.points.slice(0, 4).map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[15px] leading-6 text-ink"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-royal"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* EXPLORE SERVICES BUTTON */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 15,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-9 text-center"
          >
            <Link
              to="/services"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#304b3c] px-7 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#3D5A47] hover:shadow-lg"
            >
              Explore Our Services
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}



