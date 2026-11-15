export default function FilterList({ filter, setFilter }) {
  return (
    <select
      className="select select-sm"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    >
      <option value="all">Alle Aufgaben</option>
      <option value="open">Offen</option>
      <option value="erledigt">Erledigt</option>
    </select>
  );
}