import type { ReactNode } from "react";

/**
 * Shared building blocks for the legal pages
 * (Privacy Policy, Community Guidelines, Terms of Use).
 *
 * These match the site's existing design language:
 *   font-inter · accent #C01522 · body #515151 · headings #1A1A1A
 *
 * NOTE: This layout assumes <Navbar /> and <Footer /> are rendered by your
 * root app/layout.tsx (the common App Router pattern). The top padding below
 * clears the fixed navbar (h-64px mobile / h-90px desktop). If your Navbar/
 * Footer are NOT in the root layout, just wrap each page's content with them.
 */

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  children: ReactNode;
};

export function LegalLayout({ title, lastUpdated, intro, children }: LegalLayoutProps) {
  return (
    <main className="w-full bg-white font-inter text-[#515151]">
      <div className="mx-auto max-w-[920px] px-[20px] md:px-[60px] pt-[104px] md:pt-[160px] pb-[70px] md:pb-[120px]">
        <header className="mb-[32px] md:mb-[52px] border-b border-[#EAEAEA] pb-[24px] md:pb-[36px]">
          <p className="mb-[12px] font-medium uppercase tracking-[0.14em] text-[11px] md:text-[13px] text-[#C01522]">
            Legal
          </p>
          <h1 className="font-inter font-semibold leading-[1.1] text-[30px] md:text-[46px] text-[#1A1A1A]">
            {title}
          </h1>
          <p className="mt-[14px] text-[13px] md:text-[15px] text-[#8A8A8A]">
            Last updated on: {lastUpdated}
          </p>
        </header>

        {intro ? (
          <div className="mb-[36px] md:mb-[48px] text-[14px] md:text-[16px] leading-[24px] md:leading-[28px]">
            {intro}
          </div>
        ) : null}

        <div className="flex flex-col gap-[34px] md:gap-[44px] text-[14px] md:text-[16px] leading-[25px] md:leading-[29px]">
          {children}
        </div>
      </div>
    </main>
  );
}

/* A top-level numbered / titled section, e.g. "1. PRELIMINARY". */
export function Section({
  heading,
  id,
  children,
}: {
  heading?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[120px] flex flex-col gap-[14px] md:gap-[18px]">
      {heading ? (
        <h2 className="font-inter font-semibold text-[19px] md:text-[26px] leading-[1.25] text-[#1A1A1A]">
          {heading}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

/* A numbered clause like "1.1" with hanging indentation. */
export function Clause({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <p className="flex gap-[10px] md:gap-[14px]">
      {n ? <span className="shrink-0 font-semibold text-[#333333]">{n}</span> : null}
      <span className="min-w-0">{children}</span>
    </p>
  );
}

/* A sub-heading inside a section (no number). */
export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-[6px] font-inter font-semibold text-[16px] md:text-[19px] text-[#1A1A1A]">
      {children}
    </h3>
  );
}

/* Bulleted or lettered list. Pass `variant="alpha"` for (a)(b)(c) style. */
export function LegalList({
  items,
  variant = "disc",
}: {
  items: ReactNode[];
  variant?: "disc" | "alpha" | "roman";
}) {
  const marker =
    variant === "alpha"
      ? "list-[lower-alpha]"
      : variant === "roman"
      ? "list-[lower-roman]"
      : "list-disc";
  return (
    <ul className={`${marker} pl-[22px] md:pl-[26px] flex flex-col gap-[8px] md:gap-[10px] marker:text-[#C01522]`}>
      {items.map((item, i) => (
        <li key={i} className="pl-[4px]">
          {item}
        </li>
      ))}
    </ul>
  );
}

/* Inline emphasis for defined terms / labels. */
export function Term({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-[#333333]">{children}</span>;
}

/* Styled link matching the site's hover accent. */
export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-[#C01522] underline underline-offset-2 decoration-[#C01522]/40 hover:decoration-[#C01522] transition-colors break-words"
    >
      {children}
    </a>
  );
}