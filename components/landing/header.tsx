import { navigation } from "@/components/landing/data";
import { ArrowIcon, BrandMark, ButtonLink, Container } from "@/components/landing/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,255,255,0.84)] backdrop-blur-xl">
      <Container className="flex min-h-[64px] items-center justify-between gap-3 md:min-h-[76px] md:gap-4">
        <a href="#top" className="shrink-0">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#final-cta"
          className="hidden md:inline-flex"
          icon={<ArrowIcon className="h-4 w-4" />}
        >
          Demander une démo
        </ButtonLink>

        <a
          href="#final-cta"
          className="inline-flex items-center gap-1.5 whitespace-nowrap border border-[var(--accent)] bg-[var(--accent)] px-3.5 py-2 text-[12px] font-semibold text-white transition hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] md:hidden"
        >
          Démo
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </Container>
    </header>
  );
}
