import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays, MapPin, Phone, Mail, Clock } from "lucide-react";
import { hospital, navigation } from "../data/siteData";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur-md">
        <div className="page-container flex min-h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[72px] lg:px-8">
          <BrandLogo onClick={close} compact />

          {/* <nav className="hidden items-center gap-3 xl:flex 2xl:gap-5" aria-label="Main"> */}
          <nav
  className="ml-auto hidden items-center gap-3 xl:flex 2xl:gap-5"
  aria-label="Main"
>
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[16px] font-semibold transition 2xl:text-[17px] ${
                    isActive ? "text-royal" : "text-ink hover:text-royal"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* <div className="flex items-center gap-2"> */}
          <div className="ml-5 flex shrink-0 items-center gap-2">
            <Link to="/appointments" className="btn-header hidden sm:inline-flex">
              <CalendarDays size={14} />
              Book Appointment
            </Link>

            <button
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="rounded-xl border border-line p-2 text-navy xl:hidden"
            >
            {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] xl:hidden">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/45"
              aria-label="Close menu overlay"
              onClick={close}
            />
            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="absolute left-0 top-0 flex h-[100dvh] w-[min(100%,22.5rem)] flex-col bg-white shadow-lift xl:hidden"
            >
              <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-4">
                <BrandLogo onClick={close} />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close navigation"
                  className="shrink-0 rounded-xl border border-line p-2 text-navy"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="hide-scroll flex-1 overflow-y-auto px-5 py-3">
                {navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={close}
                    className={({ isActive }) =>
                      `block border-b border-line py-3.5 text-[18px] font-semibold ${
                        isActive ? "text-royal" : "text-heading"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link to="/appointments" onClick={close} className="btn-primary mt-5 w-full">
                  Book Appointment
                </Link>
              </nav>

              <div className="space-y-3 border-t border-line bg-mist px-5 py-5 text-[15px] text-ink">
                <p className="font-semibold text-navy">Hospital location</p>
                <p className="flex gap-2">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-royal" />
                  {hospital.address}
                </p>
                <p className="flex gap-2">
                  <Phone size={18} className="shrink-0 text-royal" />
                  <a href={hospital.phoneHref}>{hospital.phoneDisplay}</a>
                </p>
                <p className="flex gap-2">
                  <Mail size={18} className="shrink-0 text-royal" />
                  <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
                </p>
                <p className="flex gap-2">
                  <Clock size={18} className="shrink-0 text-royal" />
                  {hospital.hours}
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
