export function TopoLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 120"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }, (_, i) => {
        const y = 12 + i * 11;
        const amp = 10 + i * 1.4;
        return (
          <path
            key={i}
            d={`M0 ${y} C 50 ${y - amp}, 110 ${y + amp}, 160 ${y} S 220 ${y - amp}, 240 ${y}`}
            stroke="currentColor"
            strokeWidth="0.9"
          />
        );
      })}
    </svg>
  );
}
