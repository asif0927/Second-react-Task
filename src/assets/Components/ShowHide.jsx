import React, { useState } from 'react'

function ShowHide() {
    let [button,setbutton]=useState("hide");
    let [text,setText]=useState("This is text!");
    function handleClick(e){
        if(button==="hide"){
            setbutton("show");
            setText("");
        }
        else{
            setbutton("hide");
            setText("This is text!");
        }
    }
  return (
    <>
    <div>
      <h2>Task2</h2>
      <button className='showhidebtn' onClick={(e)=>handleClick(e)}>{button}</button>
      <p className='paragraph'>{text}</p>
    </div>
    </>
  )
}

export default ShowHide
