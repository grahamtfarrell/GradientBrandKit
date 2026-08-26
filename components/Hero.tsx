import type { Ref } from "react";
import { Wordmark } from "@/components/Wordmark";
import { DOWNLOAD_FILENAME, DOWNLOAD_HREF } from "@/lib/slides";

export function Hero({ chromeRef }: { chromeRef?: Ref<HTMLDivElement> }) {
  return (
    <header id="cover" className="relative h-[50vh] min-h-[340px] w-full overflow-hidden bg-black">
      {/* Native img so the banner is never run through next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-8">
        <div
          ref={chromeRef}
          className="relative z-10 flex items-center justify-between gap-4"
        >
          <a href="#cover" className="shrink-0">
            <Wordmark className="h-[14px] w-auto" />
          </a>
          <a
            href={DOWNLOAD_HREF}
            download={DOWNLOAD_FILENAME}
            className="shrink-0 rounded-full border border-white px-4 py-1.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-white/10 sm:px-5"
          >
            Download assets
          </a>
        </div>
        <h1 className="hero-title relative z-10 max-w-[10em] font-semibold tracking-[-0.04em] text-white">
          Brand
          <br />
          Guidelines
        </h1>
      </div>
    </header>
  );
}
