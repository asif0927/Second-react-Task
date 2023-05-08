import React, { useState } from 'react'
import List from './List'

function Input() {
  let [name,setName]=useState('');
  let [price,setPrice]=useState(0);
  let [nameerror,setNameerror]=useState('');
  let [priceerror,setPriceerror]=useState('');
  let [products,setProducts]=useState([]);
  function handleSubmit(e){
    e.preventDefault();
    if (name.length < 5 || price < 0) {
      return; 
    }
    setProducts([...products, { name, price }]);
    setName('');
    setPrice(0);
  }
  function handleChange(e){
    setName(e.target.value)
    if(e.target.value.length<5 || !/[A-Z]/.test(e.target.value)){
      setNameerror('Daxil etdiyiniz mehsulun adi 5 herfden az olmamalidir ve boyuk herf olmalidir!')
      document.getElementById('addinp').disabled=true;
    }
    else{
      setNameerror('');
      document.getElementById('addinp').disabled=false
    }
  }
  
  function handlePriceChange(e){
    setPrice(e.target.value)
    if(e.target.value>0){
      setPriceerror('');
      document.getElementById('addinp').disabled=false
    }
    else{
      setPriceerror('Daxil etdiyiniz mehsulun qiymeti 0-dan asagi olmamalidir.');
      document.getElementById('addinp').disabled=true
    }
  }  
  
  return (
    <>
       <h2 className='task1'>Task1</h2>
       <form className='inputform' onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value={name} name="text" id="nameaddinp" onChange={(e)=>handleChange(e)} placeholder='enter product' required/>
        <div className='errormsg'>{nameerror}</div>
        <input type="number" value={price} name="number" id="numberaddinp" onChange={(e)=>handlePriceChange(e)} placeholder='enter price' required/>
        <div className='errormsg'>{priceerror}</div>
        <button id="addinp" type="submit" disabled={nameerror || priceerror}>Add</button>
       </form>
       <List products={products} setProducts={setProducts}></List>
    </>
  )
}

export default Input
