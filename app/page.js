import Image from "next/image";
import GamesList from "./_componets/scores/gamesList";
import PerformersDisplay from "./_componets/performers/perfomersList";
import ArticlesDisplay from "./_componets/articles/articlesList";

export default function Home() {
  return (
    <main className=" text-gray-900">

     {/* <section className=" flex justify-center mt-8"> */}
     <section className="grid gap-x-8 grid-cols-3">
      <PerformersDisplay/>
      <GamesList/>
      <ArticlesDisplay/>

     </section>
     <footer className=" flex justify-center">
      <p>Made by Github:ultradogg00</p>
     </footer>
    </main>
  );
}
