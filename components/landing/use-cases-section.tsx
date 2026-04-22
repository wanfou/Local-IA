import { useCases } from "@/components/landing/data";
import {
  ChatIcon,
  Container,
  FilesIcon,
  LockIcon,
  SearchIcon,
  SectionTag
} from "@/components/landing/ui";

const caseIcons = [ChatIcon, SearchIcon, LockIcon, FilesIcon];

export function UseCasesSection() {
  return (
    <section id="cas-d-usage" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">
        <div className="overflow-hidden border border-[var(--line)] bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="px-5 py-8 md:px-9 md:py-10">
              <SectionTag>Cas d'usage</SectionTag>
              <h2 className="mt-4 max-w-[640px] text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[var(--foreground)]">
                Des usages concrets, déjà activables en entreprise.
              </h2>
              <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-[var(--muted)] md:text-[17px]">
                Support interne, base documentaire, juridique interne et IT helpdesk
                avec réponses sourcées.
              </p>
            </div>

            <div className="relative min-h-[170px] border-t border-[var(--line)] bg-[linear-gradient(120deg,#f3a69d_0%,#ff6a60_40%,#e23429_100%)] lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_42%),radial-gradient(circle_at_80%_88%,rgba(17,17,17,0.14),transparent_54%)]" />
              <div className="relative flex h-full items-center justify-center px-5 py-5 md:px-8 md:py-7">
                <span className="inline-flex items-center gap-4 text-[#ffe4de] md:gap-5" aria-label="Logo Local IA">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-16 w-16 md:h-20 md:w-20"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="0" className="stroke-current" />
                    <path d="M8 8V16H16" className="stroke-current" />
                    <circle cx="8" cy="8" r="1.5" className="fill-current stroke-none" />
                    <circle cx="8" cy="16" r="1.5" className="fill-current stroke-none" />
                    <circle cx="16" cy="16" r="1.5" className="fill-current stroke-none" />
                  </svg>
                  <span className="text-[clamp(1.5rem,2.2vw,2.2rem)] font-semibold tracking-[-0.04em]">
                    Local IA
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-px border-t border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, index) => {
              const Icon = caseIcons[index] ?? SearchIcon;

              return (
                <article key={item.title} className="bg-white px-5 py-5 md:px-6 md:py-6">
                  <div className="inline-flex h-8 w-8 items-center justify-center text-[var(--accent)]">
                    <Icon className="h-[19px] w-[19px]" />
                  </div>
                  <h3 className="mt-3 text-[1.18rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[var(--muted)] md:text-[15px]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
