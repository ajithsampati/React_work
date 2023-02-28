 import React from "react";
 import {Link} from "react-router-dom";
 export default  function HeaderComponent(props) {

    return(
        <div>
     <header>
        <h1 className = "mainhead"> {props.maintitle}</h1>
        <nav className="mainnav">
            {
           props.Mainnavitems ? props.Mainnavitems.map((items, index)=>{
            return< Link to={items} key={index}>{items}</Link>
           }):"data Loss"
            }
        </nav>

     </header>
     </div>
    )
 }