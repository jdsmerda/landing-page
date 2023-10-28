import React from "react";

export default function Content() {
  return (
    <div id="content">
      <div id="qualities">
        <div className="quality">
          <img src="/comunication.svg" alt="comunication" />
          <p>
            Consistent and effective communication
          </p>
        </div>

        <div className="quality">
          <img src="/speed.svg" alt="analysis" />
          <p>
            Speed and SEO optimization
          </p>
        </div>

        <div className="quality">
          <img src="/delivery.svg" alt="analysis" />
          <p>
            Fast delivery
          </p>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <img src="/order.svg" alt="done" />
          <div className="text">
            <p className="pink">How does it work?</p>
            <h1>
              How to order a website
            </h1>
            <p className="blue">
              Getting a website takes a few simple steps:
            </p>
            <ul>
              <li>
                {" "}
                Send me an e-mail, (adress listed in contact page) with your name and a brief description of what you want
              </li>
              <li>
                {" "}
                We will schedule a meeting, where I will ask you for detailed information and make an agreement on the price
              </li>
              <li>
                {" "}
                Now I will develop the website based on your request and then let you review it on another meeting. I will then adjust the website based on your comments
              </li>
              <li>
                {" "}
                When you are happy with the result, I will share the code with you using a github repository, or deploy the website for you (assuming you own a domain).
              </li>
              
            </ul>
          </div>
        </div>
        <div className="feature left">
          <div className="text">
            <p className="pink">What do we offer?</p>
            <h1>
              Immersive solutions for <br />
              business
            </h1>
            <p className="blue">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum ea velit repellendus veritatis facere officiis modi
              veniam, ratione dolor eos.
            </p>
            <ul>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, itaque.
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, quo.
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, quod!
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                repudiandae?
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta, libero.
              </li>
            </ul>
          </div>
          <img src="/dizajn.svg" alt="done" />
        </div>

      
          
      </div>
    </div>
  );
}
