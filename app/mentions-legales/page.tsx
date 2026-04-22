import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl border border-[var(--line)] bg-white p-6 md:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Légal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-6 space-y-5 text-[15px] leading-7 text-[var(--muted)]">
          <p>Éditeur: Local IA</p>
          <p>Email: bonjour@localia.fr</p>
          <p>Téléphone: +33 1 89 70 42 18</p>
          <p>Ce site présente une solution d'IA privée à destination des entreprises.</p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex border border-[var(--line)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-soft)]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
