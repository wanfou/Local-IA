import { problemPoints } from "@/components/landing/data";
import {
  BuildingIcon,
  Container,
  IconBadge,
  LockIcon,
  SearchIcon,
  SectionHeading
} from "@/components/landing/ui";

const problemIcons = [BuildingIcon, SearchIcon, LockIcon];

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-14 md:py-20 lg:py-24">
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">
        <div className="editorial-frame overflow-hidden">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="border-b border-[var(--line)] px-4 py-8 md:px-8 md:py-10 lg:border-b-0 lg:pr-10">
              <SectionHeading
                tag="Le problème"
                title="Un assistant public ne suffit pas."
                description="Pour un CTO/DSI, la question n'est pas seulement la qualité de réponse: il faut savoir où tournent le modèle, l'index documentaire et les logs."
              />
            </div>

            <div className="grid divide-y divide-[var(--line)] lg:border-l lg:border-[var(--line)]">
              {problemPoints.map((item, index) => {
                const Icon = problemIcons[index] ?? LockIcon;

                return (
                  <article
                    key={item.title}
                    className="grid gap-4 px-4 py-6 md:grid-cols-[auto_1fr] md:px-8 md:py-7"
                  >
                    <IconBadge className="h-7 w-7">
                      <Icon className="h-[18px] w-[18px]" />
                    </IconBadge>
                    <div>
                      <h3 className="text-[1.22rem] font-semibold tracking-[-0.045em] text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[520px] text-[15px] leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
