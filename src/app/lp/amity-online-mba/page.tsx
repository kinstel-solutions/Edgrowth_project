import ClientPage from "./ClientPage";

export const metadata = {
  title: "Amity Online MBA | Master of Business Administration",
  description:
    "Enroll in Amity's Online MBA Course. View EMI options, course details and more",
  icons: {
    icon: "/amity/amity-small-logo-64.png",
    shortcut: "/amity/amity-small-logo-64.png",
    apple: "/amity/amity-small-logo-64.png",
  },
  openGraph: {
    images: ["/amity/amity-small-logo-64.png"],
  },
};

export default function AmityOnlineMBAPage() {
  return <ClientPage />;
}
