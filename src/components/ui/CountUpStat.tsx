"use client";

import { useCountUp } from "@/hooks/useCountUp";

export function CountUpStat({ value }: { value: number }) {
  const { count, ref } = useCountUp({ end: value, duration: 2500 });

  return (
    <span ref={ref} className="count-text">
      {count}
    </span>
  );
}
