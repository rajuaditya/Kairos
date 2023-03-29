import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const[singleObject,setSingleObject]=useState("");
    const [loading,setLoading]=useState(true)
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true)
        try {
            fetch(`https://dummyjson.com/products/${id}`).then(res=>res.json()).then((item)=>{
                setSingleObject(item)
            })
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
       
        },[id])

        if (loading) {
            return(
                <div><h1>loading....</h1></div>
            )
        }
        const{title,thumbnail,price}=singleObject
  return (
    <React.Fragment>
    <div className='single'>
        <img src={thumbnail} alt="pic" width="400px" height="300px" style={{borderRadius:"30px" ,marginTop:"30px",marginLeft:"30px"}}/>
        <h1 style={{color:"black",fontFamily:"vardhana",textAlign:'center'}}>{title}</h1>
        <h1 style={{color:"black",fontFamily:"vardhana",textAlign:'center'}}>{price} $</h1>
    </div>
    </React.Fragment>
  )
}

export default SingleProduct;