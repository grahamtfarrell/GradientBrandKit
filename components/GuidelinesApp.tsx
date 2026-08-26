"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { Logo } from "@/components/Logo";
import { Sidebar } from "@/components/Sidebar";
import { SlideSection } from "@/components/SlideSection";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { DOWNLOAD_FILENAME, DOWNLOAD_HREF, SLIDES } from "@/lib/slides";

const CONTENT_SLIDES = SLIDES.filter((slide) => slide.id !== 1);

export function GuidelinesApp() {
  const [open, setOpen] = useState(false);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const ids = useMemo(() => CONTENT_SLIDES.map((slide) => slide.slug), []);
  const spyId = useScrollSpy(ids);
  const activeId = pinnedId ?? spyId;
  const drawerId = useId();
  const pinTimer = useRef<number | null>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const resetToLander = () => {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
      window.scrollTo(0, 0);
    };
    resetToLander();
    const frame = window.requestAnimationFrame(resetToLander);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const chrome = chromeRef.current;
    if (!chrome) return;

    const update = () => {
      setShowMobileBar(chrome.getBoundingClientRect().bottom <= 8);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (pinTimer.current) window.clearTimeout(pinTimer.current);
    };
  }, []);

  function navigate(slug: string) {
    setPinnedId(slug);
    if (pinTimer.current) window.clearTimeout(pinTimer.current);
    pinTimer.current = window.setTimeout(() => setPinnedId(null), 900);
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${slug}`);
    setOpen(false);
  }

  return (
    <div className="min-h-full bg-canvas text-ink">
      <a
        href="#introduction"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>

      <Hero chromeRef={chromeRef} />

      <header
        className={`fixed inset-x-0 top-0 z-50 grid h-14 grid-cols-[1fr_auto_1fr] items-center bg-black px-3 lg:hidden ${
          showMobileBar || open
            ? "translate-y-0"
            : "pointer-events-none -translate-y-full"
        } transition-transform duration-200`}
        aria-hidden={!(showMobileBar || open)}
      >
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center justify-self-start text-white"
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
        <a href="#cover" className="justify-self-center">
          <Logo className="h-[18px] w-auto" />
        </a>
        <a
          href={DOWNLOAD_HREF}
          download={DOWNLOAD_FILENAME}
          className="justify-self-end rounded-full border border-white px-3 py-1 text-[11px] font-medium text-white"
        >
          Download
        </a>
      </header>

      {open ? (
        <div className="fixed inset-0 top-14 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id={drawerId}
            className="absolute inset-y-0 left-0 w-[min(100%,280px)] overflow-y-auto p-3"
          >
            <Sidebar activeId={activeId} onNavigate={navigate} />
          </div>
        </div>
      ) : null}

      <div className="flex w-full items-start gap-3 px-3 py-3 lg:gap-4 lg:px-4 lg:py-4">
        <aside className="sticky top-4 hidden max-h-[calc(100vh-2rem)] w-[200px] shrink-0 self-start lg:block">
          <Sidebar activeId={activeId} onNavigate={navigate} />
        </aside>

        <main className="min-w-0 flex-1">
          {CONTENT_SLIDES.map((slide, index) => (
            <SlideSection
              key={slide.slug}
              slide={slide}
              preload={index < 2}
            />
          ))}
          <footer className="border-t border-black/15 px-2 py-8 text-[12px] text-muted">
            Gradient MGMT Brand Guidelines 2026 · Created by{" "}
            <a
              href="https://infinitefun.art/"
              className="text-navy underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Infinite Fun Studio
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
      {open ? (
        <>
          <path d="M1 1 L17 13" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 1 L1 13" stroke="currentColor" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <path d="M0 1 H18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 7 H18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0 13 H18" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
