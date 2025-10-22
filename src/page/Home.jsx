import React from "react"
import { link,useLocation} from "react-router-dom"
import NavLinks from "../components/layout/NavLinks"
import { NavLink,isPathActive } from "react-router-dom" 

export default function Home(){
    const features =[
        {icon: "⚡", label: "Fast Build Times"},
    ]
    return <h1>Home</h1>
}