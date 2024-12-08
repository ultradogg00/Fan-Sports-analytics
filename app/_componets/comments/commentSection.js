"use client"
import { useUserAuth } from "../../_utils/auth-context";
import { useEffect, useState } from 'react'
import { db } from "@/app/_utils/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, Timestamp, orderBy } from "firebase/firestore"

import {useAuthState} from 'react-firebase-hooks/auth'
import Message from "./message";
import { dbAddCommentPost, dbGetAllComments } from "@/app/_services/comments-service";
import { HiOutlineStatusOnline } from "react-icons/hi";
export default function CommentSection(){
    const [commentText, setCommentText] = useState('');
    const [commentList, setCommentList] = useState([]);
    
    const { user } = useUserAuth();


    const messagesReference =  collection(db,"comments");

    const messageQuery = query(messagesReference, orderBy('commentTime','asc') );
   

    const [userMessages] = useCollectionData(messageQuery, { idField: 'id' });
    // useEffect( ()=>{
    //     if(user){

    //     dbGetAllComments(user.uid,setCommentList);
    //     }
    // }, [messageQuery]);

    const handleMessageSubmint = (event) =>{
        event.preventDefault();
        const currentTimestamp = Timestamp.now();
         
        const msgObg =  {
                
                message: commentText,
                uName: user.displayName,
                uid :user.uid,
                profileUrl: user.photoURL,
                commentTime: currentTimestamp

            }
         dbAddCommentPost(msgObg);
         setCommentText('');

    }
    return(
        <div className="bg-slate-100 h-full px-3 pt-3 rounded-md basis-1/3">
             <h2 className="text-2xl  flex justify-center mb-3  " >Live Chat <HiOutlineStatusOnline  className="ml-2 mt-1 " />  </h2>
            <div>
                {userMessages && userMessages.map((msg) => <Message key={msg.id} msgObj={msg}/>)}
            </div>
           
            
            <form onSubmit={handleMessageSubmint}>
                <label  className="sr-only">Your message</label>
                <div className="flex items-center px-3 py-2 rounded-lg mb-3 mt-44 bg-gray-50 dark:bg-gray-700">
                    <textarea value={commentText} onChange={(event) =>{setCommentText(event.target.value)}}  id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>



        </div>
    );

    
}