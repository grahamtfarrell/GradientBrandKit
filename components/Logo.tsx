export function Logo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-white.svg"
      alt="Gradient MGMT"
      className={className}
    />
  );
}
