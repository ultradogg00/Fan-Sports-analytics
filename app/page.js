'use client'
import Image from "next/image";
import GamesList from "./_componets/scores/gamesList";
import PerformersDisplay from "./_componets/performers/perfomersList";
import ArticlesDisplay from "./_componets/articles/articlesList";
import { useUserAuth } from "./_utils/auth-context";

import Link from "next/link";
export default function signInPage() {
  const { user, gitHubSignIn, firebaseSignOut, googleSignIn } = useUserAuth();

  

  async function handleSignIn() {
    try {
      await gitHubSignIn();
   
    } catch (error) {
      console.log(error);
    }
  }
  async function googleHandleSignIn() {
    try {
      await googleSignIn();
   
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className=" text-gray-900">
      {/* <section className=" flex justify-center mt-8"> */}
      {user ? (
        <div className="  flex justify-center">
             <Link className=" font-medium text-blue-400 dark:text-blue-500 hover:underline" href="./home">Click to View Fanlaltics</Link>
             
        </div>
      
      ) : (
        
        <div className="  items-center ">
           <div className=" flex justify-center items-center ">
           <button type="button" onClick={handleSignIn} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">GitHub Login</button>
        </div>
        <div className=" flex justify-center items-center ">
           <button type="button" onClick={googleHandleSignIn} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Google Login</button>
          
        </div>
        </div>
      )}

      
    </main>
  );
}
