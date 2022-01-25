import React, {useState, useEffect} from "react";
import axios from "axios";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem('token')

        axios.get('/friends', {
            headers: {
                authorization: token
            },
            baseURL: 'http://localhost:9000/api'
        })
            .then(resp=>{
                setFriends(resp.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, []);

    return (
        <div>
            <h1>Friends List</h1>
            <ul>
                {
                    friends.map(friend =>{
                        return <li key={friend.id}>{friend.name} - {friend.email}</li>    
                    })
                }
            </ul>    
        </div>
    )
}

export default FriendsList;