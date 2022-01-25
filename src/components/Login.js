import React from "react";
import loginStyles from './Login.css';

const Login = () => {

    return (
        <div>
            <div className="forms">
                <div>
                    <h1>LOGIN</h1>
                </div>
                
                <form>
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                        />  
                    </div>
                    <div className="input">
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