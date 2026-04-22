import { contactDetails } from "@/components/landing/data";
import {
  ArrowIcon,
  Container,
  IconBadge,
  MailIcon,
  PhoneIcon,
  SectionTag
} from "@/components/landing/ui";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-12 sm:py-14 md:py-20 lg:py-24">
      <Container className="max-w-[1320px] px-4 md:px-10 lg:px-14">
        <div className="editorial-frame overflow-hidden">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
            <div className="h-full border-b border-[var(--line)] px-4 py-8 md:px-8 md:py-10 lg:border-b-0 lg:border-r">
              <SectionTag>Contact</SectionTag>
              <h2 className="section-h2 mt-4">Parlons de votre contexte.</h2>
              <p className="mt-4 max-w-[460px] text-[16px] leading-7 text-[var(--muted)]">
                Nous cadrons l'usage, les documents à interroger et la bonne façon de déployer
                l'assistant dans votre entreprise.
              </p>

              <div className="mt-7 grid border border-[var(--line)] sm:mt-8 sm:grid-cols-2">
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="border-b border-[var(--line)] px-4 py-4 transition hover:bg-[var(--surface-soft)] sm:border-b-0 sm:border-r sm:px-5 sm:py-5"
                >
                  <IconBadge className="mb-4 h-7 w-7">
                    <PhoneIcon className="h-[18px] w-[18px]" />
                  </IconBadge>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Téléphone
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {contactDetails.phone}
                  </h3>
                </a>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="px-4 py-4 transition hover:bg-[var(--surface-soft)] sm:px-5 sm:py-5"
                >
                  <IconBadge className="mb-4 h-7 w-7">
                    <MailIcon className="h-[18px] w-[18px]" />
                  </IconBadge>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Email
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {contactDetails.email}
                  </h3>
                </a>
              </div>
            </div>

            <form className="flex h-full flex-col bg-white px-4 py-8 md:px-8 md:py-10">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nom" placeholder="Votre nom" name="name" />
                <Field label="Entreprise" placeholder="Nom de l'entreprise" name="company" />
                <Field
                  label="Email"
                  placeholder="vous@entreprise.fr"
                  type="email"
                  name="email"
                />
                <Field label="Téléphone" placeholder="+33 ..." type="tel" name="phone" />
              </div>

              <div className="mt-4">
                <label className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#726d66]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Décrivez rapidement votre contexte, vos usages ou vos contraintes."
                  className="mt-2 w-full resize-none border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 text-[15px] text-[var(--foreground)] outline-none transition placeholder:text-[#989189] focus:border-[#d8cdc2] focus:bg-white"
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:mt-auto sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[var(--muted)]">Retour sous 24h ouvrées.</p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] sm:w-auto"
                >
                  Envoyer la demande
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  name
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#726d66]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-14 w-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 text-[15px] text-[var(--foreground)] outline-none transition placeholder:text-[#989189] focus:border-[#d8cdc2] focus:bg-white"
      />
    </label>
  );
}
