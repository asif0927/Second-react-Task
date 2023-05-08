import { useState } from 'react'
import Input from './assets/Components/Input'
import ShowHide from './assets/Components/ShowHide'
import Welcome from './assets/Components/Welcome';
import Login from './assets/Components/Login';
import Logout from './assets/Components/Logout';

function App() {
   let [isLogged,setISLogged]=useState();
   let [user,setUser]=useState({name:'',password:''});
  return (
    <>
         <ShowHide></ShowHide>
         <Input></Input>
         {isLogged ?  <Welcome user={user}  /> : <Login user={user} setUser={setUser}  setIsLogged={setISLogged}/>}
    </>
  )
}

export default App
