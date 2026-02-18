import React, { useState } from "react";
import logo from "../../assets/img/nav_logo.png"
import navComponents from "../../data/navComponent.json"
import { useNavigate } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Nav() {
    const [dispaly, setDispaly] = useState("");
    const [menuICon, setMenuIcon] = useState(true);
    const navigate = useNavigate();
    const togelMenu = () => {

        if (!menuICon) {
            setMenuIcon(true);
            setDispaly("none");
        } else {
            setMenuIcon(false);
            setDispaly("flex");
        }
    }
    return (
        <>
            <div className="nav flex around medel">
                <div>
                    <img src={logo} className="nav-logo" />
                </div>
                <div className="nav-btnBox">
                    <div onClick={togelMenu}>
                        {
                            menuICon ? (
                                <HiMenuAlt1 className="mobileNavButton" />
                            ) : (
                                <RiCloseLargeFill className="mobileNavButton" />
                            )
                        }
                    </div>

                    <ul style={{ display: dispaly }} className={`nav-list flex center medel`}>
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