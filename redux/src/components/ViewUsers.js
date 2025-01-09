import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../slice/UserSlices';
import { useSelector } from 'react-redux';

import './viewuser.css'



const ViewUsers=()=>{
    const userData =useSelector(state => state.Users);
const dispatch =useDispatch();
function handledelUsers(index){
    dispatch(deleteUser(index));
}

return(
    <div>
        <h1>
            view Users List
        </h1>
        {
            userData.map((user ,index)=>{

                return(
                    <u1 key={index}>
                        <h2>{user}</h2>
                        
                        <button className='uki' onClick={()=>
                            {handledelUsers(index)}
                        }>delete</button>
                        

                    </u1>
                )
            })
        }
    </div>
)

}

export default ViewUsers