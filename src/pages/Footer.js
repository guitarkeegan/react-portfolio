import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Footer(){
    return (
        <footer className="footer">
        <div className="container text-center">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
        </div>
        </footer>
    )
}