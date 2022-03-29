import React from "react";
import NavBar from "./components/navbar";
import MainContent from "./components/main";


export default function App() {
    return (
        <div className="container">
            <NavBar />
            <MainContent />
        </div>
    );
}
