interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        id={id}
        className="font-heading text-section font-bold text-cream-50 scroll-mt-24"
      >
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-500" />
    </div>
  );
}
