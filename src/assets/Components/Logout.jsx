import React from 'react'
function Logout({ isLogged }) {
  function handleClick(e) {
    if (window.confirm('Are You Sure ?')) {
      isLogged(false);
    }
  }
  return (
   <>
    <button type='button' onClick={(e)=>handleClick(e)} className='logoutbtn'>Logout</button>
   </>
  )
}


export default Logout
