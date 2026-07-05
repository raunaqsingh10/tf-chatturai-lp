export type VideoAsset = {
  id: string;
  title: string;
  trackingName: string;
  playbackId: string;
  poster?: string;
  aspectRatio?: string;
};

export const videos = {
  hero: {
    id: "hero",
    title: "Chatturai hero film",
    trackingName: "hero",
    playbackId: "sJeEUWg6LNrqNA1iIrIKFiLhac91019XxkCweHGWH6Ds",
    poster:
      "https://image.mux.com/sJeEUWg6LNrqNA1iIrIKFiLhac91019XxkCweHGWH6Ds/thumbnail.webp?time=2",
    aspectRatio: "16 / 9",
  },
  kibosh: {
    id: "kibosh",
    title: "Kibosh cybersecurity brand film",
    trackingName: "kibosh",
    playbackId: "afYO5kviunxBNEyF3DSM18yCs7cSsMMeo78K2L100H6Q",
    poster:
      "https://image.mux.com/afYO5kviunxBNEyF3DSM18yCs7cSsMMeo78K2L100H6Q/thumbnail.webp?time=2",
    aspectRatio: "16 / 9",
  },
  decathlon: {
    id: "decathlon",
    title: "Decathlon emotional sports concept film",
    trackingName: "decathlon",
    playbackId: "EZdT7OxK5fNyax6aDXoAo026M02s13kuw5riqHEc71IdY",
    poster:
      "https://image.mux.com/EZdT7OxK5fNyax6aDXoAo026M02s13kuw5riqHEc71IdY/thumbnail.webp?time=18",
    aspectRatio: "16 / 9",
  },
  activeFitness: {
    id: "active-fitness",
    title: "Home Gym Equipment brand film",
    trackingName: "active_fitness",
    playbackId: "ZjDCaVJO7UVm007T7V9T02V83RknJGi8BMKSjhtSg3fJM",
    poster:
      "https://image.mux.com/ZjDCaVJO7UVm007T7V9T02V83RknJGi8BMKSjhtSg3fJM/thumbnail.webp?time=4",
    aspectRatio: "16 / 9",
  },
  testimonialCarlos: {
    id: "testimonial-carlos",
    title: "Carlos Reyes testimonial",
    trackingName: "testimonial_carlos",
    playbackId: "RdkDq5KLnvJkqYdkyc9BpsptY5LyKNnc29GSnKKW02XA",
    poster:
      "https://image.mux.com/RdkDq5KLnvJkqYdkyc9BpsptY5LyKNnc29GSnKKW02XA/thumbnail.webp?time=4",
    aspectRatio: "16 / 9",
  },
  testimonialJesse: {
    id: "testimonial-jesse",
    title: "Jesse Navarro testimonial",
    trackingName: "testimonial_jesse",
    playbackId: "c8DIEcYOABcFnFKGR1PBv01M7fpyU5pjemnti8K02bNBs",
    poster:
      "https://image.mux.com/c8DIEcYOABcFnFKGR1PBv01M7fpyU5pjemnti8K02bNBs/thumbnail.webp?time=4",
    aspectRatio: "16 / 9",
  },
  testimonialBrand: {
    id: "testimonial-brand",
    title: "Brand-side marketing leader testimonial",
    trackingName: "testimonial_brand",
    playbackId: "ODAMHxE6blct021dSjhinsxyPodV9Nwu02BRYjGlT6KKs",
    poster:
      "https://image.mux.com/ODAMHxE6blct021dSjhinsxyPodV9Nwu02BRYjGlT6KKs/thumbnail.webp?time=8",
    aspectRatio: "16 / 9",
  },
} satisfies Record<string, VideoAsset>;
