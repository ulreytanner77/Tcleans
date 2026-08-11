import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  ariaLabel?: string;
}

const variantStyles = {
  primary:
    "bg-brand-pink-deep text-white hover:opacity-90 font-semibold",
  secondary:
    "bg-brand-ink text-white hover:opacity-90 font-semibold",
  outline:
    "border-2 border-brand-pink-deep text-brand-pink-deep hover:bg-brand-pink-deep hover:text-white font-semibold",
};

export default function CTAButton({
  href,
  variant = "primary",
  children,
  ariaLabel,
}: CTAButtonProps) {
  const classes = `inline-block rounded-lg px-6 py-3 text-sm tracking-wide uppercase transition-colors duration-200 ${variantStyles[variant]}`;

  // Use anchor for tel:, sms:, and mailto: links
  if (href.startsWith("tel:") || href.startsWith("sms:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
