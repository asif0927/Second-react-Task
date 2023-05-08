import React from 'react'
import {data} from "./users.js";
function Login({setIsLogged,user,setUser}) {
    function handleSubmit(e){
        e.preventDefault();
        let found = data.find((item)=>item.username==user.username && item.password == user.password);
        if (found===undefined)
            found=false;
        else
            found = true;
        setIsLogged(found);
    }
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value});
    }
  return (
    <div>
        <h2 className='task-3-header'>Task3</h2>
      <form onSubmit={(e)=>handleSubmit(e)} className='form-3'>
        <input name="username" onChange={(e)=>handleChange(e)} placeholder="username" type='text' required/>
        <input name="password" onChange={(e)=>handleChange(e)} placeholder="password" type='password' required/>
        <button type="submit">Login</button>
     </form>
    </div>
  )
}

export default Login
