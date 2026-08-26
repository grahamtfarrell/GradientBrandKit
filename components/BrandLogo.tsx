export function BrandLogo({
  className = "",
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  if (markOnly) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/brand/icon-navy.svg"
        alt="Gradient MGMT"
        className={className}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-navy.svg"
      alt="Gradient MGMT"
      className={className}
    />
  );
}
