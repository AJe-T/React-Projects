// import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact_Mini">
      <div className="super_container">
        <div className="container_1">
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
        <div className="container_2">
          <h3>we would love to hear you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
            </div>
            <textarea rows={4} placeholder="Your message..."></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
