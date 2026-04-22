import { solutionBullets } from "@/components/landing/data";
import { CheckIcon, Container, SectionHeading } from "@/components/landing/ui";

export function SolutionSection() {
  return (
    <section id="solution" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">
        <div className="editorial-frame overflow-hidden rounded-[24px]">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="border-b border-[var(--line)] px-4 py-8 md:px-8 md:py-10 lg:border-b-0 lg:pr-10">
              <SectionHeading
                tag="La solution"
                title="Un produit complet. Pas un assemblage technique."
                description="Local IA combine l'assistant, l'indexation documentaire et l'interface web dans un cadre clair pour l'entreprise."
              />
            </div>

            <div className="px-4 py-8 md:px-8 md:py-10 lg:border-l lg:border-[var(--line)]">
              <div className="space-y-0">
                {solutionBullets.map((bullet, index) => (
                  <div
                    key={bullet}
                    className={`flex items-center gap-3 py-4 text-[15px] text-[var(--foreground)] ${
                      index !== 0 ? "border-t border-[var(--line)]" : ""
                    }`}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center border border-[var(--line)] bg-white text-[var(--accent)]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
