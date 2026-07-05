import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "playback-id"?: string;
        "stream-type"?: string;
        poster?: string;
        controls?: boolean;
        playsinline?: boolean;
        muted?: boolean;
        loop?: boolean;
        autoPlay?: boolean;
        preload?: string;
      };
    }
  }
}
