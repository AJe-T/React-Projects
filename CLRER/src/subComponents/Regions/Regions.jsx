// import React from "react";
import region1 from "../../Assets/region1.jpg";
import region2 from "../../Assets/region2.jpg";

const Regions = () => {
  return (
    <section id="regions">
      <h1>OUR REGIONS</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et similique
        blanditiis assumenda veritatis. Possimus cum earum provident totam.
      </p>
      <div className="region_container">
        <div className="card">
          <img src={region1} alt="mountains" />
          <h2>Mountains</h2>
          <p>
            <span>90</span> Properties
          </p>
        </div>
        <div className="card">
          <img src={region2} alt="coastline" />
          <h2>Coastline</h2>
          <p>
            <span>56</span> Properties
          </p>
        </div>
      </div>
    </section>
  );
};

export default Regions;
