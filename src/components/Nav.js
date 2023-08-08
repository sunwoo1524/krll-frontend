import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <Link to="/" style={{ textDecoration: "none" }}><div className="homelink"><img src={logo} />URL Shortener</div></Link>
            <Link to="/about" style={{ textDecoration: "none" }}><div className="link">About</div></Link>
        </nav>
    )
}

export default Nav;