export type VideoEventName =
  | "video_play"
  | "video_25"
  | "video_50"
  | "video_75"
  | "video_complete";

type VideoEventPayload = {
  videoId: string;
  videoTitle: string;
  trackingName: string;
  section: "hero" | "proof" | "testimonial";
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackVideoEvent(event: VideoEventName, payload: VideoEventPayload) {
  if (typeof window === "undefined") return;

  const detail = {
    event,
    ...payload,
  };

  window.dataLayer?.push(detail);
  window.dispatchEvent(new CustomEvent("chatturai:video-event", { detail }));
}
