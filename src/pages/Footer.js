import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const styles = {
    portfolio: {
        position: "static",
        bottom: 0,
        width: "100%",
        height: "60px",
        lineHeight: "60px"
    },
}
export default function Footer() {

   

  return (
    <footer className="footer" style={styles.portfolio}>
      <div className="container text-center">
        <a href="https://github.com/guitarkeegan?tab=repositories"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/keegan-anglim-5b2474165/"><FaLinkedin /></a>
        <a href="https://twitter.com/NageekDBeat"><FaTwitter /></a>
      </div>
    </footer>
  );
}
