import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { hospital, navigation } from "../data/siteData";

import logo from "../assets/logo1.png";

const socials = [
  { label: "Facebook", mark: "f", url: "https://www.facebook.com/" },
  { label: "Instagram", mark: "◎", url: "https://www.instagram.com/" },
  { label: "LinkedIn", mark: "in", url: "https://www.linkedin.com/" },
  { label: "YouTube", mark: "▶", url: "https://www.youtube.com/" },
];

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{ background: "#2F4638", color: "#ffffff" }}
    >
      {/* Main footer content */}
      <div className="page-container px-5 pt-10 pb-8 sm:px-8 sm:pt-12 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              style={{ color: "#ffffff" }}
            >
              <img
                src={logo}
                alt={`${hospital.name} ${hospital.nameLine2}`}
                className="h-16 w-auto"
              />
            </Link>

            <p
              className="mt-5 max-w-xs text-[16px] leading-7"
              style={{ color: "#ffffff" }}
            >
              A specialist breast care programme offering clear information,
              coordinated assessment and support from diagnosis through recovery.
            </p>

            <div className="mt-5 flex gap-3">
              {socials.map(({ label, mark, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-lg font-bold">{mark}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-semibold" style={{ color: "#ffffff" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[16px] hover:underline"
                    style={{ color: "#ffffff" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="mb-5 font-semibold" style={{ color: "#ffffff" }}>
              Patient Resources
            </h3>
            <ul className="space-y-3">
              {[
                ["/breast-cancer", "Breast Cancer Guide"],
                ["/patient-care", "Patient Care"],
                ["/services", "Services"],
                ["/blogs", "Health Articles"],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-[16px] hover:underline"
                    style={{ color: "#ffffff" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="/brochures/02.pdf"
                  download
                  className="text-[16px] hover:underline"
                  style={{ color: "#ffffff" }}
                >
                  Pathway brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-5 font-semibold" style={{ color: "#ffffff" }}>
              Contact Us
            </h3>

            <div className="space-y-4 text-[16px]">
              <p className="flex gap-3">
                <MapPin
                  size={18}
                  style={{
                    color: "#F0B08A",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                <span>{hospital.address}</span>
              </p>

              <p className="flex gap-3">
                <Phone
                  size={18}
                  style={{ color: "#F0B08A", flexShrink: 0 }}
                />
                <a href={hospital.phoneHref} className="hover:underline">
                  {hospital.phoneDisplay}
                </a>
              </p>

              <p className="flex gap-3">
                <Mail
                  size={18}
                  style={{ color: "#F0B08A", flexShrink: 0 }}
                />
                <a
                  href={`mailto:${hospital.email}`}
                  className="hover:underline"
                >
                  {hospital.email}
                </a>
              </p>

              <p className="flex gap-3">
                <Clock
                  size={18}
                  style={{ color: "#F0B08A", flexShrink: 0 }}
                />
                <span>{hospital.hours}</span>
              </p>

              <Link
                to="/contact#locations"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: "#F0B08A" }}
              >
                View locations <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width divider; copyright content stays in the page container */}
      <div className="w-full border-t border-white/30">
        <div className="page-container flex flex-col justify-between gap-3 px-5 py-4 text-[15px] sm:flex-row sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} {hospital.name}. All rights reserved.
          </p>

          <p>
            Educational information does not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}



// import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { hospital, navigation } from "../data/siteData";

// import logo from "../assets/logo1.png";

// const socials = [
//   { label: "Facebook", mark: "f", url: "https://www.facebook.com/" },
//   { label: "Instagram", mark: "◎", url: "https://www.instagram.com/" },
//   { label: "LinkedIn", mark: "in", url: "https://www.linkedin.com/" },
//   { label: "YouTube", mark: "▶", url: "https://www.youtube.com/" },
// ];

// export default function Footer() {
//   return (
//     <footer className="site-footer" style={{ background: "#2F4638", color: "#ffffff" }}>
//       <div className="page-container px-5 pt-10 pb-4 sm:px-8 sm:pt-12 sm:pb-4 lg:px-12 lg:pt-12 lg:pb-4">
//       {/* <div className="page-container px-5 py-14 sm:px-8 lg:px-12 lg:py-16"> */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           <div>
//             <Link to="/" className="inline-flex items-center gap-3" style={{ color: "#ffffff" }}>
//               <img
//                 // src="/logo1.png"
//                 src={logo}
//                 alt={`${hospital.name} ${hospital.nameLine2}`}
//                 className="h-16 w-auto  "
//               />
//             </Link>
//             <p className="mt-5 max-w-xs text-[16px] leading-7" style={{ color: "#ffffff" }}>
//               A specialist breast care programme offering clear information,
//               coordinated assessment and support from diagnosis through recovery.
//             </p>
//             <div className="mt-5 flex gap-3">
//               {socials.map(({ label, mark, url }) => (
//                 <a
//                   key={label}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   title={label}
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40"
//                   style={{ color: "#ffffff" }}
//                 >
//                   <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
//                     {mark}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="mb-5 font-semibold" style={{ color: "#ffffff" }}>
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {navigation.slice(0, 5).map((item) => (
//                 <li key={item.path} style={{ color: "#ffffff" }}>
//                   <Link to={item.path} className="text-[16px] hover:underline" style={{ color: "#ffffff" }}>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="mb-5 font-semibold" style={{ color: "#ffffff" }}>
//               Patient Resources
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 ["/breast-cancer", "Breast Cancer Guide"],
//                 ["/patient-care", "Patient Care"],
//                 ["/services", "Services"],
//                 ["/blogs", "Health Articles"],
//               ].map(([path, label]) => (
//                 <li key={path} style={{ color: "#ffffff" }}>
//                   <Link to={path} className="text-[16px] hover:underline" style={{ color: "#ffffff" }}>
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//               <li style={{ color: "#ffffff" }}>
//                 <a
//                   href="/brochures/02.pdf"
//                   download
//                   className="text-[16px] hover:underline"
//                   style={{ color: "#ffffff" }}
//                 >
//                   Pathway brochure (PDF)
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="mb-5 font-semibold" style={{ color: "#ffffff" }}>
//               Contact Us
//             </h3>
//             <div className="space-y-4 text-[16px]">
//               <p className="flex gap-3" style={{ color: "#ffffff" }}>
//                 <MapPin size={18} style={{ color: "#F0B08A", flexShrink: 0, marginTop: 2 }} />
//                 <span style={{ color: "#ffffff" }}>{hospital.address}</span>
//               </p>
//               <p className="flex gap-3" style={{ color: "#ffffff" }}>
//                 <Phone size={18} style={{ color: "#F0B08A", flexShrink: 0 }} />
//                 <a href={hospital.phoneHref} className="hover:underline" style={{ color: "#ffffff" }}>
//                   {hospital.phoneDisplay}
//                 </a>
//               </p>
//               <p className="flex gap-3" style={{ color: "#ffffff" }}>
//                 <Mail size={18} style={{ color: "#F0B08A", flexShrink: 0 }} />
//                 <a href={`mailto:${hospital.email}`} className="hover:underline" style={{ color: "#ffffff" }}>
//                   {hospital.email}
//                 </a>
//               </p>
//               <p className="flex gap-3" style={{ color: "#ffffff" }}>
//                 <Clock size={18} style={{ color: "#F0B08A", flexShrink: 0 }} />
//                 <span style={{ color: "#ffffff" }}>{hospital.hours}</span>
//               </p>
//               <Link
//                 to="/contact#locations"
//                 className="inline-flex items-center gap-2 font-semibold"
//                 style={{ color: "#F0B08A" }}
//               >
//                 View locations <ArrowUpRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>

// <div className="mt-4 border-t border-white/30" />

// <div className="mt-4 flex flex-col justify-between gap-3 border-t border-white/20 pt-4 pb-0 text-[15px] sm:flex-row">
//         {/* <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 text-[15px] sm:flex-row"> */}
//           <p style={{ color: "#ffffff" }}>
//             © {new Date().getFullYear()} {hospital.name}. All rights reserved.
//           </p>
//           <p style={{ color: "#ffffff" }}>
//             Educational information does not replace professional medical advice.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
