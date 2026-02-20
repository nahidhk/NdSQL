import React from "react";


export default function Contener(props) {
    return (
        <div className="flex center w100">
            <div className="mbW100to80">
                {props.children}
            </div>
        </div>
    )
}