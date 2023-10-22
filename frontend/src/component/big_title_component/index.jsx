import React from "react";
import "./style.css";

const Big_title_component = ({ title }) => {
    return (
        <div className=".Datainput_container">
            <div className= ".Datainput_text">
           {title}
        </div>
        </div>
    )
}

export default Big_title_component;