import React from 'react';

function CreateUser({username , email , onChange , onCreate}){
    return (
        <div>
            <input 
                name = "username"
                placeholder="유저네임" 
                onChange={onChange}
                value = {username} 
            />

            <input 
                name = "email"
                placeholder="유저Email" 
                onChange={onChange}
                value = {email} 
            />
            
            <button  onClick={onCreate}>등록</button>
        </div>

    )
}
export default CreateUser;