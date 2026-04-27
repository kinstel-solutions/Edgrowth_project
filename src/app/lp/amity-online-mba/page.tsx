import ClientPage from "./ClientPage";

export const metadata = {
  title: "Amity Online MBA | Official Admission Partner | EdGrowth",
  description:
    "Apply for Amity University Online MBA. Get UGC entitled degree, flexible EMI options, and global accreditation. Join 2 Lac+ learners worldwide.",
  icons: {
    icon: "/amity/amity-small-logo-64.png",
    shortcut: "/amity/amity-small-logo-64.png",
    apple: "/amity/amity-small-logo-64.png",
  },
  openGraph: {
    title: "Amity Online MBA | Global Career Opportunities",
    description: "Enroll in Amity's UGC entitled Online MBA Course. Interest-free EMI starts at ₹8,906. Apply now for Jul'26 Session.",
    images: ["/hero-v2.png"],
  },
};

export default function AmityOnlineMBAPage() {
  return <ClientPage />;
}
