"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeeStructureSection({
  onExploreClick,
}: {
  onExploreClick: () => void;
}) {
  return (
    <section id="fees" className="bg-gray-50 py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-8">
          Fee Structure
        </h2>
        <hr className="border-gray-200 mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-amity-blue text-white rounded-2xl p-8 relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="font-medium text-lg mb-1">
                24 Months Zero Cost
              </h3>
              <h3 className="font-medium text-lg mb-6">EMI</h3>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">₹8,906</div>
              <div className="text-gray-300 font-medium text-lg">
                Interest free
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-amity-yellow opacity-80">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle
                  cx="12"
                  cy="8"
                  r="5"></circle>
                <path d="M10 7h4"></path>
                <path d="M10 9h4"></path>
                <path d="M12 5v6"></path>
                <path d="M4.5 16.5c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5"></path>
                <path d="M21 16l-3.5 2"></path>
                <path d="M17.5 18H20"></path>
                <path d="M20 18v2.5"></path>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            <h3 className="text-[#3A4E7A] font-medium text-lg mb-6">
              Per Semester Fee
            </h3>
            <div className="text-4xl font-bold amity-blue mt-auto">
              ₹56,300
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 text-gray-400">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                <path d="M8 7h8"></path>
                <path d="M8 11h8"></path>
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[220px] relative overflow-hidden">
            <div>
              <h3 className="text-[#3A4E7A] font-medium text-lg mb-3">
                Full Program Fee
              </h3>
              <p className="text-[#3A4E7A] text-xs leading-relaxed max-w-[150px]">
                Pay one time full fee and get extra benefits
              </p>
            </div>
            <div className="text-4xl font-bold amity-blue mt-auto">
              ₹2,25,000
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-5 text-gray-400">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle
                  cx="12"
                  cy="12"
                  r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between min-h-[220px] items-center text-center">
            <h3 className="text-[#3A4E7A] font-medium text-lg mb-6">
              Attractive Scholarships Available
            </h3>
            <button
              onClick={onExploreClick}
              className="font-raleway bg-amity-yellow text-amity-blue font-bold px-6 py-2.5 rounded-full mt-auto flex items-center gap-2 hover:bg-yellow-400 transition-colors w-max mx-auto text-sm">
              EXPLORE NOW <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <p className="text-center text-[#3A4E7A] font-medium mt-4">
          Finance Your Future, Hassle-Free Loan Assistance Available
        </p>
      </div>
    </section>
  );
}
