import { useState } from 'react';
import { WEAPONS, ATTACHMENTS, SLOT_LABELS } from './data.js';
import GunPreview from './GunPreview.jsx';

export default function BuildForm({ onAdd }) {
  const [name, setName] = useState('');
  const [weapon, setWeapon] = useState('m4a1');
  const [attachments, setAttachments] = useState({});

  const slots = WEAPONS[weapon].slots;

  function changeWeapon(w) {
    setWeapon(w);
    setAttachments({});
  }

  function setSlot(slot, value) {
    setAttachments({ ...attachments, [slot]: value || null });
  }

  function submit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd({ name: trimmed, weapon, attachments });
    setName('');
    setAttachments({});
  }

  return (
    <form onSubmit={submit} className="form">
      <div className="preview">
        <GunPreview weaponId={weapon} attachments={attachments} />
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="Build name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field"
        />
        <select value={weapon} onChange={(e) => changeWeapon(e.target.value)} className="field">
          {Object.entries(WEAPONS).map(([id, w]) => (
            <option key={id} value={id}>{w.name}</option>
          ))}
        </select>
      </div>
      <div className="row row-slots">
        {slots.map((slot) => {
          const options = Object.entries(ATTACHMENTS).filter(
            ([, a]) => a.slot === slot && a.weapons.includes(weapon),
          );
          return (
            <label key={slot} className="slot">
              <span className="slot-label">{SLOT_LABELS[slot]}</span>
              <select
                value={attachments[slot] || ''}
                onChange={(e) => setSlot(slot, e.target.value)}
                className="field"
                disabled={options.length === 0}
              >
                <option value="">—</option>
                {options.map(([id, a]) => (
                  <option key={id} value={id}>{a.name}</option>
                ))}
              </select>
            </label>
          );
        })}
      </div>
      <button type="submit" className="btn-primary">Add build</button>
    </form>
  );
}
