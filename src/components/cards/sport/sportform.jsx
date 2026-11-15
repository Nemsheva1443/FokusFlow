import { useState } from "react";

export default function SportForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("mittel");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    onAdd(title.trim(), description.trim(), priority);

    setTitle("");
    setDescription("");
    setPriority("mittel");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Titel</legend>

        <input
          type="text"
          className="input w-full"
          placeholder="Neue Aufgabe"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          Beschreibung
        </legend>

        <textarea
          className="textarea h-20 w-full"
          placeholder="Kurze Beschreibung"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
        />
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="text-sm">Priorität</span>

        <select
          className="select w-full"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="mittel">Mittel</option>
          <option value="hoch">Hoch</option>
          <option value="niedrig">Niedrig</option>
        </select>
      </label>

      <button type="submit" className="btn btn-primary">
        Hinzufügen
      </button>
    </form>
  );
}