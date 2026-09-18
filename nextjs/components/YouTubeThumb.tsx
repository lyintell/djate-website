"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function YouTubeThumb({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="card" style={{ aspectRatio: "16 / 9", padding: 0, overflow: "hidden" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Lire — ${title}`}
      className="card"
      style={{
        aspectRatio: "16 / 9",
        padding: 0,
        overflow: "hidden",
        position: "relative",
        display: "block",
        width: "100%",
        border: "none",
        cursor: "pointer",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <span
        className="play-btn"
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,.3)",
        }}
      >
        <Play size={26} fill="#fff" color="#fff" style={{ marginLeft: 3 }} />
      </span>
    </button>
  );
}
