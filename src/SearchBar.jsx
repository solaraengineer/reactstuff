export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Search builds…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
