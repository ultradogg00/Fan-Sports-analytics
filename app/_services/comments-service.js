import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore"
import { db } from "../_utils/firebase"




// export async function dbGetAllComments(userId,commentsListStateSetter) {
//     try {
//         const messagesReference =  collection(db,"comments");
//         const messageQuery = query(messagesReference)
//         const querySnapShotArray = await getDocs( messageQuery);
//         // let BlogPostArray =[];
//         // querySnapShotArray.forEach( (docSnap)=> {
//         //     let thisPost = {
//         //         id: docSnap.id,
//         //         ...docSnap.data()
//         //     }
//         //     BlogPostArray.push(thisPost);
//         // } )
//         // console.log(querySnapShotArray)
//         commentsListStateSetter(querySnapShotArray);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

export async function dbAddCommentPost(msgObj){
    try {
        const messagesReference =  collection(db,"comments");
        const newCommentPromise = await addDoc(messagesReference, msgObj);
        
            
    } catch (error) {
        console.log(error);
    }


}


