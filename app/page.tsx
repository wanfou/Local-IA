import { FinalCtaSection } from "@/components/landing/cta-section";
import { DifferentiationSection } from "@/components/landing/differentiation-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { SiteHeader } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem-section";
import { UseCasesSection } from "@/components/landing/use-cases-section";
import { WorkflowSection } from "@/components/landing/workflow-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden pb-6">
        <Hero />
        <div className="linked-flow">
          <div className="linked-flow-item">
            <ProblemSection />
          </div>
          <div className="linked-flow-separator" aria-hidden="true" />

          <div className="linked-flow-item">
            <WorkflowSection />
          </div>
          <div className="linked-flow-separator" aria-hidden="true" />

          <div className="linked-flow-item">
            <UseCasesSection />
          </div>
          <div className="linked-flow-separator" aria-hidden="true" />

          <div className="linked-flow-item">
            <DifferentiationSection />
          </div>
          <div className="linked-flow-separator" aria-hidden="true" />

          <div className="linked-flow-item">
            <FaqSection />
          </div>
          <div className="linked-flow-separator" aria-hidden="true" />

          <div className="linked-flow-item">
            <FinalCtaSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
