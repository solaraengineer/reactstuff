import { useState } from 'react';
import './App.css';

const WEAPONS = ['M4A1', 'HK416A5', 'Glock 19x'];

export default function App() {
  const [builds, setBuilds] = useState([
    { id: 1, name: 'My M4', weapon: 'M4A1' },
    { id: 2, name: 'Glock', weapon: 'Glock 19x' },
  ]);
  const [name, setName] = useState('');
  const [weapon, setWeapon] = useState(WEAPONS[0]);

  function addBuild(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setBuilds([...builds, { id: Date.now(), name: name.trim(), weapon }]);
    setName('');
  }

  function removeBuild(id) {
    setBuilds(builds.filter((b) => b.id !== id));
  }

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
        <select value={weapon} onChange={(e) => setWeapon(e.target.value)}>
          {WEAPONS.map((w) => (
            <option key={w} value={w}>{w}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>

      <ul className="list">
        {builds.length === 0 && <li className="empty">No builds yet</li>}
        {builds.map((b) => (
          <li key={b.id}>
            <span>{b.name} — {b.weapon}</span>
            <button onClick={() => removeBuild(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
