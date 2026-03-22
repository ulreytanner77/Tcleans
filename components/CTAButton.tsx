interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-amber-500 text-charcoal-950 hover:bg-amber-400 font-semibold",
  secondary:
    "bg-charcoal-700 text-cream-50 hover:bg-charcoal-800 font-semibold",
  outline:
    "border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-charcoal-950 font-semibold",
};

export default function CTAButton({
  href,
  variant = "primary",
  children,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-lg px-6 py-3 text-sm tracking-wide uppercase transition-colors duration-200 ${variantStyles[variant]}`}
    >
      {children}
    </a>
  );
}
