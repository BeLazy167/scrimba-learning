import React from "react";
import heroImg from "./images/hero.png";
export default function Hero() {
    return (
        <div className="hero">
            <img src={heroImg} />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
}
