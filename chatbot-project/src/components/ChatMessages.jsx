import {  useEffect , useRef} from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({chatMessages}){
     
      const chatMessagesRef = useRef(null);
     

     useEffect(() =>{
       const containerElem= chatMessagesRef.current;
       if(containerElem){
       containerElem.scrollTo({
      top: containerElem.scrollHeight,
      behavior: 'smooth'
        });
       }
       },[chatMessages]);
        
       if(chatMessages.length === 0){
        return(
          <div className="prompt-message">
            <p>Welcome to the chatbot project! Send a message using the textbox bellow</p>
          </div>
        )
       }else{

         //2. Create the html
         return(
           <div className="chat-messages-container"
           ref={chatMessagesRef}>
           {chatMessages.map((chatMessage) =>{
             return(
               <ChatMessage 
               message= {chatMessage.message}
               sender = {chatMessage.sender}
                time={chatMessage.time}
               key = {chatMessage.id}
               />
               )
              })}
            </div>
            );
          }
        }

        export default ChatMessages