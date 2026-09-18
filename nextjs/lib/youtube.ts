/** Accepts a full YouTube URL (watch/youtu.be/embed/shorts) or a bare video id, returns the id. */
export function getYouTubeId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.hostname === "youtu.be") return url.pathname.slice(1) || null;
    if (url.hostname.includes("youtube.com")) {
      if (url.searchParams.get("v")) return url.searchParams.get("v");
      const match = url.pathname.match(/\/(embed|shorts)\/([\w-]{11})/);
      if (match) return match[2];
    }
  } catch {
    return null;
  }
  return null;
}

/** Détecte la langue à partir du titre YouTube ("Français" / "Bambara"), insensible aux accents/casse. */
export function detectLanguageFromTitle(title: string): "Français" | "Bambara" | null {
  const normalized = title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
  if (normalized.includes("francais")) return "Français";
  if (normalized.includes("bambara")) return "Bambara";
  return null;
}
