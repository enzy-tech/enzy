import React from "react";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { SpecsSection } from "./components/SpecsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationsSection />
      <SpecsSection />
      <TestimonialsSection />
    </>
  );
}