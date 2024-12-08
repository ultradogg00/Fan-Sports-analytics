import Image from "next/image";
import GamesList from "../_componets/scores/gamesList";
import PerformersDisplay from "../_componets/performers/perfomersList";
import ArticlesDisplay from "../_componets/articles/articlesList";
import { useUserAuth } from "../_utils/auth-context";
import CommentSection from "../_componets/comments/commentSection";


export default function DisplayPage(){
    return(
        <main className=" text-gray-900">
        
          <section className="flex justify-center ">
          {/* <section className="grid gap-x-8 grid-cols-3"> */}
            <CommentSection />
            <GamesList />
            <ArticlesDisplay className="ml-10 " />
          </section>

       
      </main>

    );
}