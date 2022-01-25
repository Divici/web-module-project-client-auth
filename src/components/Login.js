import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import loginStyles from './Login.css';

const Login = () => {
    const {push} = useHistory();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        
        axios.post('http://localhost:9000/api/login', credentials)
            .then(resp=> {
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('username', resp.data.username)
                localStorage.setItem('role', resp.data.role)
                push('/friends');
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <div>
            <div className="forms">
                <div>
                    <h1>LOGIN</h1>
                </div>
                
                <form onSubmit={login}>
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input
                            type='text'
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                        />  
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            type='password'
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        /> 
                    </div>
                    <button>Submit</button> 
                </form>
            </div>
        </div>
    )
}

export default Login;