import { ANCHORS } from './data.js';

function M4A1Svg() {
  return (
    <g stroke="#2a2824" strokeWidth="1" fill="#d8d3c6">
      <rect x="58" y="98" width="34" height="22" fill="#8a847a" />
      <rect x="90" y="104" width="178" height="10" fill="#9c968b" />
      <rect x="250" y="80" width="16" height="32" fill="#6e6a62" />
      <rect x="252" y="68" width="12" height="16" fill="#6e6a62" />
      <rect x="260" y="76" width="162" height="54" />
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={'ht' + i} x1={266 + i * 11} y1="78" x2={273 + i * 11} y2="78" stroke="#2a2824" />
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={'hb' + i} x1={266 + i * 11} y1="128" x2={273 + i * 11} y2="128" stroke="#2a2824" />
      ))}
      <rect x="418" y="74" width="134" height="50" fill="#c4bea9" />
      <rect x="258" y="70" width="294" height="6" fill="#8a847a" />
      <ellipse cx="500" cy="105" rx="22" ry="8" fill="#4a4740" />
      <polygon points="540,70 585,70 580,60 545,60" fill="#6e6a62" />
      <rect x="548" y="92" width="118" height="18" fill="#9c968b" />
      <path d="M 660 76 L 762 76 L 772 92 L 772 120 L 702 130 L 660 130 Z" fill="#b4ad99" />
      <line x1="700" y1="82" x2="750" y2="82" />
      <path d="M 418 124 L 540 124 L 552 140 L 468 144 L 460 154 L 445 154 Z" fill="#b4ad99" />
      <path d="M 486 140 Q 500 160 524 140" fill="none" strokeWidth="2" />
      <line x1="505" y1="140" x2="502" y2="152" strokeWidth="2" />
      <path d="M 455 154 L 500 154 L 512 214 L 460 218 Z" fill="#6e6a62" />
      <rect x="453" y="150" width="58" height="6" fill="#4a4740" />
      <path d="M 524 140 L 558 140 L 554 206 L 530 214 L 520 192 Z" fill="#8a847a" />
      <line x1="530" y1="162" x2="550" y2="164" />
      <line x1="528" y1="176" x2="549" y2="178" />
      <line x1="527" y1="190" x2="548" y2="192" />
    </g>
  );
}

function GlockSvg() {
  return (
    <g stroke="#2a2824" strokeWidth="1" fill="#b4ad99">
      <path d="M 340 108 L 574 108 L 574 140 L 340 140 Z" fill="#9c968b" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={'sr' + i} x1={550 - i * 3} y1="114" x2={550 - i * 3} y2="136" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={'sf' + i} x1={378 + i * 3} y1="114" x2={378 + i * 3} y2="136" />
      ))}
      <path d="M 462 110 L 502 110 L 502 124 L 462 124 Z" fill="#4a4740" />
      <rect x="356" y="100" width="4" height="10" fill="#2a2824" />
      <rect x="564" y="100" width="6" height="10" fill="#2a2824" />
      <path d="M 340 140 L 574 140 L 562 154 L 400 154 Z" fill="#6e6a62" />
      <rect x="358" y="154" width="26" height="4" fill="#4a4740" />
      <path d="M 448 154 Q 462 178 492 154" fill="none" strokeWidth="2" />
      <line x1="470" y1="154" x2="466" y2="172" strokeWidth="2" />
      <path d="M 492 154 L 554 154 L 548 226 L 470 234 L 458 170 L 470 160 Z" fill="#4a4740" />
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => (
          <circle
            key={`g-${r}-${c}`}
            cx={488 + c * 10 + (r % 2) * 4}
            cy={182 + r * 8}
            r="1"
            fill="#1a1814"
            stroke="none"
          />
        )),
      )}
      <rect x="466" y="230" width="84" height="6" fill="#2a2824" />
    </g>
  );
}

function EotechAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-28" y="-4" width="56" height="4" fill="#4a4740" />
      <rect x="-26" y="-32" width="52" height="28" fill="#6e6a62" />
      <rect x="-32" y="-32" width="6" height="28" fill="#4a4740" />
      <rect x="-20" y="-26" width="38" height="16" fill="#2a2824" />
      <circle cx="0" cy="-18" r="1.5" fill="#c74a3b" stroke="none" />
    </g>
  );
}

function ReflexAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-10" y="-2" width="20" height="2" fill="#4a4740" />
      <rect x="-9" y="-20" width="18" height="18" fill="#6e6a62" />
      <rect x="-7" y="-16" width="14" height="10" fill="#2a2824" />
      <circle cx="0" cy="-11" r="1.3" fill="#c74a3b" stroke="none" />
    </g>
  );
}

function AcogAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-34" y="-4" width="12" height="6" fill="#4a4740" />
      <rect x="20" y="-4" width="12" height="6" fill="#4a4740" />
      <rect x="-40" y="-22" width="76" height="18" fill="#6e6a62" />
      <rect x="-48" y="-26" width="12" height="26" fill="#4a4740" />
      <circle cx="-42" cy="-13" r="7" fill="#1a2a36" />
      <rect x="34" y="-22" width="10" height="18" fill="#4a4740" />
    </g>
  );
}

function AngledAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-14" y="-2" width="28" height="4" fill="#4a4740" />
      <polygon points="-12,2 12,2 22,32 -4,32" fill="#6e6a62" />
      <line x1="-6" y1="12" x2="16" y2="12" />
      <line x1="-3" y1="22" x2="18" y2="22" />
    </g>
  );
}

function VerticalAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-10" y="-2" width="20" height="4" fill="#4a4740" />
      <rect x="-8" y="2" width="16" height="32" fill="#6e6a62" rx="2" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={i} x1="-7" y1={8 + i * 5} x2="7" y2={8 + i * 5} />
      ))}
    </g>
  );
}

function SuppressorAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-6" y="-9" width="8" height="18" fill="#4a4740" />
      <rect x="-70" y="-8" width="64" height="16" fill="#6e6a62" />
      <rect x="-74" y="-9" width="6" height="18" fill="#4a4740" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={i} x1={-64 + i * 8} y1="-8" x2={-64 + i * 8} y2="8" />
      ))}
    </g>
  );
}

function FlashlightAtt() {
  return (
    <g stroke="#2a2824" strokeWidth="1">
      <rect x="-12" y="-2" width="24" height="4" fill="#4a4740" />
      <rect x="-12" y="2" width="24" height="14" fill="#6e6a62" />
      <circle cx="0" cy="10" r="4" fill="#e8d9a0" />
    </g>
  );
}

const WEAPON_COMPS = { m4a1: M4A1Svg, glock: GlockSvg };
const ATTACHMENT_COMPS = {
  eotech: EotechAtt,
  reflex: ReflexAtt,
  acog: AcogAtt,
  angled: AngledAtt,
  vertical: VerticalAtt,
  suppressor: SuppressorAtt,
  flashlight: FlashlightAtt,
};

const SLOT_ORDER = ['muzzle', 'foregrip', 'tactical', 'optic'];

export default function GunPreview({ weaponId, attachments = {} }) {
  const Weapon = WEAPON_COMPS[weaponId];
  const anchors = ANCHORS[weaponId];
  if (!Weapon) return null;
  return (
    <svg viewBox="0 0 800 260" className="gun" preserveAspectRatio="xMidYMid meet">
      <Weapon />
      {SLOT_ORDER.map((slot) => {
        const id = attachments[slot];
        const A = ATTACHMENT_COMPS[id];
        const pos = anchors[slot];
        if (!A || !pos) return null;
        return (
          <g key={slot} transform={`translate(${pos.x}, ${pos.y})`}>
            <A />
          </g>
        );
      })}
    </svg>
  );
}
