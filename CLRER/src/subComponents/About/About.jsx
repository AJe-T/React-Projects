// import React from "react";
import people1 from "../../Assets/people.jpg";
import people2 from "../../Assets/people2.jpg";

const About = () => {
  return (
    <section id="aboutUs_Mini">
      <div className="first_container">
        <div className="content">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi rem
            sint sapiente illum corrupti distinctio molestias atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            magnam et reiciendis alias culpa, quam odio consectetur architecto,
            error perferendis omnis exercitationem dolores.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium eius ex labore. Veniam, ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            cum saepe? Cum, dolorem.
          </p>
        </div>
        <button>We strive to offer you best possible homes to stay</button>
      </div>
      <div className="second_container">
        <div className="image_1">
          <img src={people1} alt="people1" />
        </div>
        <div className="image_2">
          <img src={people2} alt="people2" />
        </div>
      </div>
    </section>
  );
};

export default About;
