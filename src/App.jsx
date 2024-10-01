import Navbar from "./Navbar.jsx";
import React from "react";
import {Fragment} from "react";
import Footer from "./Footer.jsx";
import Pizza from "./Pizza.jsx";

export default function App(){
    return (
        <>
            <Navbar/>
            <Pizza/>
            <Footer/>
        </>
    )
}
