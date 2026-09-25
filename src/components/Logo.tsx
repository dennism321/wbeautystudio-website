type Tone = "cocoa" | "white";

const palette: Record<
  Tone,
  { stroke: string; pink: string; pinkVein: string; sage: string; sageVein: string; text: string }
> = {
  cocoa: {
    stroke: "#927064",
    pink: "#ecb8b1",
    pinkVein: "#f7e4e0",
    sage: "#9fa583",
    sageVein: "#d7dbc8",
    text: "#927064",
  },
  white: {
    stroke: "#ffffff",
    pink: "#f2d3cf",
    pinkVein: "#fbe7e4",
    sage: "#d2d6c0",
    sageVein: "#e9ecdf",
    text: "#ffffff",
  },
};

function MarkGraphics({ tone }: { tone: Tone }) {
  const c = palette[tone];
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Pink leaf */}
      <path
        d="M150 214 C142 172 112 120 86 96 C116 104 146 150 150 214 Z"
        fill={c.pink}
        stroke="none"
      />
      <path d="M145 206 C131 166 103 118 92 102" stroke={c.pinkVein} strokeWidth="2" />
      {/* Sage leaf */}
      <path
        d="M154 236 C140 204 116 172 96 158 C128 166 152 202 154 236 Z"
        fill={c.sage}
        stroke="none"
      />
      <path d="M149 228 C135 200 111 172 100 162" stroke={c.sageVein} strokeWidth="2" />

      {/* Hair silhouette */}
      <path
        d="M176 24 C128 12 86 34 70 92 C52 156 70 218 106 252 C124 270 142 284 132 298"
        stroke={c.stroke}
        strokeWidth="6"
      />
      {/* Profile */}
      <path
        d="M176 24 C192 30 204 40 204 52 C204 60 198 64 198 72 C198 80 206 84 214 88 C230 94 240 98 234 106 C230 111 222 110 220 115 C219 119 232 120 231 126 C230 132 220 131 216 136 C206 150 182 162 166 190 C156 208 150 230 160 248"
        stroke={c.stroke}
        strokeWidth="6"
      />
      {/* Eyebrow */}
      <path d="M190 62 C200 56 211 56 219 62" stroke={c.stroke} strokeWidth="3.4" />
      {/* Closed eye */}
      <path d="M188 76 C197 82 207 82 213 75" stroke={c.stroke} strokeWidth="3.4" />
    </g>
  );
}

export function LogoMark({
  tone = "cocoa",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 260 300" className={className} role="img" aria-label="WBeauty Studio">
      <MarkGraphics tone={tone} />
    </svg>
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
  const c = palette[tone];
  return (
    <svg
      viewBox={showWordmark ? "0 0 440 540" : "0 0 260 300"}
      className={className}
      role="img"
      aria-label="WBeauty Studio"
    >
      {showWordmark ? (
        <g transform="translate(90, 8)">
          <MarkGraphics tone={tone} />
        </g>
      ) : (
        <MarkGraphics tone={tone} />
      )}
      {showWordmark && (
        <g fill={c.text}>
          <text
            x="220"
            y="412"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontWeight={500}
            fontSize="96"
            letterSpacing="1"
          >
            WBeauty
          </text>
          <line x1="96" y1="452" x2="150" y2="452" stroke={c.text} strokeWidth="1.6" />
          <text
            x="228"
            y="462"
            textAnchor="middle"
            fontFamily="'Jost', sans-serif"
            fontWeight={300}
            fontSize="30"
            letterSpacing="20"
          >
            STUDIO
          </text>
          <line x1="290" y1="452" x2="344" y2="452" stroke={c.text} strokeWidth="1.6" />
        </g>
      )}
    </svg>
  );
}
