import React,{useState} from "react"
import { Link,useLocation} from "react-router-dom"
import NavLinks from "./NavLinks"
import { NAV_LINKS,isPathActive } from "../../utils/navigation";
import {HiBars3,HiSun,HiMoon} from "react-icons/hi";
import useTheme from "../../hooks/useTheme";
import UserMenu from "./UserMenu";

export default function Heater(){
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const location=useLocation();
    const {theme,toggleTheme} =useTheme("light");
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
                <div className="navbar-end flex gap-2 items-center">
                    <button className="btn btn-ghost btn-circle border-2 bg-base-300" onClick={toggleTheme} aria-label="切換主題">
                        {theme === "dark" ? (
                            <HiMoon className="w-6 h-6"/>
                        ):(
                            <HiSun className="w-6 h-6"/>
                        )}
                    </button>
                    <UserMenu/>
                </div>
            </div>
        </header>
    );
};