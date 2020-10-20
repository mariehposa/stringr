import React from "react";
import stringr from '../img/stringr.svg';

export default function Navigation() {
  
  return (
    <div>
        <div>
            <img src={stringr} alt="stringr" />
        </div>
        <div>
            <a onClick={() => navigate("header")} exact to="/">
                what is stringr
            </a>
            <a onClick={() => navigate("about")} to="/about">
                How it works
            </a>
            <a onClick={() => navigate("skills")} to="/skills">
                Learn more
            </a>
            <a onClick={() => navigate("portfolio")} to="/portfolio">
                About us
            </a>
            <a onClick={() => navigate("contact")} to="/contact">
                Faq
            </a>
        </div>
        <div>
            <a>
                Videographers
            </a>
            <a>
                Login
            </a>
        </div>
    </div>
  );
}