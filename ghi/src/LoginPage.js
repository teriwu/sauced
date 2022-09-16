import React, { useState } from "react";
import ReactDOM from "react-dom";
import login from "./LogIn";


function LogInPage(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        login(username, password)
        const fetchConfig = {
          method: "post",
          credentials: "include",
          body: FormData,
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
          },
        };
    }
    
    function onUsernameChange(event){
        setUsername(event.target.value)
    }

    function onPasswordChange(event){
        setPassword(event.target.value)
    }


    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input onChange = {onUsernameChange} type="text" name="uname" required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input onChange = {onPasswordChange} type="password" name="pass" required />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
      
    //   return (
    //     <div className="app">
    //       <div className="login-form">
    //         <div className="title">Sign In</div>
    //         <div>User is successfully logged in</div>
    //       </div>
    //     </div>
    //   );

}

export default LogInPage;