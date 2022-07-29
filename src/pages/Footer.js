import React from "react";
import { FaGithub } from "react-icons/fa";


export default function Footer(){
    return (
        <footer className="footer">
        <div className="container text-center">
        {FaGithub}
        <p>Footer here</p>
        </div>

        </footer>
    )
}