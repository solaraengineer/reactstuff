import { WEAPONS, ATTACHMENTS, SLOT_LABELS } from './data.js';
import GunPreview from './GunPreview.jsx';

export default function BuildCard({ build, onDelete }) {
  const weapon = WEAPONS[build.weapon];
  const attached = Object.entries(build.attachments || {})
    .filter(([, id]) => id && ATTACHMENTS[id])
    .map(([slot, id]) => ({ slot, name: ATTACHMENTS[id].name }));

  return (
    <article className="card">
      <GunPreview weaponId={build.weapon} attachments={build.attachments} />
      <div className="card-body">
        <div className="card-head">
          <h2 className="card-name">{build.name}</h2>
          <button className="btn-delete" onClick={() => onDelete(build.id)}>remove</button>
        </div>
        <div className="card-meta">
          {weapon.name} · {weapon.caliber}
        </div>
        {attached.length > 0 && (
          <ul className="chips">
            {attached.map(({ slot, name }) => (
              <li key={slot}>
                <span className="chip-slot">{SLOT_LABELS[slot]}:</span>{name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
