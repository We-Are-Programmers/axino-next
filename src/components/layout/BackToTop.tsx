"use client";

import { useBackToTop } from "@/hooks/useBackToTop";

export function BackToTop() {
  const { visible, scrollToTop } = useBackToTop();

  return (
    <div className={`back-to-top-wrapper${visible ? " back-to-top-btn-show" : ""}`}>
      <button
        id="back_to_top"
        type="button"
        className="back-to-top-btn"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-angle-up" />
      </button>
    </div>
  );
}
