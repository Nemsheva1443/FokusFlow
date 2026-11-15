import { TbLeaf } from "react-icons/tb";

export function Statistik({ card }) {
  const total = card.length;

  const open = card.filter(item => item.finished === false).length;

  const finished = card.filter(item => item.finished === true).length;

  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="stats bg-white hover:shadow-lg ">
        <div className="stat">
          <div className="stat-title text-sm">Gesamt</div>
          <div className="stat-value text-xl">{total}</div>
        </div>
      </div>

      <div className="stats bg-white hover:shadow-lg">
        <div className="stat">
          <div className="stat-title text-sm">Offen</div>
          <div className="stat-value text-xl">{open}</div>
        </div>
      </div>

      <div className="stats bg-white hover:shadow-lg">
        <div className="stat">
          <div className="stat-title text-sm">Erledigt</div>
          <div className="stat-value text-xl">{finished}</div>
        </div>
      </div>

      <div className="flex items-center justify-center rounded-2xl bg-white p-3 shadow">
        <TbLeaf
          className="h-12 w-12 text-[#8FAE78]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}