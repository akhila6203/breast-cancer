
import { motion, useReducedMotion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Flag,
  Eye,
  Compass,
  Stethoscope,
  ClipboardCheck,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// import { PageLayout } from "../components/PageChrome";
import SectionTitle from "../components/SectionTitle";
import WaveDivider from "../components/WaveDivider";
import TestimonialsSlider from "../components/TestimonialsSlider";
import VideoSlider from "../components/VideoSlider";
import PhotoGallery from "../components/PhotoGallery";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Compassionate support",
    text: "We value listening, respectful conversations and support for patients and their families.",
  },
  {
    icon: ShieldCheck,
    title: "Clear information",
    text: "Understanding tests and treatment choices can help patients take part in informed discussions with their care team.",
  },
  {
    icon: Sparkles,
    title: "Personalised guidance",
    text: "Breast cancer care depends on the individual diagnosis, clinical findings and the recommendations of qualified specialists.",
  },
];

const approach = [
  {
    icon: Flag,
    title: "Our Mission",
    text: "To make breast health information easier to understand and encourage timely professional assessment, informed conversations and respectful support throughout the care journey.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A care experience where every patient feels listened to, understands the next steps and has access to clear information and appropriate professional guidance.",
  },
];

const steps = [
  {
    icon: MessagesSquare,
    number: "01",
    title: "Listen and understand",
    text: "Understand the patient's concerns, questions and relevant medical history with the healthcare team.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Assessment and diagnosis",
    text: "Clinical assessment and appropriate investigations help specialists understand changes or symptoms.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Discuss the options",
    text: "When results are available, the care team explains the diagnosis and discusses suitable next steps and treatment options.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Ongoing care and support",
    text: "Follow-up, recovery guidance and supportive care can help patients navigate the next stages of their journey.",
  },
];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const reveal = (direction = 0) => ({
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
      x: reduceMotion ? 0 : direction,
    },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55 },
  });

      
