"use client";

import { useEffect } from "react";

export function useStickyHeader() {
  useEffect(() => {
    const siteHeader = document.querySelector(".header-style-one");
    const stickyHeader = document.querySelector(".sticky-header");

    const onScroll = () => {
      const y = window.scrollY;
      stickyHeader?.classList.toggle("fixed-header", y > 100);
      stickyHeader?.classList.toggle("animated", y > 100);
      stickyHeader?.classList.toggle("slideInDown", y > 100);
      siteHeader?.classList.toggle("fixed-header", y > 1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
