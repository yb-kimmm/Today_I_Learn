import React , {useEffect} from 'react';

function User({user , onRemove , onToggle}){

    const {username , email , id , active} = user;
    useEffect(()=>{
        console.log(`User 값이 설정됨 ${user}`);   

        return () =>{
            console.log(`User 값이 바뀌기전 ${user}`);
        }
    }, [user] );

    return(
    <div>
        <b style = {{
            color : active ? 'green' : 'black',
            cursor : 'pointer'
        }}
        onClick = {()=> onToggle(id)}
        >
            {user.username}</b> <span>{user.email}</span>
        <button onClick={ () => onRemove(user.id) }>삭제</button>
    </div>    
    )
}

function UserList(  {users , onRemove , onToggle } ){
   
    return (
        <div>
            {
            users.map(
                (user,index) => (<User 
                    user={user} 
                    key = {user.id}  
                    onRemove={onRemove}
                    onToggle = {onToggle} />)
            )
            
            }
        </div>

    )
}

export default UserList;