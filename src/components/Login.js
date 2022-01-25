import React from "react";
import loginStyles from './Login.css';

const Login = () => {

    return (
        <div>
            <div className="login">
                <div>
                    <h1>LOGIN</h1>
                </div>
                
                <form>
                    <div className="login-input">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                        />  
                    </div>
                    <div className="login-input">
                        <label htmlFor="password">Password</label>
                        <input
                            type='password'
                            id="password"
                        /> 
                    </div>
                    <button>Submit</button> 
                </form>
            </div>
        </div>
    )
}

export default Login;