import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({ width: size, height: size, "aria-hidden": true as const });

export function MailIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base(size)} {...props}>
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm.8 2.2v.3L12 13l8.2-5.5v-.3H3.8Z" />
    </svg>
  );
}

export function PhoneIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base(size)} {...props}>
      <path d="M6.6 2.6 9 2.1a1 1 0 0 1 1.1.6l1.4 3.4a1 1 0 0 1-.3 1.2L9.4 8.8a12.6 12.6 0 0 0 5.8 5.8l1.5-1.8a1 1 0 0 1 1.2-.3l3.4 1.4a1 1 0 0 1 .6 1.1l-.5 2.4a1.5 1.5 0 0 1-1.5 1.2C10.4 18.6 5.4 13.6 5.4 4.1a1.5 1.5 0 0 1 1.2-1.5Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base(size)} {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 2.2a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2Zm5.3-3.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
    </svg>
  );
}

export function BehanceIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base(size)} {...props}>
      <path d="M1 5h6.3c2.2 0 3.7 1.1 3.7 3 0 1.2-.6 2-1.6 2.4 1.4.4 2.2 1.5 2.2 3 0 2.3-1.8 3.6-4.3 3.6H1V5Zm3 4.6h2.8c.8 0 1.3-.4 1.3-1.1S7.6 7.4 6.8 7.4H4v2.2Zm0 4.9h3c.9 0 1.5-.5 1.5-1.3s-.6-1.3-1.5-1.3H4v2.6ZM18 8.6c2.8 0 4.6 2 4.4 5h-6.5c.1 1.3.9 2 2.1 2 .8 0 1.4-.4 1.6-1h2.6c-.5 1.9-2.1 3.1-4.3 3.1-2.8 0-4.6-1.8-4.6-4.6 0-2.7 1.9-4.5 4.7-4.5Zm-2 3.5h3.8c-.1-1.1-.8-1.7-1.8-1.7s-1.8.6-2 1.7ZM15.3 5.8h5.3v1.5h-5.3V5.8Z" />
    </svg>
  );
}

export function SendIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base(size)} {...props}>
      <path d="M21.4 3.2 2.9 10.3c-.9.4-.9 1.6 0 1.9l4.6 1.6 1.7 5.3c.2.7 1.1.9 1.6.4l2.6-2.4 4.6 3.4c.6.4 1.4.1 1.6-.6l3.2-15.6c.2-.9-.6-1.5-1.4-1.1ZM9.6 14.4l-.4 3.3-1.2-4 9.6-6.6-8 7.3Z" />
    </svg>
  );
}

export function ArrowIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...base(size)} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...base(size)} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function CameraIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...base(size)} {...props}>
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

/* ---------- Tool logos used in the skills radar ---------- */

export function FigmaLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 38 57" width={size * 0.67} height={size} aria-hidden="true" fill="none" stroke="#0d0d0d" strokeWidth={4}>
      <path d="M19 2.5h-8.2a8.2 8.2 0 0 0 0 16.5H19V2.5ZM19 2.5h8.2a8.2 8.2 0 0 1 0 16.5H19V2.5ZM19 19h-8.2a8.2 8.2 0 0 0 0 16.5H19V19Z" />
      <circle cx="27.2" cy="27.2" r="8.2" />
      <path d="M19 35.5h-8.2a8.2 8.2 0 1 0 8.2 8.2v-8.2Z" />
    </svg>
  );
}

export function IbisPaintLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} aria-hidden="true" fill="none" stroke="#1a1a1a" strokeWidth={1.4}>
      <circle cx="34" cy="24" r="16" />
      <circle cx="34" cy="24" r="6" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (Math.PI * 2 * i) / 8;
        return <line key={i} x1={34 + 6 * Math.cos(a)} y1={24 + 6 * Math.sin(a)} x2={34 + 16 * Math.cos(a)} y2={24 + 16 * Math.sin(a)} />;
      })}
      <path d="M18 24v28a5 5 0 0 0 10 0V36" />
      <line x1="10" y1="26" x2="10" y2="54" />
      <circle cx="10" cy="20" r="1.2" fill="#1a1a1a" />
    </svg>
  );
}
