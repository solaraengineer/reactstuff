import { useState } from 'react';
import './App.css';

const WEAPONS = {
  m4a1: { name: 'M4A1', slots: ['optic', 'muzzle'] },
  glock: { name: 'Glock 19x', slots: ['optic'] },
};

const ATTACHMENTS = {
  eotech: { name: 'EOTech', slot: 'optic', weapons: ['m4a1'] },
  reflex: { name: 'Reflex', slot: 'optic', weapons: ['m4a1', 'glock'] },
  suppressor: { name: 'Suppressor', slot: 'muzzle', weapons: ['m4a1'] },
};

function M4Svg() {
  return (
    <g>
      <rect x="60" y="98" width="30" height="20" fill="#2a2a2a" />
      <rect x="88" y="103" width="180" height="10" fill="#3a3a3a" />
      <rect x="260" y="78" width="160" height="50" fill="#3a3a3a" />
      <rect x="260" y="72" width="290" height="6" fill="#2a2a2a" />
      <rect x="420" y="76" width="130" height="46" fill="#454545" />
      <rect x="548" y="94" width="115" height="16" fill="#3a3a3a" />
      <path d="M 660 78 L 760 78 L 770 92 L 770 118 L 700 128 L 660 128 Z" fill="#333" />
      <path d="M 420 122 L 540 122 L 550 138 L 445 152 Z" fill="#3f3f3f" />
      <path d="M 455 152 L 500 152 L 510 210 L 460 214 Z" fill="#2f2f2f" />
      <path d="M 522 138 L 555 138 L 552 200 L 530 208 L 520 190 Z" fill="#333" />
    </g>
  );
}

function GlockSvg() {
  return (
    <g>
      <path d="M 340 108 L 570 108 L 570 138 L 340 138 Z" fill="#3d3d3d" />
      <path d="M 340 138 L 570 138 L 560 152 L 400 152 Z" fill="#2d2d2d" />
      <path d="M 490 152 L 552 152 L 546 224 L 470 232 L 458 168 L 470 158 Z" fill="#2a2a2a" />
      <rect x="466" y="228" width="82" height="6" fill="#1e1e1e" />
    </g>
  );
}

function EotechSvg() {
  return (
    <g>
      <rect x="-26" y="-30" width="52" height="26" fill="#3a3a3a" />
      <rect x="-20" y="-24" width="38" height="14" fill="#0f2a3a" />
    </g>
  );
}

function ReflexSvg() {
  return (
    <g>
      <rect x="-8" y="-18" width="16" height="16" fill="#2f2f2f" />
      <rect x="-6" y="-14" width="12" height="8" fill="#1a2a3a" />
    </g>
  );
}

function SuppressorSvg() {
  return (
    <g>
      <rect x="-70" y="-8" width="64" height="16" fill="#2a2a2a" />
    </g>
  );
}

const ATTACHMENT_SVGS = {
  eotech: EotechSvg,
  reflex: ReflexSvg,
  suppressor: SuppressorSvg,
};

const ANCHORS = {
  m4a1: { optic: { x: 430, y: 86 }, muzzle: { x: 90, y: 108 } },
  glock: { optic: { x: 460, y: 116 } },
};

function GunPreview({ weaponId, attachments }) {
  const Weapon = weaponId === 'm4a1' ? M4Svg : GlockSvg;
  const anchors = ANCHORS[weaponId];
  return (
    <svg viewBox="0 0 800 260" className="gun">
      <Weapon />
      {Object.entries(attachments).map(([slot, id]) => {
        if (!id) return null;
        const A = ATTACHMENT_SVGS[id];
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

export default function App() {
  const [builds, setBuilds] = useState([
    { id: 1, name: 'My M4', weapon: 'm4a1', attachments: { optic: 'eotech', muzzle: 'suppressor' } },
    { id: 2, name: 'Glock', weapon: 'glock', attachments: { optic: 'reflex' } },
  ]);
  const [name, setName] = useState('');
  const [weapon, setWeapon] = useState('m4a1');
  const [attachments, setAttachments] = useState({});

  function addBuild(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setBuilds([...builds, { id: Date.now(), name: name.trim(), weapon, attachments }]);
    setName('');
    setAttachments({});
  }

  function removeBuild(id) {
    setBuilds(builds.filter((b) => b.id !== id));
  }

  function setSlot(slot, value) {
    setAttachments({ ...attachments, [slot]: value || null });
  }

  function changeWeapon(w) {
    setWeapon(w);
    setAttachments({});
  }

  const slots = WEAPONS[weapon].slots;

  return (
    <div className="app">
      <h1>Weapon Builds</h1>

      <form onSubmit={addBuild} className="form">
        <input
          type="text"
          placeholder="Build name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={weapon} onChange={(e) => changeWeapon(e.target.value)}>
          {Object.entries(WEAPONS).map(([id, w]) => (
            <option key={id} value={id}>{w.name}</option>
          ))}
        </select>
        {slots.map((slot) => {
          const options = Object.entries(ATTACHMENTS).filter(
            ([, a]) => a.slot === slot && a.weapons.includes(weapon)
          );
          return (
            <select
              key={slot}
              value={attachments[slot] || ''}
              onChange={(e) => setSlot(slot, e.target.value)}
            >
              <option value="">No {slot}</option>
              {options.map(([id, a]) => (
                <option key={id} value={id}>{a.name}</option>
              ))}
            </select>
          );
        })}
        <button type="submit">Add</button>
      </form>

      <ul className="list">
        {builds.length === 0 && <li className="empty">No builds yet</li>}
        {builds.map((b) => (
          <li key={b.id}>
            <GunPreview weaponId={b.weapon} attachments={b.attachments} />
            <div className="info">
              <div className="name">{b.name}</div>
              <div className="meta">{WEAPONS[b.weapon].name}</div>
            </div>
            <button onClick={() => removeBuild(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
