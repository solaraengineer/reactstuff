import { useMemo, useState } from 'react';
import BuildForm from './BuildForm.jsx';
import BuildCard from './BuildCard.jsx';
import SearchBar from './SearchBar.jsx';
import ConfirmModal from './ConfirmModal.jsx';
import './App.css';

const INITIAL = [
  {
    id: 1,
    name: 'Normal',
    weapon: 'm4a1',
    attachments: { optic: 'eotech', foregrip: 'angled', muzzle: 'suppressor', tactical: 'flashlight' },
  },
  {
    id: 2,
    name: 'Long range',
    weapon: 'm4a1',
    attachments: { optic: 'acog', foregrip: 'vertical' },
  },
  {
    id: 3,
    name: 'Sidearm',
    weapon: 'glock',
    attachments: { optic: 'reflex' },
  },
];

export default function App() {
  const [builds, setBuilds] = useState(INITIAL);
  const [query, setQuery] = useState('');
  const [pendingDelete, setPendingDelete] = useState(null);

  function addBuild(data) {
    setBuilds([...builds, { id: Date.now(), ...data }]);
  }
  function askDelete(id) {
    setPendingDelete(id);
  }
  function confirmDelete() {
    setBuilds(builds.filter((b) => b.id !== pendingDelete));
    setPendingDelete(null);
  }
  function cancelDelete() {
    setPendingDelete(null);
  }

  const pendingBuild = builds.find((b) => b.id === pendingDelete);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return builds;
    return builds.filter((b) => b.name.toLowerCase().includes(q));
  }, [builds, query]);

  return (
    <div className="page">
      <header className="header">
        <h1>Weapon Builder</h1>
        <span className="count">{builds.length} builds</span>
      </header>

      <section className="panel">
        <BuildForm onAdd={addBuild} />
      </section>

      <section className="panel">
        <SearchBar value={query} onChange={setQuery} />
        {filtered.length === 0 ? (
          <p className="empty">
            {query ? `No builds match "${query}".` : 'No builds yet.'}
          </p>
        ) : (
          <div className="grid">
            {filtered.map((b) => (
              <BuildCard key={b.id} build={b} onDelete={askDelete} />
            ))}
          </div>
        )}
      </section>

      <ConfirmModal
        open={pendingBuild != null}
        message={pendingBuild ? `Delete "${pendingBuild.name}"?` : ''}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
