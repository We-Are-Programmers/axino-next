"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });

    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);
}
