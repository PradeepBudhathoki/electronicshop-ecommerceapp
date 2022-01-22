import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import "./Header.css"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Itemdisplay from '../Itemdisplay/Itemdisplay';

function Header(){
    const [count,setCount]=useState(0);

    const handleAdd=()=>{
        setCount(count+1)
    }
    const handleClear=()=>{
        setCount(0)
    }


    
    return(
        <div className="header">
            <h2>Pradeep's Electronic Shop</h2>
            <button onClick={handleAdd}>Add items</button>
            <button onClick={handleClear}>Clear</button>
            <div style={{display:'flex',alignItems:'center'}}><LocalMallIcon />{count}</div>
            
        </div>
    )
}
export default Header