import React,{useState} from "react"
import { link,useLocation} from "react-router-dom"
import NavLinks from "./NavLinks"
import { NavLink,isPathActive } from "react-router-dom" 
import Link from "daisyui/components/link";


export default function Heater(){
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const location=useLocation();

    const isNavItemActive=(path)=>isPathActive(path,location.pathname);
    return(
        <header className="navbar bg-base-100 shadow-lg">
            <div className={`navbar-start dropdrown dropdown-bottom ${isMenuOpen ? 'dropdown-open' : ''}`}>
                <div className="btn bg-ghost md:hidden" onClick={()=>setIsMenuOpen(open => !open)}>
                    <HiBar3 className="w-6 h-6"/>{""}
                </div>
                {isMenuOpen && (
                    <NavLinks items={NAV_ITEMS} isActive={isNavItemActive} onItemClick={()=>setIsMenuOpen(false)} listClassName={"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max"}/>
                )}
                <Link to ="/" className="btn btn-ghost text-lg font-bold text-primary hover:text-primary-focus transition-colors duration-200">🍔早餐時光</Link>
                <div className="navbar-center hidden md:flex">
                    <NavLinks items={NAV_ITEMS} isActive={isNavItemActive} listClassName={"menu menu-horizontal px-1"}/>
                </div>
            </div>
        </header>
    );
}