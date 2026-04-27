"use client";
import React, { useState } from "react";
import LeadForm from "./components/LeadForm";
import Header from "./components/Header";
import AdmissionsBanner from "./components/AdmissionsBanner";
import HeroSection from "./components/HeroSection";
import StatsRow from "./components/StatsRow";
import WhyAmitySection from "./components/WhyAmitySection";
import MBAFeaturesSection from "./components/MBAFeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PrestigiousDegreeSection from "./components/PrestigiousDegreeSection";
import ProgramOverviewSection from "./components/ProgramOverviewSection";
import SpecializationsSection from "./components/SpecializationsSection";
import FacultySection from "./components/FacultySection";
import FeeStructureSection from "./components/FeeStructureSection";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function ClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadModal, setIsDownloadModal] = useState(false);
  const [isWhySayYesExpanded, setIsWhySayYesExpanded] = useState(false);

  useScrollReveal([isWhySayYesExpanded]);
  
  // Scroll locking
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleOpenModal = (isDownload: boolean) => {
    setIsModalOpen(true);
    setIsDownloadModal(isDownload);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .font-amity-serif { font-family: "Playfair Display", "Merriweather", Georgia, serif; }
        .font-raleway { font-family: var(--font-raleway), "__Raleway_504afd", "__Raleway_Fallback_504afd", sans-serif; }
        .amity-blue { color: #1B325D; }
        .bg-amity-blue { background-color: #1B325D; }
        .amity-yellow { color: #FFC907; }
        .bg-amity-yellow { background-color: #FFC907; }
      `,
        }}
      />

      <Header />
      <AdmissionsBanner onApplyClick={() => handleOpenModal(false)} />
      <HeroSection onDownloadClick={() => handleOpenModal(true)} />
      <StatsRow onEnquireClick={() => handleOpenModal(false)} />
      <WhyAmitySection
        isExpanded={isWhySayYesExpanded}
        setIsExpanded={setIsWhySayYesExpanded}
        onEnquireClick={() => handleOpenModal(false)}
      />
      <MBAFeaturesSection onEnquireClick={() => handleOpenModal(false)} />
      <TestimonialsSection onEnquireClick={() => handleOpenModal(false)} />
      <PrestigiousDegreeSection onEnquireClick={() => handleOpenModal(false)} />
      <ProgramOverviewSection onEnquireClick={() => handleOpenModal(false)} />
      <SpecializationsSection onEnquireClick={() => handleOpenModal(false)} />
      <FacultySection onEnquireClick={() => handleOpenModal(false)} />
      <FeeStructureSection onExploreClick={() => handleOpenModal(false)} />
      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-3xl font-amity-serif text-center amity-blue mb-8">
              {isDownloadModal ? "Download Brochure" : "Enquire Now"}
            </h2>

            <LeadForm
              buttonStyle="blue"
              isDownloadContext={isDownloadModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}
