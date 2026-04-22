import { heroHighlights } from "@/components/landing/data";
import {
  ArrowIcon,
  ButtonLink,
  ChatIcon,
  Container,
  FilesIcon,
  SearchIcon,
  SectionTag
} from "@/components/landing/ui";

const heroIcons = [FilesIcon, SearchIcon, ChatIcon];
const heroStats = [
  { value: "100%", label: "Données locales" },
  { value: "< 3 jours", label: "Déploiement complet" },
  { value: "< 2s", label: "Temps de réponse moyen" },
  { value: "1M+", label: "Documents indexables" }
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-6 pt-12 sm:pb-8 sm:pt-14 md:pb-10 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,69,56,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.82)_34%,transparent)]" />

      <Container>
        <div className="mx-auto max-w-[980px] text-center">
          <SectionTag>IA privée dans votre entreprise</SectionTag>

          <h1 className="mt-5 text-balance text-[clamp(2.3rem,11vw,3.8rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[var(--foreground)] md:text-[5.8rem]">
            Votre assistant <span className="text-[var(--accent)]">IA interne</span>.
            <br />
            RAG + <span className="text-[var(--accent)]">LLM privé</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-[var(--muted)] md:text-[18px]">
            Un assistant documentaire déployé sur votre infrastructure pour interroger vos corpus
            internes avec sources, droits d'accès et journalisation.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <ButtonLink
              href="#final-cta"
              icon={<ArrowIcon className="h-4 w-4" />}
              className="w-full sm:w-auto"
            >
              Demander une démonstration
            </ButtonLink>
            <ButtonLink href="#solution" variant="secondary" className="w-full sm:w-auto">
              Voir la solution
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div className="linked-flow-track mt-6 sm:mt-7">
        <div className="mb-4 sm:mb-5">
          <HeroStatsStrip />
        </div>

        <HeroVideoPlaceholder />

        <div className="mt-6 overflow-hidden border border-[var(--line)] bg-white sm:mt-7">
          <div className="grid sm:grid-cols-3">
            {heroHighlights.map((item, index) => {
              const Icon = heroIcons[index] ?? ChatIcon;

              return (
                <article
                  key={item.value}
                  className="border-b border-[var(--line)] px-4 py-4 text-left last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-[18px] w-[18px] text-[var(--accent)]" />
                    <h3 className="text-[15px] font-medium tracking-[-0.03em] text-[var(--foreground)]">
                      {item.value}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[14px] text-[var(--muted)]">{item.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStatsStrip() {
  return (
    <div className="overflow-hidden border border-[#d9d9d9] bg-white">
      <div className="grid md:grid-cols-4">
        {heroStats.map((item) => (
          <article
            key={item.label}
            className="border-b border-[#d9d9d9] bg-white px-5 py-5 text-left last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-7 md:last:border-r-0"
          >
            <p className="text-[clamp(1.55rem,2.5vw,2.3rem)] font-normal leading-[0.96] tracking-[-0.035em] text-[#0c0d11]">
              {item.value}
            </p>
            <p className="mt-4 max-w-[28ch] font-mono text-[clamp(0.95rem,1.08vw,1.2rem)] font-normal leading-[1.24] text-[#ff3b30]">
              <span className="mr-2 inline-block font-normal" aria-hidden="true">
                &rarr;
              </span>
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function HeroVideoPlaceholder() {
  return (
    <div className="overflow-hidden border border-[var(--line)] bg-white">
      <div className="relative aspect-[16/9] bg-[linear-gradient(150deg,#fff8f4_0%,#ffd8cf_26%,#ff6a5d_58%,#f13b2f_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.42),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(17,17,17,0.18),transparent_54%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            aria-label="Lecture vidéo (placeholder)"
            className="group inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/45 bg-black/20 backdrop-blur-sm transition hover:bg-black/30"
          >
            <span className="sr-only">Lire la vidéo</span>
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 translate-x-[1px] text-white" aria-hidden="true">
              <path d="M8 6V18L18 12L8 6Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
