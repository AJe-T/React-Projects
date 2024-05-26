// import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer
        className={
          isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
        }
      >
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsam sed commodi libero dolores quaerat soluta consequuntur
            consectetur dignissimos reprehenderit.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms And Conditions</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Contact with us</h4>
          <p>+00 00 00000</p>
          <p>fake@gmail.com</p>
          <p>All Rights Reserved By Someone</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
