import react from "react";
import "./style.css";
import rlogo from "./images/r.png";

export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="logoimage" src={rlogo} />
            <h3 className="title">ReactFacts</h3>
            <h4 className="navbar-item">React Course - Project 1</h4>
        </nav>
    );
}
