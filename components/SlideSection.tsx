import Image from "next/image";
import {
  SLIDE_HEIGHT,
  SLIDE_WIDTH,
  slideSrc,
  type Slide,
} from "@/lib/slides";

export function SlideSection({
  slide,
  preload = false,
}: {
  slide: Slide;
  preload?: boolean;
}) {
  return (
    <section
      id={slide.slug}
      className="scroll-mt-16 py-1.5 lg:scroll-mt-4 lg:py-2"
      aria-label={slide.title}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={slideSrc(slide.id)}
          alt={slide.title}
          width={SLIDE_WIDTH}
          height={SLIDE_HEIGHT}
          sizes="(max-width: 1024px) 100vw, calc(100vw - 240px)"
          preload={preload}
          unoptimized
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
