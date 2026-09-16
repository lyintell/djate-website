"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function HeroVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        background: "var(--accent-700)",
        borderRadius: 9,
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: playing ? "transparent" : "rgba(5,51,31,.35)",
          transition: "background .2s ease",
          pointerEvents: "none",
        }}
      >
        <span
          className="play-btn"
          aria-hidden
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(255,255,255,.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(0,0,0,.3)",
            opacity: playing ? 0 : 1,
            transition: "opacity .2s ease",
          }}
        >
          {playing ? (
            <Pause size={26} fill="#0e7a43" color="#0e7a43" />
          ) : (
            <Play size={26} fill="#0e7a43" color="#0e7a43" style={{ marginLeft: 3 }} />
          )}
        </span>
      </div>
      <button aria-label={playing ? `Mettre en pause — ${label}` : `Lire — ${label}`} onClick={toggle} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, border: "none", cursor: "pointer" }} />
      <button
        aria-label={muted ? "Activer le son" : "Couper le son"}
        onClick={toggleMute}
        className="play-btn"
        style={{
          position: "absolute",
          right: 12,
          bottom: 12,
          width: 38,
          height: 38,
          borderRadius: "50%",
          border: "none",
          background: "rgba(5,51,31,.7)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
