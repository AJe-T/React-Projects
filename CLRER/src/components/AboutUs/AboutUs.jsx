// import React from "react";
import About from "../../subComponents/About/About";
import about from "../../Assets/about.jpg";

const AboutUs = () => {
  return (
    <>
      <section id="aboutPage" className="page">
        <div className="container">
          <img src={about} alt="aboutUs Pic" />
          <div className="content">
            <h3>Your peace of mind, our priority!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              harum eum pariatur non ut ab quis atque suscipit voluptate ex?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis esse adipisci architecto nulla ab deserunt inventore
              illo suscipit repudiandae. Asperiores dolore reprehenderit qui
              deserunt dolor ex voluptatem at beatae!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              itaque.
            </p>
          </div>
        </div>
        <About />
      </section>
    </>
  );
};

export default AboutUs;
