import dayjs from 'dayjs';
  import robotImage from '../assets/robot.png';
  import userImage from '../assets/user.png';
  import './ChatMessage.css';

   
   export function ChatMessage ({message, sender, time}){
      /*
     // const message = props.message;
      //const sender = props.sender;
     //destructuring
     // const {message, sender} = props;

      if(sender === 'robot'){
       return(
         <div>
           <img src="image/robot.png" alt="" width="50" />
          {message}
        </div>
       ); 
      }

      SHORTCUT BELOW
        */
        return(
          <div className={sender==='user'?             'chat-message-user':'chat-message-robot'}>
              
              {sender === 'robot' && (
                <img src={robotImage}alt="" 
                className="chat-message-profile" />
                )}
              <div className="chat-message-text">
                {message}

                {time && (
                <div className='chat-message-time'>
                  {dayjs(time).format('h:mma')}
          </div>
        )}
              </div>
              { sender === 'user' && (
                <img src={userImage} alt="" 
                className="chat-message-profile" />
                )}
          </div>
          )
        
    }
