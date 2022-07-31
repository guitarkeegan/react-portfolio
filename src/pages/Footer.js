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
    notPortfolio: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "60px",
        lineHeight: "60px"
    }
}
export default function Footer({currentPage}) {

   

  return (
    <footer className="footer" style={currentPage === "Portfolio" ? styles.portfolio : styles.notPortfolio}>
      <div className="container text-center">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
      </div>
    </footer>
  );
}
