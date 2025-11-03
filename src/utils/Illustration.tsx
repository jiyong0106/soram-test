import { GalleryItemTypes } from "./type";

export const Illustration = ({ kind }: { kind: GalleryItemTypes["id"] }) => {
  const accent = "#ff6b6b";
  switch (kind) {
    case "topic-card":
      return (
        <svg viewBox="0 0 240 180" aria-hidden>
          <rect x="12" y="18" width="216" height="144" rx="16" fill="#f7f8fb" />
          {/* 카드 더미 */}
          <rect x="40" y="42" width="160" height="100" rx="12" fill="#eaeef5" />
          <rect
            x="54"
            y="54"
            width="132"
            height="76"
            rx="10"
            fill={accent}
            opacity="0.95"
          />
          {/* 물음표 포인트 */}
          <circle cx="120" cy="92" r="12" fill="#fff" />
          <rect x="118" y="86" width="4" height="8" rx="2" fill={accent} />
          <rect x="118" y="98" width="4" height="4" rx="2" fill={accent} />
        </svg>
      );
    case "voice-record":
      return (
        <svg viewBox="0 0 240 180" aria-hidden>
          <rect x="20" y="24" width="200" height="132" rx="16" fill="#f7f8fb" />
          {/* 마이크 본체 */}
          <rect x="108" y="54" width="24" height="56" rx="12" fill={accent} />
          <rect x="92" y="110" width="56" height="8" rx="4" fill="#cfd6e6" />
          <rect x="110" y="118" width="20" height="18" rx="10" fill="#cfd6e6" />
          {/* 웨이브 바 */}
          <g fill={accent} opacity="0.8">
            <rect x="40" y="130" width="8" height="18" rx="4" />
            <rect x="54" y="126" width="8" height="22" rx="4" />
            <rect x="68" y="132" width="8" height="16" rx="4" />
            <rect x="82" y="124" width="8" height="24" rx="4" />
            <rect x="96" y="130" width="8" height="18" rx="4" />
          </g>
        </svg>
      );
    case "empathy":
      return (
        <svg viewBox="0 0 240 180" aria-hidden>
          <rect x="14" y="24" width="212" height="132" rx="16" fill="#f7f8fb" />
          {/* 말풍선 두 개 */}
          <rect x="40" y="56" width="98" height="54" rx="12" fill="#dde3f0" />
          <polygon points="82,110 74,124 96,112" fill="#dde3f0" />
          <rect x="116" y="72" width="84" height="44" rx="12" fill="#e6ebf5" />
          <polygon points="158,116 166,130 146,118" fill="#e6ebf5" />
          {/* 하트 */}
          <path
            d="M172 72c6-10 22-8 22 5 0 10-13 18-22 26-9-8-22-16-22-26 0-13 16-15 22-5z"
            fill={accent}
          />
        </svg>
      );
    case "anonymity":
      return (
        <svg viewBox="0 0 240 180" aria-hidden>
          <rect x="18" y="24" width="204" height="132" rx="16" fill="#f7f8fb" />
          {/* 실루엣 */}
          <circle cx="140" cy="88" r="22" fill="#dde3f0" />
          <rect x="118" y="112" width="44" height="24" rx="12" fill="#dde3f0" />
          {/* 음성 버블 */}
          <rect x="58" y="70" width="56" height="36" rx="10" fill="#e6ebf5" />
          <g fill={accent} opacity="0.85">
            <rect x="66" y="82" width="6" height="16" rx="3" />
            <rect x="76" y="78" width="6" height="20" rx="3" />
            <rect x="86" y="82" width="6" height="16" rx="3" />
          </g>
        </svg>
      );
  }
};