return (
  <>
    <main className="min-h-screen overflow-hidden bg-[#fffdf9] text-[#304b3c]">
      {/* BREADCRUMB - SAME STRUCTURE AS CONTACT PAGE */}
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

            <li className="text-[#aab5aa]" aria-hidden="true">
              /
            </li>

            <li
              aria-current="page"
              className="font-semibold text-[#263c30]"
            >
              About Us
            </li>
          </ol>
        </div>
      </nav>

<div className="page-container mx-auto w-full px-5 sm:px-8 lg:px-12">
      {/* ABOUT PAGE HEADING */}
      <section className="mx-auto w-full max-w-7xl px-5 pt-10 text-center sm:px-8 sm:pt-12 lg:px-12">
        <p className="text-sm font-bold tracking-[0.18em] text-[#f26322]">
          ABOUT US
        </p>

        <h1 className="display-font mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#304b3c] sm:text-4xl lg:text-5xl">
          Care that puts people first
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-[#304b3c]">
          Learn about our approach to breast health information, compassionate
          support and informed conversations.
        </p>
      </section>

      {/* KEEP YOUR EXISTING WHO WE ARE SECTION BELOW */}

        {/* WHO WE ARE */}
        <section className=" mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div {...reveal(-18)} className="relative">
            {/* <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2.5rem] border-l-4 border-t-4 border-[#f26322]/70" /> */}

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare professional speaking with a patient"
              loading="lazy"
              className="relative h-[280px] w-full rounded-[2rem] object-cover shadow-md transition-transform duration-500 hover:scale-[1.01] sm:h-[390px]"
            />

            <div className="absolute -bottom-5 right-3 max-w-[250px] rounded-2xl border border-[#e1e9df] bg-white p-4 shadow-lg sm:-right-3 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
                  <HeartHandshake size={24} />
                </span>
                <div>
                  <p className="font-bold text-[#304b3c]">Care with dignity</p>
                  <p className="mt-1 text-sm text-[#425b4c]">
                    Information, understanding and support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal(18)} className="pt-3 lg:pt-0">
            <SectionTitle
              center={false}
              eyebrow="WHO WE ARE"
              title="A more informed approach to breast care"
              description="Breast health concerns can raise many questions. Our goal is to make information easier to understand and help patients feel prepared to discuss their concerns with qualified healthcare professionals."
            />

            <p className="mt-4 text-[16px] leading-8 text-[#304b3c]">
              From recognising changes and understanding diagnostic tests
              to discussing treatment and recovery, each step deserves
              clear explanations, respectful conversations and appropriate
              clinical guidance.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-md"
            >
              Contact Us
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </section>

        {/* WHY RENOVA */}
        <section className="mt-20 sm:mt-24">
          <SectionTitle
            eyebrow="WHY RENOVA"
            title="Care that puts people first"
            description="Supportive communication and individualised guidance help patients understand their care journey."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                {...reveal()}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="group rounded-3xl border border-[#dfe8de] bg-[#fffdf9] p-6 shadow-sm transition-all duration-300 hover:border-[#f26322]/50 hover:shadow-lg sm:p-7"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7eee7] text-[#304b3c] transition-colors duration-300 group-hover:bg-[#304b3c] group-hover:text-white">
                  <Icon size={27} />
                </span>

                <h3 className="display-font text-xl font-semibold text-[#304b3c]">
                  {title}
                </h3>

                <p className="mt-3 text-[16px] leading-7 text-[#304b3c]">
                  {text}
                </p>

                {/* <div className="mt-6 h-1 w-12 rounded-full bg-[#f26322] transition-all duration-300 group-hover:w-20" /> */}
              </motion.article>
            ))}
          </div>
        </section>

        {/* OUR APPROACH: MISSION + VISION */}
        <section className="mt-20 sm:mt-24">
        {/* <section className="mt-20 rounded-[2rem] border border-[#dfe8de] bg-[#f7f9f6] p-6 sm:mt-24 sm:p-10 lg:p-12"> */}
          <SectionTitle
            eyebrow="OUR APPROACH"
            title="Guided by purpose and compassion"
            description="Our mission and vision reflect the experience we want patients to have when seeking breast health information and support."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {approach.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                {...reveal(index === 0 ? -12 : 12)}
                className="rounded-3xl border border-[#dfe8de] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#304b3c] text-white">
                  <Icon size={27} />
                </span>

                <h3 className="display-font mt-5 text-2xl font-semibold text-[#304b3c]">
                  {title}
                </h3>

                <p className="mt-3 text-[16px] leading-8 text-[#304b3c]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="mt-20 sm:mt-24">
          <SectionTitle
            eyebrow="HOW WE WORK"
            title="Clear steps, thoughtful conversations"
            description="Every patient's situation is different. The steps below describe a general care journey; actual assessment and treatment depend on clinical advice."
          />

          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, number, title, text }, index) => (
              <motion.article
                key={number}
                {...reveal()}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                whileHover={reduceMotion ? {} : { y: -4 }}
                className="relative rounded-3xl border border-[#dfe8de] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7eee7] text-[#304b3c]">
                    <Icon size={24} />
                  </span>
                  <span className="text-3xl font-bold text-[#304b3c]/10">
                    {number}
                  </span>
                </div>

                <h3 className="display-font mt-5 text-lg font-semibold text-[#304b3c]">
                  {title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#304b3c]">
                  {text}
                </p>

                {/* <div className="mt-5 h-1 w-10 rounded-full bg-[#f26322]" /> */}
              </motion.article>
            ))}
          </div>
        </section>
        </div>
     </main>

      {/* KEEP THE EXISTING ABOUT-PAGE SECTIONS */}
      <WaveDivider from="#FFFFFF" to="#F6F9F6" />
      <TestimonialsSlider />
      <VideoSlider />
      <PhotoGallery />
    </>
  );
}






 