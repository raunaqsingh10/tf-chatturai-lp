"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaLeadTracker() {
  useEffect(() => {
    let attempts = 0;

    const interval = window.setInterval(() => {
      attempts += 1;

      if (!window.fbq && attempts < 20) return;

      window.clearInterval(interval);
      window.fbq?.("track", "Lead");
    }, 250);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
