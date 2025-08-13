import { useState , useEffect} from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'


    function App(){

       const[chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages'))|| [])
      // const chatMessages = array[0];
       //const setChatMessages = array[1];//updater function for usestate
        
       
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);

  useEffect(() =>{
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  },[chatMessages])
      return (
        <div className="app-container">
         
        <ChatMessages
        chatMessages ={chatMessages}
        />
        <ChatInput
         chatMessages ={chatMessages}
         setChatMessages = {setChatMessages}
         /> 
        </div>
      );
    }
export default App
