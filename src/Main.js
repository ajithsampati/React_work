import React from "react";
import { Route, Routes, } from "react-router-dom";
import AboutComponent from "./About";
import ContactComponent from "./Contact";
import ErrorComponent from "./Error";
import Homecomponent from "./Home";
import ProjectComponent from "./Project";
// import Task01Component from "./Task01";

 export default  function MainComponent(){

    return(
        <div>
       {/* <Task01Componen t></Task01Component> */}

        <Routes>
            <Route path="/" element={<Homecomponent></Homecomponent>}></Route>
            <Route path="/Home" elmpmement={<Homecomponent></Homecomponent>}></Route>
            <Route path="/About" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/Project" element={<ProjectComponent></ProjectComponent>}></Route>
            <Route path="/contact" element={<ContactComponent></ContactComponent>}></Route>
            <Route path ="*" element ={<ErrorComponent></ErrorComponent>}></Route>
        </Routes>


        </div>
    )
 }