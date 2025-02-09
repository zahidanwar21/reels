"use client";

import React, { useRef } from "react";

interface HoverVideoPlayerProps {
  videoUrl: string;
  poster?: string;
  className?: string;
}

export default function HoverVideoPlayer({
  videoUrl,
  poster,
  className,
}: HoverVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      poster={poster}
      muted
      loop
      playsInline
      className={className}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      Your browser does not support the video tag.
    </video>
  );
}
