import { getNavGroups } from "@/lib/slides";

type SidebarProps = {
  activeId: string;
  onNavigate: (slug: string) => void;
};

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const groups = getNavGroups().filter((group) => group.id !== "cover");

  return (
    <nav
      className="nav-helvetica nav-box max-h-[calc(100vh-2rem)] overscroll-contain bg-black px-4 py-5 text-white"
      aria-label="Brand guidelines"
    >
      {groups.map((group) => {
          const nested = group.items.length > 1;
          const groupActive =
            activeId === group.landing.slug ||
            group.items.some((slide) => slide.slug === activeId);
          const label = group.number
            ? `${group.number} ${group.label}`
            : group.label;

          return (
            <div key={group.id} className="mb-4 last:mb-0">
              <button
                type="button"
                onClick={() => onNavigate(group.landing.slug)}
                className={`nav-title block w-full text-left text-[15px] leading-snug tracking-[-0.01em] ${
                  groupActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {label}
              </button>
              {nested ? (
                <ul className="mt-1.5 space-y-0.5 pl-2">
                  {group.items.map((slide) => {
                    const current = activeId === slide.slug;
                    return (
                      <li key={slide.slug}>
                        <a
                          href={`#${slide.slug}`}
                          onClick={(event) => {
                            event.preventDefault();
                            onNavigate(slide.slug);
                          }}
                          className={`nav-thin block py-0.5 text-[13px] leading-snug ${
                            current
                              ? "text-white"
                              : "text-white/55 hover:text-white/85"
                          }`}
                        >
                          {slide.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
    </nav>
  );
}
