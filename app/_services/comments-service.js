import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore"
import { db } from "../_utils/firebase"






export async function dbAddCommentPost(msgObj){
    try {
        const messagesReference =  collection(db,"comments");
        const newCommentPromise = await addDoc(messagesReference, msgObj);
        
            
    } catch (error) {
        console.log(error);
    }


}


