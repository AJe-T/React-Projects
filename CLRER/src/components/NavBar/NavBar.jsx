import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={() => gotoHome()}>
          LUXURY RENTAL
        </div>
        <ul>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/villa">VILLAS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => {
            setNavHeight(!navHeight);
          }}
        />
      </nav>
    </>
  );
};

export default NavBar;
