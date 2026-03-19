import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "EdGrowth Consultants | Educational Counselling & Placement",
  description: "EdGrowth Consultants LLP is a premier educational consultancy in Lucknow providing expert counselling for students who want to pursue online MBA, BBA, M.Com, B.Com, and provides professional placement & financial services.",
  keywords: [
    "EdGrowth",
    "Educational Counselling",
    "Expert Career Counselling & Support",
    "Best Online MBA",
    "Best Online BBA Programs",
    "Career Placement Services",
    "Best Online M.Com & B.Com Courses",
    "Student Counselling",
    "University Admissions"
  ],
  authors: [{ name: "EdGrowth Consultants" }],
  creator: "EdGrowth Consultants",
  publisher: "EdGrowth Consultants",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "EdGrowth Consultants | Educational Counselling & Placement",
    description: "Expert educational counselling for MBA, BBA, M.Com, B.Com and professional placement services.",
    url: "https://edgrowth.info", // Replace with actual domain when ready
    siteName: "EdGrowth Consultants",
    images: [
      {
        url: "/hero-v2.png",
        width: 1200,
        height: 630,
        alt: "EdGrowth Consultants Hero Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EdGrowth Consultants | Educational Counselling & Placement",
    description: "Expert educational counselling for MBA, BBA, M.Com, B.Com and professional placement services.",
    images: ["/hero-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth min-h-screen overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}