

import ListSport from "./sport.list.jsx";

import SportForm from "./sportform.jsx";
import { useState } from "react";

export default function Sport({
  filter,
  card,
  changePriority,
  changeFinished,
  deltCard,
  addCard,
}) {


  



  const [visible, setVisible] = useState(false)
  

  const filteredCards = card.filter (item => {
    if (filter === "open") {
      return item.finished === false;
    }
    if (filter === "erledigt"){
      return item.finished === true
    }
    return true;
  })
  

  return (
    <div className="card w-full min-w-0 bg-white shadow-sm">
      <div className="card-body">
        <h2 className="text-sm font-bold text-center">Sport</h2>
        

{visible && (
  <SportForm
    onAdd={(title, description, priority) => {
      addCard(title, description, priority);
      setVisible(false);
    }}
  />
)}


        <ul className="mt-4 flex flex-col gap-4 text-xs">
         {filteredCards.map((item) => (
            <ListSport
              key={item.id}
              title={item.title}
              description={item.description}
              priority={item.priority}
              onPriorityChange={(value) => changePriority(item.id, value)}
              onChangeFinished={() => changeFinished(item.id)}
              finished={item.finished}
              onDelete={() => deltCard(item.id)}
            />
          ))}
        </ul>

        {!visible && (
  <button
    type="button"
    className="btn btn-sm"
    onClick={() => setVisible(true)}
  >
    Aufgabe hinzufügen
  </button>
)}
      </div>
    </div>
  );
}