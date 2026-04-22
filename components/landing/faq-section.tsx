"use client";

import { useState } from "react";
import { faqs } from "@/components/landing/data";
import { Container, PlusIcon, SectionHeading } from "@/components/landing/ui";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">
        <div className="px-2 md:px-8">
          <SectionHeading
            tag="FAQ"
            title="Les questions utiles, sans détour."
            description="Des réponses courtes pour rendre le périmètre du produit immédiat."
            align="center"
          />
        </div>

        <div className="mt-10 border-t border-[var(--line)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="border-b border-[var(--line)] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left md:gap-6 md:px-8 md:py-6"
                >
                  <h3 className="text-[1.02rem] font-medium tracking-[-0.03em] text-[var(--foreground)] md:text-[1.1rem]">
                    {faq.question}
                  </h3>
                  <span
                    className="transition-transform duration-200 shrink-0"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <PlusIcon className="h-5 w-5 text-[var(--foreground)]" />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-4 pb-5 text-[15px] leading-7 text-[var(--muted)] md:px-8 md:pb-6">
                    {faq.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

