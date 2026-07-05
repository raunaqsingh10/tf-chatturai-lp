"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { VideoAsset } from "@/lib/videos";
import { trackVideoEvent } from "@/lib/videoTracking";

type MuxVideoProps = {
  video: VideoAsset;
  section: "hero" | "proof" | "testimonial";
  mode?: "click" | "autoplay";
  playLabel?: string;
};

const MUX_PLAYER_SRC = "https://cdn.jsdelivr.net/npm/@mux/mux-player@3/dist/mux-player.mjs";
let muxPlayerPromise: Promise<void> | null = null;

function loadMuxPlayer() {
  if (typeof window === "undefined") return Promise.resolve();
  if (customElements.get("mux-player")) return Promise.resolve();
  if (muxPlayerPromise) return muxPlayerPromise;

  muxPlayerPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${MUX_PLAYER_SRC}"]`,
    );

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Mux player failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = MUX_PLAYER_SRC;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("Mux player failed to load")), {
      once: true,
    });
    document.head.appendChild(script);
  });

  return muxPlayerPromise;
}

export default function MuxVideo({
  video,
  section,
  mode = "click",
  playLabel = "Play film",
}: MuxVideoProps) {
  const playerRef = useRef<HTMLElement>(null);
  const milestones = useRef(new Set<number>());
  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(mode === "autoplay");
  const [hasError, setHasError] = useState(false);
  const aspectRatio = video.aspectRatio ?? "16 / 9";

  useEffect(() => {
    if (!video.playbackId) return;

    loadMuxPlayer()
      .then(() => setIsReady(true))
      .catch(() => setHasError(true));
  }, [video.playbackId]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || !video.playbackId) return;

    const payload = {
      videoId: video.id,
      videoTitle: video.title,
      trackingName: video.trackingName,
      section,
    };

    const onPlay = () => trackVideoEvent("video_play", payload);
    const onEnded = () => trackVideoEvent("video_complete", payload);
    const onError = () => setHasError(true);
    const onTimeUpdate = () => {
      const duration = Number((player as HTMLMediaElement).duration);
      const currentTime = Number((player as HTMLMediaElement).currentTime);
      if (!duration || Number.isNaN(duration)) return;

      const progress = currentTime / duration;
      [
        [0.25, "video_25"],
        [0.5, "video_50"],
        [0.75, "video_75"],
      ].forEach(([threshold, eventName]) => {
        if (progress < (threshold as number) || milestones.current.has(threshold as number)) return;
        milestones.current.add(threshold as number);
        trackVideoEvent(eventName as Parameters<typeof trackVideoEvent>[0], payload);
      });
    };

    player.addEventListener("play", onPlay);
    player.addEventListener("ended", onEnded);
    player.addEventListener("error", onError);
    player.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      player.removeEventListener("play", onPlay);
      player.removeEventListener("ended", onEnded);
      player.removeEventListener("error", onError);
      player.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [section, video]);

  const startVideo = () => {
    setHasStarted(true);
    requestAnimationFrame(() => {
      void (playerRef.current as HTMLMediaElement | null)?.play?.();
    });
  };

  if (!video.playbackId) {
    return (
      <div
        className={`film mux-frame${section === "hero" ? " hero-film" : ""}`}
        style={{ "--video-aspect": aspectRatio } as React.CSSProperties}
        aria-label={`${video.title} preview`}
      >
        <div className="video-loading">Film preview unavailable</div>
      </div>
    );
  }

  return (
    <div
      className={`film mux-frame${section === "hero" ? " hero-film" : ""}`}
      style={{ "--video-aspect": aspectRatio } as React.CSSProperties}
    >
      {video.poster ? (
        <Image src={video.poster} alt="" className="mux-poster" fill sizes="100vw" />
      ) : null}
      {hasError ? <div className="video-error">This film could not load. Please refresh.</div> : null}
      {!isReady && !hasError ? <div className="video-loading">Loading film</div> : null}
      {isReady ? (
        <mux-player
          ref={playerRef}
          className="mux-player"
          playback-id={video.playbackId}
          stream-type="on-demand"
          poster={video.poster}
          controls
          playsinline
          muted={mode === "autoplay"}
          loop={mode === "autoplay"}
          autoPlay={mode === "autoplay"}
          preload={mode === "autoplay" ? "auto" : "metadata"}
          style={{ display: hasStarted ? "block" : "none" }}
        />
      ) : null}
      {mode !== "autoplay" && !hasStarted && isReady && !hasError ? (
        <button className="video-play" type="button" onClick={startVideo}>
          <span className="play-mark" />
          {playLabel}
        </button>
      ) : null}
      {mode === "autoplay" && isReady ? <div className="sound">Sound off</div> : null}
    </div>
  );
}
