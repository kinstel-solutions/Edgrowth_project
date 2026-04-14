import type { Metadata } from "next";
import OnlineMBAClient from "./OnlineMBAClient";

export const metadata: Metadata = {
  title: "Compare Top Online MBA Programs 2026 | UGC Approved | EdGrowth",
  description:
    "Compare fees, EMI options, accreditation & placement support for India's top UGC-approved online MBA programs. Get free expert counselling from EdGrowth. Starting at ₹24,500/semester.",
  keywords: [
    "online MBA",
    "best online MBA",
    "online MBA India",
    "UGC approved online MBA",
    "online MBA for working professionals",
    "affordable online MBA",
    "online MBA fees",
    "online MBA comparison",
    "NAAC accredited MBA",
    "online MBA placement",
    "distance MBA",
    "MBA EMI option",
    "EdGrowth",
  ],
  openGraph: {
    title: "Compare Top Online MBA Programs 2026 | EdGrowth",
    description:
      "Compare fees, EMI, accreditation & placement support for India's best UGC-approved online MBA programs. Free expert counselling.",
    url: "https://edgrowth.info/lp/online-mba",
    siteName: "EdGrowth Consultants",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: false, // Don't index landing pages — drive traffic via Ads only
    follow: false,
  },
};

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EdGrowth Consultants",
  description:
    "EdGrowth is an independent educational advisory platform helping students compare and enroll in top UGC-approved online MBA programs across India.",
  url: "https://edgrowth.info",
  telephone: "+918527511409",
  address: {
    "@type": "PostalAddress",
    streetAddress: "62, Guru Gobind Singh Marg",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226001",
    addressCountry: "IN",
  },
};

export default function OnlineMBAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OnlineMBAClient />
    </>
  );
}
