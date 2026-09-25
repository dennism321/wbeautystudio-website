import { useMemo, useState } from "react";
import { business, categories, services, type Category } from "../data/site";
import { BookButton, Reveal, SectionHeading } from "../components/ui";

const categoryIcon: Record<string, string> = {
  Facials: "❀",
  Lashes: "❁",
  Brows: "✦",
  Waxing: "~",
  Body: "❋",
  "Add-Ons": "+",
};

export default function Menu() {
  const [active, setActive] = useState<"All" | Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    services.forEach((s) => map.set(s.category, (map.get(s.category) ?? 0) + 1));
    return map;
  }, []);

  return (
    <section id="services" className="relative scroll-mt-24 bg-ivory py-24 sm:py-32">
      {/* soft background flourish */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(236,217,217,0.55) 0%, rgba(251,247,242,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Every treatment, <em className="font-medium italic text-mocha-500">thoughtfully yours</em>
            </>
          }
          intro="A curated collection of facials, lash and brow artistry, gentle waxing and body rituals — all personalized to your skin and booked securely through Square."
        />

        {/* Category pills */}
        <Reveal delay={150} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "bg-mocha-700 text-ivory shadow-md shadow-mocha-700/25"
                      : "bg-white/70 text-mocha-600 ring-1 ring-mocha-200/80 hover:bg-blush-100 hover:text-mocha-800"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className={`ml-1.5 text-[10px] ${isActive ? "text-blush-200" : "text-mocha-400"}`}>
                      {counts.get(cat)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) * 90}>
              <article
                className={`lift group relative flex h-full flex-col rounded-2xl border bg-white/80 p-7 backdrop-blur-sm ${
                  service.popular
                    ? "border-blush-300 shadow-[0_18px_50px_-30px_rgba(154,122,108,0.55)]"
                    : "border-mocha-200/60 shadow-[0_18px_50px_-38px_rgba(83,61,54,0.5)]"
                } hover:border-blush-300`}
              >
                {service.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-blush-400 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
                    Beloved
                  </span>
                )}
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-[11px] uppercase tracking-[0.26em] text-sage-600">
                    {service.category}
                  </span>
                  <span aria-hidden="true" className="text-blush-400">
                    {categoryIcon[service.category]}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-[26px] leading-tight text-mocha-900">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-mocha-700/85">
                  {service.blurb}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-mocha-100 pt-5">
                  <div className="flex flex-col">
                    {service.price !== undefined ? (
                      <span className="font-serif text-2xl text-mocha-800">
                        ${service.price.toLocaleString()}
                      </span>
                    ) : (
                      <span className="font-serif text-lg italic text-mocha-500">
                        priced at booking
                      </span>
                    )}
                    {service.duration && (
                      <span className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-mocha-400">
                        {service.duration}
                      </span>
                    )}
                  </div>
                  <a
                    href={business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-blush-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-mocha-700 transition-colors duration-300 hover:bg-mocha-700 hover:text-ivory"
                  >
                    Book
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Footer note + CTA */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-blush-200 bg-blush-50 px-8 py-10 text-center sm:px-14">
            <p className="max-w-2xl text-[15px] leading-relaxed text-mocha-700/90">
              Looking to customize? Most facials welcome <strong className="text-mocha-800">LED</strong> or{" "}
              <strong className="text-mocha-800">Nano-Infusion</strong> upgrades, and multiple services can be
              combined in a single appointment. Connecticut sales tax applies — see the live Square menu for the
              most current pricing and availability.
            </p>
            <BookButton>View Full Menu & Book</BookButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
