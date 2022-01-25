import React, {useState} from "react";
import loginStyles from './Login.css';
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddFriends = () => {
    const {push} = useHistory();
    const [ form, setForm] = useState({
        name: '',
        email: '',
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            },
        })
        .then(resp=>{
            push('/friends');
        })
        .catch(err=>{
           console.log(err); 
        })
    }

    return (
        <div className="forms">
            <h1>Add Friend</h1> 
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="name">Friend Name</label>
                    <input
                        type='text'
                        name="name"
                        value= {form.name}
                        onChange={handleChange}
                    />  
                </div>
                <div className="input">
                    <label htmlFor="email">Friend Email</label>
                    <input
                        type='email'
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    /> 
                </div>
                <button>Submit</button> 
            </form>   
        </div>
    )
}

export default AddFriends;