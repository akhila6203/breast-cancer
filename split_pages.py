from pathlib import Path

text = Path("src/pages/Pages.jsx").read_text(encoding="utf-8")

start = text.find("const cancerSections")
end = text.find("export function PatientCarePage")
chunk = text[start:end].replace(
    "export function BreastCancerPage()",
    "export default function BreastCancerPage()",
)
Path("src/pages/BreastCancerPage.jsx").write_text(
    """import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "../components/PageChrome";
import { references } from "../data/siteData";

"""
    + chunk,
    encoding="utf-8",
)

start = text.find("export function PatientCarePage")
end = text.find("export function BlogsPage")
Path("src/pages/PatientCarePage.jsx").write_text(
    """import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import { PageLayout } from "../components/PageChrome";

"""
    + text[start:end].replace(
        "export function PatientCarePage", "export default function PatientCarePage"
    ),
    encoding="utf-8",
)

start = text.find("export function BlogsPage")
end = text.find("export function ContactPage")
Path("src/pages/BlogsPage.jsx").write_text(
    """import { ArrowRight } from "lucide-react";
import { PageLayout } from "../components/PageChrome";
import { blogs, articles, references } from "../data/siteData";

"""
    + text[start:end].replace("export function BlogsPage", "export default function BlogsPage"),
    encoding="utf-8",
)

start = text.find("export function ContactPage")
end = text.find("export function AppointmentsPage")
Path("src/pages/ContactPage.jsx").write_text(
    """import { MapPin, Mail, Phone, Clock } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { PageLayout } from "../components/PageChrome";
import { hospital } from "../data/siteData";

"""
    + text[start:end].replace("export function ContactPage", "export default function ContactPage"),
    encoding="utf-8",
)

start = text.find("export function AppointmentsPage")
Path("src/pages/AppointmentsPage.jsx").write_text(
    """import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { PageLayout } from "../components/PageChrome";

"""
    + text[start:].replace(
        "export function AppointmentsPage", "export default function AppointmentsPage"
    ),
    encoding="utf-8",
)

print("split complete")
