import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
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
