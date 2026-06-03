"use client";

import { usePreloader } from "@/hooks/usePreloader";

export function Preloader() {
  const hidden = usePreloader(600);

  if (hidden) return null;

  return (
    <div className="preloader" style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.5s" }}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>
      <div className="preloader-heading">
        <div className="load-text">
          {"Loading".split("").map((char, index) => (
            <span key={`${char}-${index}`}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
