import React, {useState,useEffect} from 'react';
import axios from 'axios';

function UserList(){
    const [listOfUsers, setListOfUsers]=useState([]);

    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            setListOfUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        
    }, [] );                       

return(
    <div>
        {listOfUsers.map(user => (
            <div key={user.id}>
                <h2 style={{color:"blue"}} > {user.name }</h2>
                <p style={{color:"green"}}>{user.email}</p>
                </div>
        ))}
    </div>
);
}

export default UserList
