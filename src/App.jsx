import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="main">
        <div className="main__container">
          
            <Hero />
            <Content />
            <Footer />

        </div>
      </div>
    </>
  );
}
