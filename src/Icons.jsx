// Minimal inline SVG icons — no external icon library dependency needed.

export const Icons = {
  github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
      <circle cx="12" cy="12" r="4.2"/>
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/>
    </svg>
  ),
  reddit: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm5.01 9.3a1.4 1.4 0 0 1-1.4 1.4c-.34 0-.65-.13-.88-.34-.87.6-2.06.99-3.38 1.04l.64-3.02 2.1.45a1 1 0 1 1-.1.5l-2.34-.5-.5 2.36c1.2-.06 2.27-.41 3.03-.93a1.4 1.4 0 0 1 2.83.04ZM8.5 12.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm7 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm-6.1 3.5c.66.62 1.74 1 2.6 1s1.94-.38 2.6-1a.4.4 0 0 1 .57.56c-.82.8-2.05 1.27-3.17 1.27s-2.35-.47-3.17-1.27a.4.4 0 0 1 .57-.56Z"/>
    </svg>
  ),
  twitter: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.2 8.24L23 22h-6.8l-5.3-6.94L4.6 22H1.5l7.7-8.81L1 2h6.9l4.8 6.36L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z"/>
    </svg>
  ),
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
    </svg>
  ),
  playstore: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.6 2.3c-.4.3-.6.7-.6 1.2v17c0 .5.2.9.6 1.2l9.4-9.7L3.6 2.3Zm11 9.5 2.6-2.6-9.4-5.4 6.8 8Zm0 1.4-6.8 8 9.4-5.4-2.6-2.6Zm1-1.7 3-1.7c.7-.4.7-1.4 0-1.8l-3-1.7-2.8 3.1 2.8 2.1Z"/>
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/>
      <path d="M3.5 6.5 12 13l8.5-6.5"/>
    </svg>
  ),
  arrowUpRight: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 17 17 7M9 7h8v8"/>
    </svg>
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.9-.4-1.8-1-2.6-1.8-.7-.7-1.3-1.5-1.7-2.3-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.4.1-.6-.1-.2-.6-1.5-.8-2-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1.1 1.6-1.1 2.6.1 1.1.5 2.2 1.2 3.2 1.3 2 3.1 3.7 5.2 4.7 1 .5 2.2.9 3.3.9.6 0 1.2-.1 1.7-.4.6-.3 1-.9 1.1-1.5.1-.2.1-.5 0-.7-.1-.1-.3-.2-.7-.2ZM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.7 3.1 1.1 4.8 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2Z"/>
    </svg>
  ),
  android: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.6 9.5 19 7c.1-.2 0-.4-.1-.5-.2-.1-.4 0-.5.1l-1.4 2.5C15.9 8.4 14 8 12 8s-3.9.4-5 1.1L5.6 6.6c-.1-.1-.3-.2-.5-.1-.1.1-.2.3-.1.5l1.4 2.5C4.5 10.7 3 13 3 15.5h18c0-2.5-1.5-4.8-3.4-6ZM8 13.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM4 17v3.5A1.5 1.5 0 0 0 5.5 22h.5v-5H4Zm14 0v5h.5a1.5 1.5 0 0 0 1.5-1.5V17h-2ZM8 17v6h2v-6H8Zm6 0v6h2v-6h-2Z"/>
    </svg>
  ),
  firebaseFlame: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.8 19.1 9.5 2.2c.1-.4.6-.5.8-.1l2.4 4.2-1.7 3.1a.5.5 0 0 0 0 .5l1.6 2.9-6.8 6.6c-.2.2-.5 0-.4-.3ZM15 6.6l1.9 3.4a.5.5 0 0 1 0 .5L12 19.4 9.9 15.7 15 6.6Zm3.6 4.8 1.5 2.7c.5.9.4 2-.3 2.8l-7 7.6c-.2.2-.6 0-.5-.3l6.3-12.8Z"/>
    </svg>
  ),
  webGlobe: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M2.5 12h19M12 2.5c2.5 2.6 3.8 5.9 3.8 9.5s-1.3 6.9-3.8 9.5c-2.5-2.6-3.8-5.9-3.8-9.5S9.5 5.1 12 2.5Z"/>
    </svg>
  ),
  sparkleAI: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 2 9.3 8.3 3 10l6.3 1.7L11 18l1.7-6.3L19 10l-6.3-1.7L11 2Zm8 11-.9 3.1L15 17l3.1.9.9 3.1.9-3.1 3.1-.9-3.1-.9L19 13Z"/>
    </svg>
  ),
  apiLink: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 15 15 9M10.5 6.5 12 5a3.5 3.5 0 0 1 5 5l-1.5 1.5M13.5 17.5 12 19a3.5 3.5 0 0 1-5-5l1.5-1.5"/>
    </svg>
  ),
  designPen: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 4 5.5 12.5 4 20l7.5-1.5L20 10 14 4Z"/>
      <path d="M12.5 5.5 18.5 11.5"/>
    </svg>
  ),
  briefcase: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="7" width="19" height="13" rx="2"/>
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M2.5 12.5h19"/>
    </svg>
  ),
  star: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5 14.9 8.6l6.7.9-4.9 4.7 1.2 6.6L12 17.6l-6 3.2 1.2-6.6L2.4 9.5l6.7-.9L12 2.5Z"/>
    </svg>
  ),
  users: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="8.5" cy="8" r="3.2"/>
      <path d="M2.5 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2"/>
      <circle cx="17" cy="8.5" r="2.6"/>
      <path d="M16 13.8c2.6.3 4.5 2.2 4.5 4.7"/>
    </svg>
  ),
  checkCircle: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M8 12.5 10.7 15 16 9"/>
    </svg>
  ),
  menu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18"/>
    </svg>
  ),
  close: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M5 5 19 19M19 5 5 19"/>
    </svg>
  ),
}
