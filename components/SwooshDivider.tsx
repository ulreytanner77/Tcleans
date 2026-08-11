interface SwooshDividerProps {
  fromColor: string; // CSS color value (e.g. "#ffffff", "var(--color-brand-plum)")
  toColor: string;
  flip?: boolean;
}

export default function SwooshDivider({
  fromColor,
  toColor,
  flip = false,
}: SwooshDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16 md:h-20"
        style={{ fill: toColor }}
      >
        <path d="M0,80 L0,45 Q360,0 720,45 Q1080,80 1440,35 L1440,80 Z" />
      </svg>
    </div>
  );
}
