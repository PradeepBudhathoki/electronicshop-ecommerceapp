import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Itemdisplay from "../Itemdisplay/Itemdisplay"
import './Fetchitem.css'


function Fetchitem(){
    const [items,setItems]=useState([])

    useEffect(()=>{
        axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
        .then(function(response){
            setItems(response.data.data.product)
        })
        .catch(function(error){
            console.log(error.message)
        })
        .then(function(){
            //always executed
        })
    })
    return(
        <>
            
            <div className='grid-container'>
                {items.map((item,key)=>(
                    <Itemdisplay 
                        key={item.key}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        stock={item.stock}
                        createDate={item.createDate}
                        category={item.category}
                        
                    />
                    
                ))}
            </div>
        </>
        


    )
}
export default Fetchitem
/*
<img src={"https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"} />
return (
                    <div>
                        <ul>
                            <li key={key}>{item.name}</li>
                        </ul>
                    </div>
                )
                

<div className="grid-container">
            <div className="row">
                <div className="item">

                    <a className="item__image" href="#"></a>
                    
                    <div className="item__name">
                        <p>
                            <a href="#">Item Name1</a>
                        </p>
                    </div>

                    <div className="item__price">
                        <p>$10.00  </p>
                    </div>

                </div>
                
            </div>
            
        </div>

{items.map((item,key)=>(
                    <Itemdisplay 
                        key={item.key}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        stock={item.stock}
                        category={item.category}
                        />
                    ))}
<>
        <div class="grid-container">
            {items.map((item,key)=>(<div class="grid-item">1</div>)

        </div>
        </>*/
