export default function ListSport({
  title,
  description,
  priority,
  finished,
  onPriorityChange,
  onChangeFinished,
  onDelete
}) {
  return (
    <li>
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-sm"
          checked={finished}
          onChange={onChangeFinished}
        />

<h4 className={finished ? "line-through" : ""}>
  {title}
</h4>

      </div>

      <p className="mt-1 text-xs">{description}</p>

      <select
        className="select select-primary select-xs mt-2"
        value={priority}
        onChange={(event) => {
          onPriorityChange(event.target.value);
        }}
      >
        <option value="hoch">Hoch</option>
        <option value="mittel">Mittel</option>
        <option value="niedrig">Niedrig</option>
      </select>

      <button
  type="button"
  className="btn btn-ghost btn-xs"
  onClick={onDelete}
>
  Löschen
</button>
    </li>
  );
}