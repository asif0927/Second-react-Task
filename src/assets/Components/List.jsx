import React from 'react'

function List(props) {
  let{products,setProducts}=props;
  function handleDelete(name) {
    let newProducts = products.filter((product) => product.name !== name);
    setProducts(newProducts);
  }
  function handleClearList() {
    setProducts([]);
  }
  function handleByPrice(){
    let sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }
  return (
    <>
     <ul className='list-1-task'> 
      {products.map((product) => (
          <li key={product.name}>
            <span>{product.name} - {product.price} M</span>
            <button onClick={() => handleDelete(product.name)} className='deletebtn'>Delete</button>
          </li>
      ))}
     </ul>
     <div className='buttons-group'>
       <button onClick={() => handleByPrice()}>Product by Price</button>
       <button onClick={handleClearList}>Clear List</button>
     </div>
    </>
  )
}

export default List
