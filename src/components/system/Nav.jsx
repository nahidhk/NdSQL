import React from "react";
import logo from "../../assets/img/nav_logo.png"

export default function Nav() {
    return (
        <>
            <div className="nav flex around medel">
                <div>
                    <img src={logo} className="nav-logo" />
                </div>
                <div className="nav-btnBox">
                    <button onClick={() => window.location.href = "https://www.supportkori.com/nahidhk"} className="roundBtn">
                        Support
                    </button>
                </div>
            </div>
        </>
    )
}