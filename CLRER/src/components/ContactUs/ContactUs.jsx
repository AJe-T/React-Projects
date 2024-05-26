// import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";
import about from "../../Assets/about.jpg";

const ContactUs = () => {
  return (
    <section id="contact">
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi
        necessitatibus quod?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        repellendus excepturi. Sunt deleniti officiis numquam.
      </p>
      <div className="container">
        <img src={about} alt="about pics" />
        <div className="content">
          <h3>Lets Connect</h3>
          <div>
            <p>Phone</p>
            <span>+012 0390 2032</span>
          </div>
          <div>
            <p>Email</p>
            <span>fake@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>Hose No.123 Fake-Sector </span>
          </div>
          <ul>
            <Link to={"/"} target="_blank">
              <RiFacebookBoxLine />
            </Link>
            <Link to={"/"} target="_blank">
              <RiFacebookBoxLine />
            </Link>
            <Link to={"/"} target="_blank">
              <RiFacebookBoxLine />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
