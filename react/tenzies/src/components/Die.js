import React from "react";
import "./style.css";
export default function Die(props) {
    return <div className="die">
        <h1>{props.value}</h1>
    </div>;
}
