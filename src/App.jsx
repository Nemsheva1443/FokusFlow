import { useState } from 'react'
import { NavbarPublic } from "./components/navbar/navbar.public.comp";
import useCard from "./hooks/useTasks.js";


import './App.css'
import { Statistik } from './components/statistik/statistik';
import { Search } from './components/suchfeld/search.jsx';
import FilterList from "./components/filter/filter.jsx";
import Sport from "./components/cards/sport/sport.jsx"
import { sportSettings } from "./settings/sportset.js";

export default function App() {


  const [filter, setFilter] = useState("all");

  const {
  card,
  changePriority,
  changeFinished,
  deltCard,
  addCard,
} = useCard(sportSettings.publicSport);
  

  return (
    <>

<div className="app-layout">
  <header className="sidebar">
    <nav>
      <NavbarPublic />
    </nav>
  </header>

  <main className="main-content">
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
    <section className="flex min-w-0 flex-col items-center gap-3 rounded-2xl bg-white p-2 md:flex-row">
      <div className="min-w-0 flex-1">
        <h1 className="text-lg font-bold text-[#26332a]">
          FocusFlow
        </h1>

        <h2 className="mt-1 text-sm font-semibold">
          Weniger im Kopf. Mehr Zeit fürs Leben.
        </h2>

        <p className="mt-1 text-sm text-[#58734d]">
          Aufgaben, Familie und Alltag — alles an einem Ort.
        </p>
      </div>

      <img
        src="/image/check.png"
        alt="Alltag planen"
        className="h-auto w-40 shrink-0 md:w-44"
      />
    </section>

    <section className="flex min-w-0 flex-col gap-2">
      <Statistik card={card} />
      <Search />
      <FilterList filter={filter} setFilter={setFilter} />
    </section>  
  </div>
  
 <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
  <Sport
    filter={filter}
    card={card}
    changePriority={changePriority}
    changeFinished={changeFinished}
    deltCard={deltCard}
    addCard={addCard}
  />

</div>


</main>
</div>



      </>

  ) }
