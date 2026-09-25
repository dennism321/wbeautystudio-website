import { useEffect, useState } from "react";
import Menu from "./sections/Menu";
import Logo, { LogoMark } from "./components/Logo";
import { BookButton, Reveal, SectionHeading, SocialButtons, Stars } from "./components/ui";
import { brandPartners, business, testimonials } from "./data/site";

/* -------------------------------- Navbar --------------------------------- */

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div
        className={`overflow-hidden bg-blush-200/95 text-mocha-800 transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.16em] sm:justify-between sm:text-[11.5px]">
          <span className="flex items-center gap-2">
            <span className="text-blush-500">✦</span>
            NEW location — {business.street}, {business.floor}, Hamden
          </span>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 hover:text-mocha-900 sm:inline-flex"
          >
            One minute from the Cheshire line
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`relative z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-ivory/95 shadow-[0_10px_40px_-24px_rgba(83,61,54,0.45)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center" aria-label="WBeauty Studio home">
            {dark ? (
              <>
                <LogoMark tone="white" className="h-24 w-auto sm:hidden" />
                <Logo tone="white" className="hidden h-28 w-auto sm:block sm:h-32" />
              </>
            ) : (
              <>
                <LogoMark tone="cocoa" className="h-24 w-auto sm:hidden" />
                <Logo tone="cocoa" className="hidden h-28 w-auto sm:block sm:h-32" />
              </>
            )}
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-sweep text-[12px] font-medium uppercase tracking-[0.22em] transition-colors ${
                  dark ? "text-white/90 hover:text-white" : "text-mocha-700 hover:text-mocha-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <SocialButtons tone={dark ? "dark" : "light"} size="sm" />
            <BookButton className="!px-6 !py-2.5 !text-[11px]">Book Now</BookButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-px w-7 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                } ${dark ? "text-white" : "text-mocha-800"}`}
              />
              <span className={`block h-px w-7 bg-current transition-opacity ${open ? "opacity-0" : ""} ${dark ? "text-white" : "text-mocha-800"}`} />
              <span
                className={`block h-px w-7 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                } ${dark ? "text-white" : "text-mocha-800"}`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transform bg-ivory transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 pb-10 pt-52">
          <div className="flex flex-col gap-7">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-mocha-800"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto space-y-7">
            <BookButton className="w-full">Book Your Visit</BookButton>
            <div className="flex items-center justify-between">
              <SocialButtons tone="light" />
              <a href={business.phoneHref} className="text-sm tracking-[0.18em] text-mocha-600">
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* --------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="images/hero-glow.jpg"
          alt="Serene woman with glowing, radiant skin at WBeauty Studio in Hamden"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mocha-900/75 via-mocha-900/40 to-mocha-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/70 via-transparent to-mocha-900/30" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-56 sm:px-8">
        <div className="max-w-2xl text-white">
          <Reveal>
            <span className="ornament text-[11px] font-medium uppercase tracking-[0.38em] text-blush-200">
              Hamden, Connecticut · Licensed Esthetician
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-serif text-5xl leading-[1.02] sm:text-7xl">
              Enhance your
              <br />
              <em className="font-medium italic text-blush-200">natural beauty</em>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
              A serene boutique beauty studio for bespoke facials, lifted brows, lovely lashes and
              silky-smooth waxing — where every treatment is tailored entirely to your skin.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookButton light>Book Your Visit</BookButton>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-white ring-1 ring-white/50 transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <Stars className="h-[18px] w-[18px]" color="text-gold-300" />
                <span className="text-sm text-white/85">
                  <strong className="text-white">{business.rating}</strong> · {business.reviewCount} Google
                  reviews
                </span>
              </div>
              <SocialButtons tone="dark" size="sm" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/50" />
      </div>
    </section>
  );
}

/* -------------------------------- Marquee -------------------------------- */

function Marquee() {
  const items = [
    "Signature Glow Facials",
    "Expert Brow Artistry",
    "Lash Lifts & Tints",
    "Gentle Body Waxing",
    "Microcurrent & LED Therapy",
    "Back Facials & Body Rituals",
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee overflow-hidden bg-mocha-800 py-4">
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-serif text-lg italic text-blush-200">{item}</span>
            <span className="text-blush-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- About --------------------------------- */

function About() {
  return (
    <section id="about" className="relative scroll-mt-40 overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blush-200/70 blur-2xl"
            />
            <div className="img-zoom relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(83,61,54,0.55)]">
              <img
                src="images/studio-interior.jpg"
                alt="The calm, blush-toned treatment room at WBeauty Studio"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="float-soft absolute -bottom-8 -right-4 w-52 rounded-2xl bg-white/95 p-5 shadow-xl ring-1 ring-mocha-100 backdrop-blur sm:-right-10">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M10 1.4l2.52 5.27 5.78.78-4.22 4.02 1.06 5.73L10 14.48l-5.14 2.72 1.06-5.73L1.7 7.45l5.78-.78L10 1.4Z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 font-serif text-2xl text-mocha-800">{business.rating} rating</p>
              <p className="text-xs uppercase tracking-[0.16em] text-mocha-400">
                {business.reviewCount} five-star reviews
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Studio"
            title={
              <>
                A quiet escape devoted to <em className="font-medium italic text-mocha-500">your skin</em>
              </>
            }
          />
          <Reveal delay={200}>
            <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-mocha-700/90">
              <p>
                WBeauty Studio is the private practice of Wondeline Colon-Rivera, a licensed
                esthetician and certified acne specialist with a gift for making every guest feel
                genuinely cared for. From the moment you arrive, the studio's soft blush tones, warm
                linens and calming energy invite you to slow down.
              </p>
              <p>
                Every facial is built around a one-on-one skin conversation and performed with
                professional-grade, results-driven brands — from soothing Circadia rituals to the
                clinically proven Face Reality acne program. Whether you're treating yourself to a
                golden-hour glow, a lash lift or a meticulous wax, you leave relaxed, refreshed and
                beautifully yourself.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {brandPartners.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-blush-100 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-mocha-600 ring-1 ring-blush-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-5">
              <LogoMark tone="cocoa" className="h-14 w-auto opacity-90" />
              <div>
                <p className="font-serif text-2xl text-mocha-800">Wondeline Colon-Rivera</p>
                <p className="text-xs uppercase tracking-[0.2em] text-mocha-400">
                  Licensed Esthetician · Owner
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Signature -------------------------------- */

const highlights = [
  {
    img: "images/facial-treatment.jpg",
    title: "Signature Facials",
    text: "Customized Circadia and Face Reality rituals — from the Golden Hour GLOW to the luxe LED-driven LuxeLift.",
  },
  {
    img: "images/skincare-products.jpg",
    title: "Advanced Technology",
    text: "Microcurrent, microdermabrasion, hydrodermabrasion, Celluma LED, oxygen and radio frequency for visible results.",
  },
  {
    img: "images/lashes-brows.jpg",
    title: "Brows & Lashes",
    text: "Lamination, tinting, lash lifts and precision shaping that frame your face with effortless polish.",
  },
  {
    img: "images/body-waxing.jpg",
    title: "Smooth Body Waxing",
    text: "Gentle, meticulous waxing for face, bikini, arms, chest and back — silky skin that lasts for weeks.",
  },
];

function Signature() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We're Known For"
          title={
            <>
              Treatments our guests <em className="font-medium italic text-mocha-500">adore</em>
            </>
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 100}>
              <a
                href="#services"
                className="group relative block h-[440px] overflow-hidden rounded-[1.6rem] shadow-[0_30px_60px_-40px_rgba(83,61,54,0.6)]"
              >
                <img
                  src={h.img}
                  alt={h.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/85 via-mocha-900/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-[26px] leading-tight">{h.title}</h3>
                  <p className="mt-2 max-w-[26ch] text-[13.5px] leading-relaxed text-white/80">
                    {h.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blush-200 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Explore the menu
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Why us --------------------------------- */

const features = [
  {
    title: "Completely personalized",
    text: "No rote routines — each visit begins with your skin, your goals and your day.",
    icon: "M12 3l2.1 4.6 5 .6-3.7 3.4 1 5L12 14.2 7.6 16.6l1-5L4.9 8.2l5-.6L12 3z",
  },
  {
    title: "Licensed & certified",
    text: "A licensed esthetician and certified Face Reality acne specialist you can trust.",
    icon: "M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3zm-2.5 9l1.8 1.8 3.7-3.8",
  },
  {
    title: "Clinical-grade brands",
    text: "Circadia, Face Reality, Celluma LED and Hale & Hush — professional results, gently delivered.",
    icon: "M12 21c-5-3.5-7-7-7-10a5 5 0 019-3 5 5 0 019 3c0 3-2 6.5-7 10z",
  },
  {
    title: "A serene private studio",
    text: "Clean, modern and calming — a little boutique retreat just off Whitney Avenue.",
    icon: "M4 10c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4zm0 4c0 2.2 3.6 4 8 4s8-1.8 8-4M4 10v4m16-4v4",
  },
];

function WhyUs() {
  return (
    <section className="overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="img-zoom h-full min-h-[460px] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(83,61,54,0.55)]">
            <img
              src="images/facial-treatment.jpg"
              alt="Guest relaxing during a facial at WBeauty Studio"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-6 backdrop-blur">
              <p className="font-serif text-2xl italic leading-snug text-mocha-800">
                “She took the time to craft the perfect combination of products for my skin — it made
                such a difference.”
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-mocha-400">
                Janina K. · Google Review
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <SectionHeading
            align="left"
            eyebrow="The Experience"
            title={
              <>
                Why guests keep <em className="font-medium italic text-mocha-500">coming back</em>
              </>
            }
          />
          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-100 text-mocha-600">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={f.icon} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-mocha-900">{f.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-mocha-700/85">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Reviews -------------------------------- */

function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-40 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title={
            <>
              Loved by clients across <em className="font-medium italic text-mocha-500">Hamden & Cheshire</em>
            </>
          }
        />

        <Reveal delay={150}>
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-full bg-white/80 py-3 ring-1 ring-mocha-100">
            <span className="font-serif text-3xl text-mocha-800">{business.rating}</span>
            <div className="h-8 w-px bg-mocha-200" />
            <Stars className="h-4 w-4" />
            <span className="text-sm text-mocha-600">{business.reviewCount} Google reviews</span>
          </div>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90} className="mb-6 break-inside-avoid">
              <figure className="rounded-2xl border border-mocha-100 bg-white/85 p-7 shadow-[0_24px_60px_-44px_rgba(83,61,54,0.55)]">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-4 font-serif text-[19px] italic leading-relaxed text-mocha-800">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-200 font-serif text-sm text-mocha-700">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-mocha-900">{t.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-mocha-400">{t.context}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={business.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-mocha-700 ring-1 ring-mocha-300 transition-colors hover:bg-mocha-700 hover:text-ivory"
          >
            Leave a Google Review
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Visit --------------------------------- */

function Visit() {
  return (
    <section id="visit" className="relative scroll-mt-40 bg-mocha-900 py-24 text-ivory sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(55% 45% at 85% 0%, rgba(210,163,159,0.18) 0%, rgba(65,48,42,0) 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <div className="flex flex-col items-start gap-5">
            <span className="ornament text-[11px] font-medium uppercase tracking-[0.34em] text-blush-300">
              Plan Your Visit
            </span>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Your moment of calm, <em className="font-medium italic text-blush-300">on Whitney Avenue</em>
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            <Reveal>
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-blush-300">Find us</p>
                <p className="mt-2 font-serif text-2xl">{business.street}</p>
                <p className="text-ivory/80">
                  {business.floor} · {business.city}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{business.parkingNote}</p>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-blush-300 hover:text-blush-200"
                >
                  Get Directions
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-blush-300">Hours</p>
                  <ul className="mt-3 space-y-2 text-sm text-ivory/85">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className={h.time === "Closed" ? "italic text-blush-300" : ""}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-blush-300">Contact</p>
                  <a href={business.phoneHref} className="mt-3 block font-serif text-2xl hover:text-blush-200">
                    {business.phone}
                  </a>
                  <a href={business.emailHref} className="mt-2 block break-all text-sm text-ivory/75 hover:text-blush-200">
                    {business.email}
                  </a>
                  <div className="mt-5">
                    <SocialButtons tone="dark" size="sm" />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <BookButton light className="w-full sm:w-auto">
                Reserve Your Appointment
              </BookButton>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <Reveal delay={150} className="relative">
          <div className="h-full min-h-[420px] overflow-hidden rounded-[2rem] ring-1 ring-white/15">
            <iframe
              title="Map to WBeauty Studio at 4130 Whitney Avenue, Hamden, CT"
              src={business.mapEmbed}
              className="h-full min-h-[420px] w-full grayscale-[0.2] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- CTA ----------------------------------- */

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-blush-200 py-24 text-center sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(236,217,217,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-5">
        <Reveal>
          <LogoMark tone="cocoa" className="mx-auto h-24 w-auto opacity-90" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 font-serif text-4xl text-mocha-900 sm:text-6xl">
            Your <em className="italic">glow</em> awaits
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-lg text-mocha-700/90">
            Reserve your treatment in just a few taps through Square — and follow along for skincare
            tips, seasonal specials and studio moments.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <BookButton>Book Your Visit</BookButton>
            <a
              href={business.phoneHref}
              className="inline-flex items-center rounded-full px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-mocha-800 ring-1 ring-mocha-400/60 transition-all hover:bg-white/60"
            >
              {business.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <SocialButtons tone="light" size="lg" className="mt-8 justify-center" />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Footer --------------------------------- */

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#372822] pb-10 pt-20 text-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="white" className="h-24 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/65">
              {business.tagline} — a boutique beauty studio in Hamden, Connecticut, specializing in
              facials, brows, lashes and body waxing.
            </p>
            <SocialButtons tone="dark" size="sm" className="mt-6" />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-blush-300">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-blush-200">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blush-200">
                  Book Online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-blush-300">Services</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              <li><a href="#services" className="hover:text-blush-200">Glow Facials</a></li>
              <li><a href="#services" className="hover:text-blush-200">Brows & Lashes</a></li>
              <li><a href="#services" className="hover:text-blush-200">Body Waxing</a></li>
              <li><a href="#services" className="hover:text-blush-200">Back Facials</a></li>
              <li><a href="#services" className="hover:text-blush-200">LED & Nano-Infusion</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-blush-300">Visit</p>
            <address className="mt-5 space-y-2 text-sm not-italic text-ivory/75">
              <p>
                {business.street}, {business.floor}
                <br />
                {business.city}
              </p>
              <p>
                <a href={business.phoneHref} className="hover:text-blush-200">{business.phone}</a>
              </p>
              <p>
                <a href={business.emailHref} className="break-all hover:text-blush-200">{business.email}</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[11px] uppercase tracking-[0.18em] text-ivory/45 sm:flex-row">
          <p>© {year} {business.llc}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-blush-300" />
            Appointments securely booked through Square
          </p>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------- App ----------------------------------- */

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    image: "images/hero-glow.jpg",
    telephone: business.phone,
    email: business.email,
    url: business.linktree,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: "Hamden",
      addressRegion: "CT",
      postalCode: "06518",
      addressCountry: "US",
    },
    openingHours: ["Mo-Th 09:00-19:00", "Fr 09:00-17:00", "Sa 09:00-16:00"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-ivory">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Signature />
        <Menu />
        <WhyUs />
        <Reviews />
        <Visit />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
