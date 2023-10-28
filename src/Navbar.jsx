import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="lg">
        <i className="fa-solid fa-laptop-code fa-xl" style={{color: "#00eeff"}}></i>
        <h2>Business</h2>
      </div>
      <div id="right-side">
        <ul className="items">
          <li id="home-link">Home</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
        <button id="navbtn">Contact</button>
      </div>
    </div>
  );
}
