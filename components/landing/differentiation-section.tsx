import { CheckIcon, CloseIcon, Container, SectionHeading } from "@/components/landing/ui";

type ComparisonState = "none" | "partial" | "full";

type ProviderValue = {
  state: ComparisonState;
  label: string;
};

type ComparisonRow = {
  feature: string;
  cloud: ProviderValue;
  open: ProviderValue;
  local: ProviderValue;
};

const optionCards = [
  {
    name: "Cloud public",
    subtitle: "Activation rapide",
    summary: "Adapté aux tests rapides, mais moins lisible pour les exigences d'hébergement et d'audit.",
    bullets: ["Données souvent hors infra", "Traçabilité variable", "Peu de contrôle opérationnel"],
    featured: false
  },
  {
    name: "Open source brut",
    subtitle: "Brique technique",
    summary: "Bonne base technique, mais il faut assembler l'expérience produit, la sécurité et l'exploitation.",
    bullets: ["Intégration et MCO à bâtir", "Sécurité à industrialiser", "UX et gouvernance à produire"],
    featured: false
  },
  {
    name: "Local IA",
    subtitle: "Solution opérationnelle",
    summary: "RAG, interface interne et déploiement encadré dans un produit directement exploitable.",
    bullets: ["On-premise / VPC / cloud privé", "Chiffrement et isolation", "Exploitation et maintenance guidées"],
    featured: true
  }
] as const;

const orderedOptionCards = [...optionCards].sort((a, b) => Number(b.featured) - Number(a.featured));

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Hébergement interne",
    cloud: { state: "none", label: "Externe" },
    open: { state: "partial", label: "À cadrer" },
    local: { state: "full", label: "100% interne" }
  },
  {
    feature: "Contrôle d'accès (SSO / rôles)",
    cloud: { state: "partial", label: "Selon offre" },
    open: { state: "partial", label: "À configurer" },
    local: { state: "full", label: "Piloté" }
  },
  {
    feature: "Journal d'audit",
    cloud: { state: "partial", label: "Partiel" },
    open: { state: "none", label: "À mettre en place" },
    local: { state: "full", label: "Intégré" }
  },
  {
    feature: "Chiffrement en transit",
    cloud: { state: "full", label: "Oui" },
    open: { state: "partial", label: "À vérifier" },
    local: { state: "full", label: "TLS interne" }
  },
  {
    feature: "Chiffrement au repos",
    cloud: { state: "partial", label: "Selon plan" },
    open: { state: "partial", label: "À opérer" },
    local: { state: "full", label: "Géré en interne" }
  },
  {
    feature: "Réponses sourcées",
    cloud: { state: "partial", label: "Variable" },
    open: { state: "partial", label: "À construire" },
    local: { state: "full", label: "Natif" }
  },
  {
    feature: "Citations exploitables",
    cloud: { state: "partial", label: "Souvent limité" },
    open: { state: "partial", label: "À développer" },
    local: { state: "full", label: "Citations claires" }
  },
  {
    feature: "Qualité des réponses métier",
    cloud: { state: "partial", label: "Générique" },
    open: { state: "partial", label: "Dépend du setup" },
    local: { state: "full", label: "Paramétrée" }
  },
  {
    feature: "Connecteurs documentaires",
    cloud: { state: "partial", label: "Catalogue figé" },
    open: { state: "none", label: "À intégrer" },
    local: { state: "full", label: "Adaptés à votre SI" }
  },
  {
    feature: "Isolation multi-entités",
    cloud: { state: "partial", label: "Selon plan" },
    open: { state: "none", label: "À architecturer" },
    local: { state: "full", label: "Segmentation native" }
  },
  {
    feature: "Fonctionnement sans internet",
    cloud: { state: "none", label: "Non" },
    open: { state: "partial", label: "Possible" },
    local: { state: "full", label: "Oui" }
  },
  {
    feature: "Installation & maintenance",
    cloud: { state: "none", label: "À votre charge" },
    open: { state: "none", label: "À opérer" },
    local: { state: "full", label: "Déploiement guidé" }
  }
];

