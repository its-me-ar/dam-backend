export interface VideoVariants {
  original?: { path: string; width: number; height: number; size: number };
  "720p"?: { path: string; width: number; height: number; size: number };
  "480p"?: { path: string; width: number; height: number; size: number };
  thumbnails?: { path: string; width: number; height: number; size: number }[];
}