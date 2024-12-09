import { useUserAuth } from "@/app/_utils/auth-context";


export default function Message({ msgObj }) {
    

    const { user } = useUserAuth();
    
   
    if(msgObj.uid === user.uid){
        let chatCss = "chat chat-end";
       
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
    <div className={msgObj.uid ==  user.uid ? "chat-bubble chat-bubble-success " : "chat-bubble  "}>{msgObj.message}   </div>
  

  </div>
  );
}
