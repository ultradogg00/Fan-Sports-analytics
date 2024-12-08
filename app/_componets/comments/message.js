import { useUserAuth } from "@/app/_utils/auth-context";


export default function Message({ msgObj }) {
    // console.dir(msgObj.commetTime.toDate())
    // const time = msgObj.commetTime.toDate();
    // console.dir(time.format("DD/MM/YYYY"))

    const { user } = useUserAuth();
    
   
    if(msgObj.uid === user.uid){
        let chatCss = "chat chat-end";
        // console.dir("works")
    }
    else{
        let chatCss = "chat chat-start "
    }
    
  return (
  <div className={msgObj.uid === user.uid ? "chat chat-end" : "chat chat-start"}>
     <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={msgObj.profileUrl} />
    </div>
  </div>
    <div className="chat-header text-xs">
        {msgObj.uName}
    {/* <time className="text-xs opacity-50">{time} </time> */}
    <p className="text-xs opacity-50"> {}</p>

  </div>
    <div className="chat-bubble ">{msgObj.message}   </div>
  

  </div>
  );
}
