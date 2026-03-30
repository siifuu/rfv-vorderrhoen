import { withBase } from "@/lib/paths";

export const siteConfig = {
  name: "RFV Vorderrhoen e.V.",
  shortName: "RFV",
  description:
    "Ein Voltigierverein mit strukturiertem Training fuer Kinder, Jugendliche und Erwachsene in einer ruhigen, sportlichen und naturnahen Umgebung.",
  location: "Fuldaer Str. 14, 36093 Künzell, Deutschland",
  email: "rfv-vorderrhoen@web.de",
  phone: "+49 30 1234 5678",
  applyUrl: withBase("/apply"),
  trialUrl: withBase("/trial"),
  applyFormUrl: "https://forms.gle/Xop3ahWVMz9Rz2Lh8",
  trialFormUrl: "https://forms.gle/Xop3ahWVMz9Rz2Lh8",
  siteUrl: "https://example.github.io/rfv-vorderrhoen",
};

export const socialLinks = [
  {
    label: "Vereinsaccount",
    platform: "Instagram",
    handle: "@rfv_vorderrhoen",
    href: "https://www.instagram.com/rfv_vorderrhoen",
  },
  {
    label: "Team 1",
    platform: "Instagram",
    handle: "@vorderrhoen_1",
    href: "https://www.instagram.com/vorderrhoen_1",
  },
];

export const mainNav = [
  { href: withBase("/"), label: "Start" },
  { href: withBase("/about-vaulting"), label: "Ueber Voltigieren" },
  { href: withBase("/training"), label: "Training" },
  { href: withBase("/pricing"), label: "Preise" },
  { href: withBase("/faq"), label: "FAQ" },
  { href: withBase("/news"), label: "Aktuelles" },
  { href: withBase("/contact"), label: "Kontakt" },
];

export const footerNav = [
  ...mainNav,
  { href: withBase("/apply"), label: "Anmeldung" },
  { href: withBase("/legal"), label: "Impressum" },
  { href: withBase("/privacy"), label: "Datenschutz" },
];

export const benefits = [
  {
    title: "Sportliche Basis",
    text: "Balance, Koerperspannung, Timing und Selbstvertrauen wachsen Schritt fuer Schritt auf und neben dem Pferd.",
  },
  {
    title: "Training als Team",
    text: "Voltigiererinnen und Voltigierer lernen in kleinen Gruppen mit klarer Struktur, gemeinsamer Verantwortung und ruhigem Coaching.",
  },
  {
    title: "Pferd zuerst",
    text: "Respekt fuer das Pferd ist Teil jeder Einheit, von den Stallablaeufen bis zur Arbeit auf dem Pferd.",
  },
];

export const trustPoints = [
  "Strukturierte Gruppen fuer Einsteiger, Fortgeschrittene und ambitionierte Athletinnen und Athleten",
  "Sicherheitsorientiertes Coaching mit klaren Erwartungen fuer Voltigierer und Familien",
  "Eine ruhige Trainingsumgebung, die Vertrauen vor Tempo setzt",
  "Eine statische Website-Architektur fuer schnelle Ladezeiten und einfache Pflege",
];

export const trainingHighlights = [
  "Aufwaermen, Mobilitaet und Kraftvorbereitung",
  "Techniktraining auf dem Holzpferd",
  "Voltigieren auf dem Pferd in passenden Gruppen",
  "Stallroutine, Pferdepflege und Verantwortung im Team",
];

export const faqItems = [
  {
    question: "Braucht man vor dem Einstieg Reiterfahrung?",
    answer:
      "Nein. Viele neue Voltigiererinnen und Voltigierer starten ohne Reiterfahrung. In den ersten Einheiten geht es vor allem um Sicherheit, Koordination und Grundlagen.",
  },
  {
    question: "Welche Altersgruppen trainieren bei euch?",
    answer:
      "Aktuell trainieren bei uns Kinder, Jugendliche und Erwachsene. Die Einteilung richtet sich nicht nur nach dem Alter, sondern auch nach Bewegungsniveau, Sicherheit und Trainingsziel.",
  },
  {
    question: "Was soll man zur Probestunde mitbringen?",
    answer:
      "Am besten enganliegende Sportkleidung, idealerweise Schläppchen, zusammengebundene Haare und etwas zu trinken. Alles Weitere teilen wir bei der Terminbestätigung mit.",
  },
  {
    question: "Wie funktioniert die Bezahlung?",
    answer:
      "Die Preise findest du klar auf der Preisseite. Anfragen fuer Probetraining und Anmeldung laufen ueber Google Forms, danach bestaetigen wir Gruppe und Startdetails.",
  },
];
