 "use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

const FAQ_QUESTIONS = [
  "What is Enzy?",
  "What is sales gamification?",
  "What industries does Enzy serve?",
  "Does Enzy work for D2D sales teams?",
  "How long does it take to implement Enzy?",
  "How much does Enzy cost?",
];

export function FAQSection() {
  const { isLightMode } = useTheme();

  return (
    <section
      className={`relative z-10 w-full px-4 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center border-t ${
        isLightMode ? "border-black/10" : "border-white/10"
      }`}
    >
      <div className="w-full max-w-[1280px] flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-6 max-w-[900px]">
          <h2 className="font-['Roboto_Mono'] text-[#19ad7d] text-xs uppercase tracking-widest">
            FAQ
          </h2>
          <p
            className={`font-['Inter'] font-bold text-5xl md:text-[60px] tracking-[-3px] leading-[0.9] ${
              isLightMode ? "text-[#0b0f14]" : "text-[#f5f7fa]"
            }`}
          >
            Questions people ask before buying.
          </p>
          <p
            className={`font-['Roboto_Mono'] text-[15px] uppercase tracking-[-0.075px] max-w-[700px] leading-relaxed ${
              isLightMode ? "text-[#4a5568]" : "text-[#a3adb8]"
            }`}
          >
            A quick set of common questions about Enzy and sales gamification.
          </p>
        </div>

        <div
          className={`w-full rounded-3xl border backdrop-blur-[24px] overflow-hidden ${
            isLightMode
              ? "border-black/10 bg-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              : "border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          }`}
        >
          <ul className="divide-y divide-black/10">
            {FAQ_QUESTIONS.map((q) => (
              <li
                key={q}
                className={`flex items-center justify-between gap-6 px-6 md:px-10 py-6 ${
                  isLightMode ? "divide-black/10" : "divide-white/10"
                }`}
              >
                <span
                  className={`font-['Inter'] text-lg md:text-xl font-semibold tracking-[-0.5px] ${
                    isLightMode ? "text-[#0b0f14]" : "text-[#f5f7fa]"
                  }`}
                >
                  {q}
                </span>
                <span
                  className={`font-['Roboto_Mono'] text-xs uppercase tracking-widest whitespace-nowrap ${
                    isLightMode ? "text-black/40" : "text-white/40"
                  }`}
                >
                  Learn more
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

