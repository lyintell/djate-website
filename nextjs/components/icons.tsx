import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
};

/** Drapeau du Mali (vert · jaune · rouge). */
export function MaliFlag({ size = 24, strokeWidth: _sw, color: _color, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
    >
      <rect x="2" y="4" width="6.5" height="16" rx="1" fill="#14B53A" />
      <rect x="8.5" y="4" width="7" height="16" fill="#FCD116" />
      <rect x="15.5" y="4" width="6.5" height="16" rx="1" fill="#CE1126" />
      <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="rgba(0,0,0,.12)" strokeWidth="1" />
    </svg>
  );
}

/** Personne en course + traits de vitesse — style trait comme Lucide. */
export function PersonRunning({
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {/* traits de vitesse (dash) */}
      <path d="M2 9h4" />
      <path d="M2 12h3" />
      <path d="M2 15h3.5" />
      {/* tête */}
      <circle cx="15" cy="5" r="2.25" />
      {/* torse */}
      <path d="M13.5 7.8 11 13" />
      {/* bras avant */}
      <path d="m13.5 7.8 4 2.2" />
      {/* bras arrière */}
      <path d="m12.2 9.5-3.2 1" />
      {/* jambe avant */}
      <path d="m11 13 3.2 2.2 1.6 4.2" />
      {/* jambe arrière */}
      <path d="m11 13-.2 3.6-3.4 2.6" />
    </svg>
  );
}
