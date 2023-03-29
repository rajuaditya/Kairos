import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
const Kairo = () => {
 const[kairo,setKairo]=useState([])
 const [filterByName,setFilterByName]=useState("")
 const[filteredItems,setFilteredItems]=useState([])
   useEffect(()=>{
   fetch("https://dummyjson.com/products").then(res=>res.json()).then(item=>
   {
    setKairo(item.products)
    setFilteredItems(item.products)
  })
   },[])
   
useEffect(()=>{
  if (filterByName) {
    const newItems=kairo.filter((eachItem)=>{
      return eachItem.title.toLowerCase().includes(filterByName.toLowerCase())
    })
    setFilteredItems(newItems)
  }
  else{
    setFilteredItems([...kairo])
  }

},[filterByName])

  return (
   <React.Fragment>
    <h1 style={{textAlign:"center "}}>Kairos Tech</h1>
    <form className='int'>
      <input id='search-bar' type="text" placeholder='Search By Name'value={filterByName} onChange={(e)=>setFilterByName(e.target.value)} style={{fontSize:"24px",}}/>&nbsp;
      {/* <input type="submit" value="Submit" className='btn2'/> */}
      
    </form>
    <div className='commers'> 
     {
      filteredItems.map((item)=>{
        const {id,title,thumbnail,price}=item;
        return(
          <div key={id} className="box">
            <img src={thumbnail} alt="pic" id='product'/>
            <h4>{title}</h4>
            <h4 style={{float:"right",marginRight:"20px",marginTop:"30px"}}>Price:{price}$</h4>
            <Link to={`/products/${id}`}><button className='btn'>Add Cart</button></Link>
          </div>
        )
      })
     }
    </div>
   </React.Fragment>
  )
};



export default Kairo;