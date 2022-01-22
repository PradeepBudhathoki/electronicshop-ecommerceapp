
import React, {useState } from "react";

import './Itemdisplay.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Button from '@mui/material/Button';
import Header from "../Header/Header";

function Itemdisplay({key,id,name,image,price,stock,category}){
    
    const[cart,setCart]=useState([]);
    const [count,setCount]=useState(0)

    const handleAdd=()=>{
        setCart([...cart,`${cart.length}`])
        setCount(count+1)
        console.log(cart)
        console.log(count)
    }

    
    
    return(
        <>
        
        <div className="item" key={key}>
            <img className="item__image" src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"></img>
            <div className="item__name">
                <p>
                    <a href="#">{name}</a>
                </p>
                
            </div>
            <div className="item__price">
                <p>{price}</p>
            </div> 
            <div className="item__stock">
                <p>Stock:{stock}</p>
            </div>
            <div className="item__category" >
                <p>Category:{category[1]}</p>
                
            </div>
            <Button variant="contained" style={{Width: '30px', maxHeight: '30px'}} onClick={handleAdd} >Add to Cart</Button>
        </div>
        </>
    )
}
export default Itemdisplay
