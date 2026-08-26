export function Wordmark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/wordmark.svg"
      alt="Gradient MGMT brand"
      className={className}
    />
  );
}
