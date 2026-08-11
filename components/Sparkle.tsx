interface SparkleProps {
  className?: string;
}

export default function Sparkle({ className = "h-5 w-5" }: SparkleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L13.7 8.3L20.5 3.5L15.7 10.3L24 12L15.7 13.7L20.5 20.5L13.7 15.7L12 24L10.3 15.7L3.5 20.5L8.3 13.7L0 12L8.3 10.3L3.5 3.5L10.3 8.3L12 0Z" />
    </svg>
  );
}
