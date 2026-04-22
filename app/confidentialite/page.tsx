import Link from "next/link";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl border border-[var(--line)] bg-white p-6 md:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Légal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="mt-6 space-y-5 text-[15px] leading-7 text-[var(--muted)]">
          <p>Nous ne revendons pas vos données.</p>
          <p>Les informations envoyées via le formulaire sont utilisées uniquement pour traiter votre demande.</p>
          <p>Pour toute question, contactez-nous à bonjour@localia.fr.</p>
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
