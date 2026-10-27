
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Heart, UsersRound } from "lucide-react";
import SectionTitle from "../SectionTitle";

import patientCare from "../../assets/home/patientCare.jpg";

const supportItems = [
  {
    icon: CalendarDays,
    title: "Prepare for appointments",
    text: "Know what to expect and what to bring.",
  },
  {
    icon: UsersRound,
    title: "Understand treatment options",
    text: "Get clear information from your care team.",
  },
  {
    icon: Heart,
    title: "Access ongoing support",
    text: "Support through recovery and beyond.",
  },
];

export default function HomePatientCare() {
  return (
    <section className="section-padding overflow-hidden bg-[#fffdf9]">
      <div className="page-container grid items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12">
        <div className="order-2 lg:order-1">
          <p className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-[#f26322]">
            PATIENT CARE
            <span className="h-px w-12 bg-[#f26322]" />
          </p>

          <div className="mt-4">
            <SectionTitle
              center={false}
              eyebrow="BREAST HEALTH INITIATIVE"
              title="You don't have to navigate it alone"
              description="We provide practical guidance throughout appointments, treatment discussions, recovery and ongoing care."
            />
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-3 lg:gap-4">
            {supportItems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl p-2 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0e7] text-[#f26322] transition duration-300 group-hover:bg-[#f26322] group-hover:text-white">
                  <Icon size={29} strokeWidth={1.7} />
                </div>
                <h3 className="mt-3 text-[16px] font-semibold leading-6 text-[#304b3c]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-[#425b4c]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/patient-care"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#304b3c] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D5A47] hover:shadow-lg"
            // className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#f26322] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d95116] hover:shadow-lg"
          >
            Explore Patient Care
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -right-5 top-8 h-40 w-40 rounded-full bg-[#fff0e7]" />
          <div className="absolute -bottom-4 -left-5 h-28 w-28 rounded-full bg-[#e7eee7]" />

          <img
           src={patientCare}
            // src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
            alt="Doctor talking with a patient during a consultation"
            loading="lazy"
            className="relative h-[290px] w-full rounded-[24px] object-cover shadow-lg transition-transform duration-500 hover:scale-[1.01] sm:h-[390px] lg:h-[460px]"
          />

          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-[#e5e9e3] bg-white p-4 shadow-lg sm:left-8 sm:right-8 sm:p-5">
            <p className="text-sm font-bold uppercase tracking-wider text-[#f26322]">
              Care at every stage
            </p>
            <p className="mt-2 text-lg font-bold text-[#304b3c] sm:text-xl">
              B-READY <span className="text-[#f26322]">·</span> B-AHEAD{" "}
              <span className="text-[#f26322]">·</span> B-YOU
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

