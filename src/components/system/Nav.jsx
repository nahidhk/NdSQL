import React from "react";
import logo from "../../assets/img/nav_logo.png"
import navComponents from "../../data/navComponent.json"
import { useNavigate } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Nav() {
    const navigate = useNavigate();
    return (
        <>
            <div className="nav flex around medel">
                <div>
                    <img src={logo} className="nav-logo" />
                </div>
                <div className="nav-btnBox">
                   <HiMenuAlt1 className="mobileNavButton"/>
                    <ul className="nav-list flex center medel">
                        {
                            navComponents.map(item => (
                                <li onClick={() => navigate(item.target)} key={item.id}>{item.title}</li>
                            ))
                        }
                        <li>
                            <button onClick={() => window.location.href = "https://www.supportkori.com/nahidhk"} className="roundBtn">
                                Support
                            </button>
                        </li>
                    </ul>




                </div>
            </div>
        </>
    )
}