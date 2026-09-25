type Tone = "cocoa" | "white";

// Transparent PNGs in public/images. "white" swaps the cocoa linework and
// lettering for white so the logo reads on photos and dark sections.
const sources: Record<Tone, { full: string; mark: string }> = {
  cocoa: { full: "images/logo.png", mark: "images/logo-mark.png" },
  white: { full: "images/logo-white.png", mark: "images/logo-mark-white.png" },
};

export function LogoMark({
  tone = "cocoa",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <img
      src={sources[tone].mark}
      alt="WBeauty Studio"
      width={236}
      height={320}
      decoding="async"
      className={className}
    />
  );
}

export default function Logo({
  tone = "cocoa",
  className,
  showWordmark = true,
}: {
  tone?: Tone;
  className?: string;
  showWordmark?: boolean;
}) {
  if (!showWordmark) return <LogoMark tone={tone} className={className} />;
  return (
    <img
      src={sources[tone].full}
      alt="WBeauty Studio"
      width={512}
      height={480}
      decoding="async"
      className={className}
    />
  );
}
