"use client"

import GamesList from "../_componets/scores/gamesList";
import PerformersDisplay from "../_componets/performers/perfomersList";
import ArticlesDisplay from "../_componets/articles/articlesList";
import { useUserAuth } from "../_utils/auth-context";
import CommentSection from "../_componets/comments/commentSection";
import Link from "next/link";


export default function DisplayPage(){
  const { user,firebaseSignOut,  } = useUserAuth();
 

  
    return(
        <main className=" text-gray-900">
          <div className="flex justify-end"> <button type="button" onClick={()=>{firebaseSignOut()}} className="text-white mb-20  bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout </button></div>
          
        {user ? ( <section className="flex justify-center ">
         
         <CommentSection />
         <GamesList />
         <ArticlesDisplay className=" " />
       </section>):(
        <div className="ml-10">
           <p>Please <Link href="./" className=" text-blue-600 underline dark:text-blue-500 hover:no-underline">Login</Link> to view </p>
        </div>
        
        )}
          

       
      </main>

    );
}