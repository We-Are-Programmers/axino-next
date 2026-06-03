"use client";

import { useEffect, useState } from "react";

export function usePreloader(delayMs = 500) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), delayMs);
    return () => window.clearTimeout(timer);
  }, [delayMs]);

  return hidden;
}
