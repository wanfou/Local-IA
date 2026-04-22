import { contactDetails } from "@/components/landing/data";
import { BrandMark } from "@/components/landing/ui";

const productLinks = [
  { label: "Accueil", href: "#top" },
  { label: "Solution", href: "#solution" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#final-cta" }
] as const;

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" }
] as const;

const linkClass =
  "inline-flex text-sm text-white/72 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b0d]";

export function Footer() {
  return (
    <footer className="pb-8 pt-12 md:pb-10">
      <div className="px-1.5 md:px-4">
        <div className="relative overflow-hidden bg-[#0a0b0d] px-4 py-7 text-white md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_20%)]" />

          <div className="relative grid gap-10 border-b border-white/10 pb-10 md:pb-12 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.95fr]">
            <div>
              <div className="flex items-center gap-3">
                <BrandMark inverted />
              </div>
              <p className="mt-5 max-w-[360px] text-[15px] leading-7 text-white/72">
                Assistant IA privé pour entreprises qui veulent garder la maîtrise de leurs données
                et de leurs usages.
              </p>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/88">
                Produit
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {productLinks.map((item) => (
                  <a key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/88">
                Légal
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {legalLinks.map((item) => (
                  <a key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/88">
                Contact
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                <a href={`mailto:${contactDetails.email}`} className={linkClass}>
                  {contactDetails.email}
                </a>
                <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className={linkClass}>
                  {contactDetails.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-10 min-h-[130px] pt-6 md:mt-16 md:min-h-[320px] md:pt-10">
            <h3 className="absolute bottom-0 left-0 font-[Iowan_Old_Style,Georgia,serif] text-[clamp(4.2rem,22vw,22rem)] leading-[0.78] tracking-[-0.1em] text-[#7f7f7f]">
              Local IA
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
