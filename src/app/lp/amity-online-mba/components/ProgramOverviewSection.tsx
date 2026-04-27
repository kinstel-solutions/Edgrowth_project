"use client";
import React, { useState } from "react";
import { ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

export default function ProgramOverviewSection({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  const [openSemester, setOpenSemester] = useState<number | null>(null);

  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      subjects: [
        "Managerial Economics",
        "Statistics for Management",
        "Professional Communication",
        "Accounting for Managers",
        "Marketing Management",
      ],
    },
    {
      id: 2,
      title: "Semester 2",
      subjects: [
        "Legal Aspects of Business",
        "Business Research Methods",
        "Financial Management",
        "Human Resource Management",
        "Conflict Resolution and Management",
      ],
    },
    {
      id: 3,
      title: "Semester 3",
      subjects: [
        "Strategic Management",
        "Minor Project",
        "Professional Ethics",
        "Specialization Elective 1",
        "Specialization Elective 2",
        "Specialization Elective 3",
        "Specialization Elective 4",
      ],
    },
    {
      id: 4,
      title: "Semester 4",
      subjects: [
        "Major Project",
        "Management in Action Social...",
        "Digital Marketing",
        "Specialization Elective 1",
        "Specialization Elective 2",
      ],
    },
  ];

  return (
    <section id="overview" className="bg-slate-50 py-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-amity-serif amity-blue mb-6 reveal-on-scroll opacity-0 translate-y-4">
          Program Overview & Structure
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 reveal-on-scroll opacity-0 translate-y-4">
          Master Of Business Administration (Online MBA) program created by
          Amity Online provides a holistic view of business management that
          will not only cover modern tools and practices but will also provide
          you with the ability to manage critical business decisions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-start">
          {semesters.map((sem, index) => (
            <div
              key={sem.id}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 reveal-on-scroll-down opacity-0 -translate-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div
                className="flex justify-between items-center cursor-pointer p-6"
                onClick={() =>
                  setOpenSemester(openSemester === sem.id ? null : sem.id)
                }>
                <h3 className="text-xl font-bold amity-blue">{sem.title}</h3>
                <span
                  className={`transition-transform duration-300 ${
                    openSemester === sem.id ? "rotate-180" : ""
                  }`}>
                  <ChevronDown
                    size={20}
                    className="text-amity-blue"
                  />
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSemester === sem.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  <ul className="space-y-3 text-sm text-gray-600">
                    {sem.subjects.map((subject, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 transition-all duration-500 transform ${
                          openSemester === sem.id
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}>
                        <CheckCircle
                          className="text-amity-yellow shrink-0 mt-0.5"
                          size={16}
                        />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-on-scroll opacity-0 translate-y-4">
          <button
            onClick={onEnquireClick}
            className="font-raleway bg-amity-yellow text-amity-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 shadow-md">
            VIEW DETAILED CURRICULUM <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
