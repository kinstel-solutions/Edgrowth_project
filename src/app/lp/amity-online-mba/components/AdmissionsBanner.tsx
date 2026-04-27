"use client";
import React from "react";

export default function AdmissionsBanner({
  onApplyClick,
}: {
  onApplyClick: () => void;
}) {
  return (
    <div
      onClick={onApplyClick}
      className="font-raleway mt-4 mx-2 sm:mx-8 rounded-lg bg-amity-yellow text-center py-2 text-sm font-semibold text-black px-4 cursor-pointer hover:bg-yellow-500 transition-colors">
      Admissions Open for Jul'26 Session. Get Early-Bird Scholarship.
      <span className="font-bold text-amity-blue"> Apply Now</span>
    </div>
  );
}