export function DifferentiationSection() {
  return (
    <section id="solution" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">
        <div className="px-2 md:px-8">
          <SectionHeading
            tag="Différenciation"
            title="Une alternative sérieuse aux outils cloud grand public."
            description="La valeur vient d'un cadre technique explicite: hébergement, sécurité, moteur documentaire et exploitation."
            align="center"
          />
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {orderedOptionCards.map((card) => (
            <article
              key={card.name}
              className={`relative border p-5 md:p-6 ${
                card.featured
                  ? "border-[var(--accent)] bg-[#fff8f6] shadow-[0_20px_46px_rgba(255,69,56,0.12)]"
                  : "border-[var(--line)] bg-white"
              }`}
            >
              {card.featured && (
                <span className="absolute right-4 top-4 inline-flex border border-[#ffd7d2] bg-[#fff2ef] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Recommandé
                </span>
              )}

              <p
                className={`text-[12px] font-semibold uppercase tracking-[0.16em] ${
                  card.featured ? "text-[var(--accent)]" : "text-[#7f7a73]"
                }`}
              >
                {card.subtitle}
              </p>
              <h3 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.045em] text-[var(--foreground)]">
                {card.name}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[var(--muted)]">{card.summary}</p>

              <ul className="mt-4 space-y-2.5">
                {card.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-[var(--foreground)]">
                    <CheckIcon className={`h-4 w-4 ${card.featured ? "text-[#34c759]" : "text-[#6c6862]"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-[var(--line)] bg-white md:mt-10">
          <div className="border-b border-[var(--line)] px-4 py-4 md:px-8 md:py-5">
            <h3 className="text-[1.15rem] font-semibold tracking-[-0.03em] text-[var(--foreground)] md:text-[1.35rem]">
              Comparatif détaillé
            </h3>
            <p className="mt-1 text-[14px] text-[var(--muted)]">
              Lecture condensée sur les sujets sécurité, qualité de réponse et exploitation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[940px] border-collapse text-left">
              <thead>
                <tr className="bg-[var(--surface-soft)] text-[11px] uppercase tracking-[0.14em] text-[#7f7a73]">
                  <th className="px-5 py-3.5 font-semibold text-[var(--foreground)]">Critère</th>
                  <th className="border-x border-t border-[var(--accent)] bg-[#fffdfc] px-4 py-3.5 text-left font-semibold text-[var(--accent)]">
                    <span className="flex w-full items-center justify-between gap-2">
                      <span>Local IA</span>
                      <span className="inline-flex border border-[#ffd7d2] bg-[#fff2ef] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                        Recommandé
                      </span>
                    </span>
                  </th>
                  <th className="border-l border-[var(--line)] px-4 py-3.5 text-left font-semibold">Cloud public</th>
                  <th className="border-l border-[var(--line)] px-4 py-3.5 text-left font-semibold">Open source brut</th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-[var(--line)] align-middle ${
                      index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"
                    }`}
                  >
                    <th className="px-5 py-3.5 text-[14px] font-medium text-[var(--foreground)]">{row.feature}</th>
                    <td
                      className={`border-x border-[var(--accent)] bg-[#fffdfc] px-4 py-3.5 ${
                        index === comparisonRows.length - 1 ? "border-b border-b-[var(--accent)]" : ""
                      }`}
                    >
                      <InlineState value={row.local} localColumn />
                    </td>
                    <td className="border-l border-[var(--line)] px-4 py-3.5">
                      <InlineState value={row.cloud} />
                    </td>
                    <td className="border-l border-[var(--line)] px-4 py-3.5">
                      <InlineState value={row.open} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InlineState({
  value,
  localColumn = false
}: {
  value: ProviderValue;
  localColumn?: boolean;
}) {
  const fullIconClass = "text-[#34c759]";
  const partialTextClass = "text-[#5f5a54]";
  const noneTextClass = "text-[#bab4ad]";

  if (value.state === "full") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-[13px] ${localColumn ? "font-semibold" : "font-medium"} text-[var(--foreground)]`}
      >
        <CheckIcon className={`h-4 w-4 ${fullIconClass}`} />
        <span>{value.label}</span>
      </span>
    );
  }

  if (value.state === "partial") {
    return (
      <span
        className={`inline-flex items-center text-[13px] ${localColumn ? "font-semibold" : "font-medium"} ${partialTextClass}`}
      >
        <span>{value.label}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${noneTextClass}`}>
      <CloseIcon className="h-4 w-4 text-[#c4bfb8]" />
      <span>{value.label}</span>
    </span>
  );
}
