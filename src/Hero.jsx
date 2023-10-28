import React from "react";

export default function Hero() {
  return (
    <div className="main__content">
      <div className="hero-section">
        <p className="pink">Professional</p>
        <h1 id="header">Development For <br />Business </h1>
        <p id="desc">For a modern, profitable business, a high quality website is a must.<br/> And I will develop one for you. </p>
        <button id="main__btn"><a href="#">Get Services</a></button>
      </div>
      <div className="main__img--container">
        <img src="/neon.jpg" alt="neon image" id="main__img" />
      </div>
    </div>
  );
}
