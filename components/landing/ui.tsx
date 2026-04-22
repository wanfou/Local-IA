import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("mx-auto w-full max-w-[1380px] px-4 md:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 font-mono text-[0.95rem] tracking-[-0.02em] text-[var(--accent)]">
      <span aria-hidden="true">{"\u2192"}</span>
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left"
}: {
  tag: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx("max-w-[700px]", align === "center" && "mx-auto text-center")}>
      <SectionTag>{tag}</SectionTag>
      <h2 className="section-h2 mt-4">
        {title}
      </h2>
      <p
        className={cx(
          "mt-4 max-w-[620px] text-[15px] leading-7 text-[var(--muted)] md:text-[17px]",
          align === "center" && "mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  icon,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}) {
  return (
    <a
      className={cx(
        "inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-medium transition duration-200",
        variant === "primary" &&
          "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)] hover:border-[var(--accent-strong)]",
        variant === "secondary" &&
          "border-[var(--line)] bg-white text-[var(--foreground)] hover:bg-[var(--surface-soft)]",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </a>
  );
}

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="inline-flex h-6 w-6 items-center justify-center text-[var(--accent)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="0" className="stroke-current" />
          <path d="M8 8V16H16" className="stroke-current" />
          <circle cx="8" cy="8" r="1.5" className="fill-current stroke-none" />
          <circle cx="8" cy="16" r="1.5" className="fill-current stroke-none" />
          <circle cx="16" cy="16" r="1.5" className="fill-[var(--accent-strong)] stroke-none" />
        </svg>
      </span>
      <span
        className={cx(
          "text-lg font-semibold tracking-[-0.04em]",
          inverted ? "text-white" : "text-[var(--foreground)]"
        )}
      >
        Local IA
      </span>
    </span>
  );
}

export function StripeBlock({
  className
}: {
  className?: string;
}) {
  return (
    <span
      className={cx(
        "stripe-divider inline-flex h-9 w-20 rounded-[14px] bg-white/70",
        className
      )}
    />
  );
}

export function SectionDivider({
  className
}: {
  className?: string;
}) {
  return <div className={cx("stripe-divider h-7 w-full", className)} />;
}

export function FrenchFlag({
  withLabel = false,
  className
}: {
  withLabel?: boolean;
  className?: string;
}) {
  return (
    <span className={cx("inline-flex items-center gap-2", className)}>
      <span className="overflow-hidden rounded-[3px] border border-black/5 shadow-[0_4px_12px_rgba(16,24,40,0.08)]">
        <span className="flex h-3.5 w-5">
          <span className="flex-1 bg-[#1146ad]" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-[#ef4135]" />
        </span>
      </span>
      {withLabel && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-current">
          Fait en France
        </span>
      )}
    </span>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7H17V16" />
    </svg>
  );
}

export function IconBadge({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex h-8 w-8 items-center justify-center text-[var(--accent)]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6L9 17L4 12" />
    </svg>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6L12 3Z" />
      <path d="M9.5 12L11.2 13.7L14.8 10.1" />
    </svg>
  );
}

export function FilesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 3H18V17H8Z" />
      <path d="M6 7H4V21H14V19" />
      <path d="M11 7H15" />
      <path d="M11 11H15" />
    </svg>
  );
}

export function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 15C20 16.7 18.2 18 16 18H8L4 21V6C4 4.3 5.8 3 8 3H16C18.2 3 20 4.3 20 6V15Z" />
      <path d="M8 9H16" />
      <path d="M8 13H13" />
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20L16.65 16.65" />
    </svg>
  );
}

export function ServerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7H8.01" />
      <path d="M8 17H8.01" />
      <path d="M12 7H16" />
      <path d="M12 17H16" />
    </svg>
  );
}

export function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8V11" />
      <path d="M12 15V17" />
    </svg>
  );
}

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 21V7L12 3L20 7V21" />
      <path d="M9 21V15H15V21" />
      <path d="M8 9H8.01" />
      <path d="M12 9H12.01" />
      <path d="M16 9H16.01" />
      <path d="M8 12H8.01" />
      <path d="M16 12H16.01" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92V20C22 20.6 21.6 21 21 21C11.6 21 4 13.4 4 4C4 3.4 4.4 3 5 3H8.09C8.57 3 8.98 3.34 9.06 3.81L9.56 6.81C9.62 7.18 9.5 7.56 9.22 7.83L7.36 9.7C8.52 12.05 9.95 13.48 12.3 14.64L14.17 12.78C14.44 12.5 14.82 12.38 15.19 12.44L18.19 12.94C18.66 13.02 19 13.43 19 13.91V16.92" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6H20V18H4V6Z" />
      <path d="M4 7L12 13L20 7" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5V19" />
      <path d="M5 12H19" />
    </svg>
  );
}
