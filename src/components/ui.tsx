import { useEffect, useRef, useState, type ReactNode } from "react";
import { business } from "../data/site";

/* ----------------------------- Social icons ----------------------------- */

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.2h2.44l.36-2.83H13.5V9.16c0-.82.23-1.38 1.41-1.38h1.5V5.27c-.26-.03-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v2.04H8.06v2.83h2.48V21h2.96Z" />
    </svg>
  );
}

export function SocialButtons({
  tone = "dark",
  className = "",
  size = "md",
}: {
  tone?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-12 w-12",
  };
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-[18px] w-[18px]",
    lg: "h-5 w-5",
  };
  const tones = {
    dark: "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white hover:text-mocha-800",
    light:
      "bg-blush-100 text-mocha-700 ring-1 ring-mocha-200/70 hover:bg-mocha-700 hover:text-ivory",
  };
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={business.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow WBeauty Studio on Instagram"
        className={`group inline-flex ${sizes[size]} items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 ${tones[tone]}`}
      >
        <InstagramIcon className={iconSizes[size]} />
      </a>
      <a
        href={business.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit WBeauty Studio on Facebook"
        className={`group inline-flex ${sizes[size]} items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 ${tones[tone]}`}
      >
        <FacebookIcon className={iconSizes[size]} />
      </a>
    </div>
  );
}

/* -------------------------------- Buttons -------------------------------- */

export function BookButton({
  children = "Book Your Visit",
  className = "",
  light = false,
}: {
  children?: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <a
      href={business.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 ${
        light
          ? "bg-ivory text-mocha-800 hover:bg-white shadow-lg shadow-mocha-900/10"
          : "bg-mocha-700 text-ivory hover:bg-mocha-800 shadow-lg shadow-mocha-800/20"
      } ${className}`}
    >
      {children}
    </a>
  );
}

/* --------------------------------- Stars --------------------------------- */

export function Stars({ className = "h-4 w-4", color = "text-gold-500" }: { className?: string; color?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${color}`} aria-label={`${business.rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className}>
          <path d="M10 1.4l2.52 5.27 5.78.78-4.22 4.02 1.06 5.73L10 14.48l-5.14 2.72 1.06-5.73L1.7 7.45l5.78-.78L10 1.4Z" />
        </svg>
      ))}
    </div>
  );
}

/* ----------------------------- Scroll reveal ----------------------------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/* ----------------------------- Section heading --------------------------- */

export function Eyebrow({ children, tone = "mocha" }: { children: ReactNode; tone?: "mocha" | "light" }) {
  return (
    <span
      className={`ornament text-[11px] font-medium uppercase tracking-[0.34em] ${
        tone === "light" ? "text-blush-200" : "text-mocha-500"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto items-center text-center" : "items-start text-left"} flex max-w-2xl flex-col gap-5 ${className}`}
    >
      <Reveal>
        <Eyebrow tone={light ? "light" : "mocha"}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2
          className={`font-serif text-4xl leading-[1.08] sm:text-5xl ${
            light ? "text-ivory" : "text-mocha-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={200}>
          <p className={`text-base leading-relaxed sm:text-lg ${light ? "text-blush-100/85" : "text-mocha-700/85"}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
