interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
  light?: boolean; // true when on a dark background
}

export default function SectionHeading({ children, id, light }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        id={id}
        className={`font-heading text-section font-bold scroll-mt-24 ${
          light ? "text-white" : "text-brand-ink"
        }`}
      >
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-pink" />
    </div>
  );
}
