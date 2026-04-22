import { workflowSteps } from "@/components/landing/data";
import { Container, SectionTag } from "@/components/landing/ui";

export function WorkflowSection() {
  return (
    <section
      id="fonctionnement"
      className="bg-[var(--foreground)] py-14 md:py-20 lg:py-24"
    >
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <SectionTag>Comment ça marche concrètement</SectionTag>
          <h2 className="mt-4 max-w-[680px] text-[2rem] font-semibold leading-[1.15] tracking-[-0.045em] text-white md:text-[2.6rem]">
            Un flux clair, de l'infrastructure jusqu'au chat interne.
          </h2>
        </div>

        {/* 4 columns */}
        <div className="grid grid-cols-1 gap-px border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, index) => {
            const num = String(index + 1).padStart(2, "0");
            const isLast = index === workflowSteps.length - 1;
            return (
              <article
                key={step.title}
                className="relative bg-[var(--foreground)] px-6 py-8"
              >
                {/* Arrow connector (desktop only) */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[7px] top-8 z-10 hidden h-[13px] w-[13px] rotate-45 border-r border-t border-[rgba(255,255,255,0.12)] bg-[var(--foreground)] lg:block"
                  />
                )}

                {/* Large background number */}
                <span
                  aria-hidden="true"
                  className="mb-6 block font-mono text-[3.5rem] font-bold leading-none tracking-[-0.04em] text-[rgba(255,255,255,0.07)]"
                >
                  {num}
                </span>

                <h3 className="text-[0.95rem] font-semibold leading-[1.4] tracking-[-0.02em] text-white md:text-[1rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[rgba(255,255,255,0.48)]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

      </Container>
    </section>
  );
}



