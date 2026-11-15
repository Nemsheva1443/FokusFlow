import { useState } from "react";

export default function useCard(cards) {
  const [card, setCard] = useState(cards);

  function changePriority(id, newPriority) {
    setCard(currentCards =>
      currentCards.map(item => {
        if (item.id === id) {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            priority: newPriority,
            finished: item.finished,
          };
        }

        return item;
      })
    );
  }

  function changeFinished(id) {
    setCard(currentCards =>
      currentCards.map(item => {
        if (item.id === id) {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            priority: item.priority,
            finished: !item.finished,
          };
        }

        return item;
      })
    );
  }

  function deltCard(id) {
    setCard(currentCards =>
      currentCards.filter(item => item.id !== id)
    );
  }

  function addCard(title, description, priority) {

    const newTask = {
      id: Date.now (),
      title: title,
      finished: false,
    categSory: "sport",
      description: description,
      priority: priority,

    }
    setCard (currentCards => {
      const newCards = currentCards.slice();
      newCards.push (newTask)
      return newCards;
    })
  }

  return { card, changePriority, changeFinished, deltCard, addCard };
}