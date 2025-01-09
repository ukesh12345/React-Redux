import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../slice/UserSlices';


const AddUser =() =>{
    const [input ,setInput]= useState('');
    const dispatch =useDispatch();

    function handleUser(){
        if(input){
            dispatch(addUser(input))
        }
    }

return(

    <div>

        <h1>React Redux</h1>
        <input type='text' placeholder='enter new user'
        value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <br/>
        <button onClick={handleUser} id='Addbutton'>
            Add New User
        </button>

            </div>
)


}







export default AddUser