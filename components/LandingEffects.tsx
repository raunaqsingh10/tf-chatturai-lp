"use client";

import { useEffect } from "react";
import { captureTrackingParams, decorateTrackingLinks } from "@/lib/tracking";

export default function LandingEffects() {
  useEffect(() => {
    captureTrackingParams();
    decorateTrackingLinks();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      revealObserver.observe(element);
    });

    const accordionButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".acc-q"));
    const accordionCleanups = accordionButtons.map((button) => {
      const onClick = () => {
        const item = button.parentElement;
        const answer = item?.querySelector<HTMLElement>(".acc-a");
        if (!item || !answer) return;

        const isOpen = item.classList.contains("open");

        document.querySelectorAll<HTMLElement>(".acc-item.open").forEach((openItem) => {
          openItem.classList.remove("open");
          const openAnswer = openItem.querySelector<HTMLElement>(".acc-a");
          if (openAnswer) openAnswer.style.maxHeight = "";
        });

        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      };

      button.addEventListener("click", onClick);
      return () => button.removeEventListener("click", onClick);
    });

    return () => {
      revealObserver.disconnect();
      accordionCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
