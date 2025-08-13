import { useState } from 'react'

import './App.css'

    function EmailInput(){

      return(
        <input 
          className= "email-input"
          placeholder='email'
          size= '30'
        />
      )
    };

    function PasswordInput({showPassword,}){
    
      return(
        <input 
          className= "email-input"
          placeholder='Password'
          size= '30'
          type={!showPassword?'Password':'Text'}
        />
      )
    }


    function ShowButton({showPassword,setShowPasword}){
      
      function show(){
        setShowPasword(!showPassword)
      }
      return(
        <button
         className="show-button"
         onClick={show}>
        {showPassword ? "Hide" : "Show"}
        </button>
      )
    };

    function LoginButton(){
      return(
        <div>
            <button className="login">Login</button>

        <button className="login" >Sign up</button>
        </div>
       )
    };


    function App(){
       const [showPassword, setShowPasword]= useState(false);

     return(
      <div>
        <h1>Hello,welcome to my website</h1>
        <EmailInput /> <br />
        <PasswordInput 
        showPassword={showPassword}
        setShowPasword={setShowPasword}/>
        <ShowButton 
        showPassword={showPassword}
        setShowPasword={setShowPasword}/>

        <LoginButton />
      </div>
     )
    }

export default App
