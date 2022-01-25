import React from "react";
import loginStyles from './Login.css';

const AddFriends = () => {

    return (
        <div className="forms">
            <h1>Add Friend</h1> 
            <form>
                <div className="input">
                    <label htmlFor="friend-name">Friend Name</label>
                    <input
                        id="friend-name"
                    />  
                </div>
                <div className="input">
                    <label htmlFor="email">Friend Email</label>
                    <input
                        type='email'
                        id="email"
                    /> 
                </div>
                <button>Submit</button> 
            </form>   
        </div>
    )
}

export default AddFriends;