import React from "react";
import stringr from '../img/stringr.svg';

export default function Navigation() {
    function navigate(elementId) {
        let offsetTop = document.getElementById(elementId).offsetTop;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: "smooth"
        });
    }
  
  return (
    <div>
        <div>
            <a exact to="/"></a><img src={stringr} alt="stringr" /><a/>
        </div>
        <div>
            <a onClick={() => navigate("what_is_stringr")} to="/what_is_stringr">
                what is stringr
            </a>
            <a onClick={() => navigate("how_it_works")} to="how_it_works">
                How it works
            </a>
            <a onClick={() => navigate("Learn_more")} to="/Learn_more">
                Learn more
            </a>
            <a onClick={() => navigate("about_us")} to="/about_us">
                About us
            </a>
            <a onClick={() => navigate("faq")} to="/faq">
                Faq
            </a>
        </div>
        <div>
            <a> Videographers </a>
            <a> Login </a>
        </div>
    </div>
  );
}