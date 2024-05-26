// import React from 'react'
import { villas } from "../../villas";
import { useParams } from "react-router-dom";
import landing from "../../Assets/landing.jpg";
import people1 from "../../Assets/people.jpg";
import people2 from "../../Assets/people2.jpg";
import host from "../../Assets/host.jpg";

const SingleVilla = () => {
  const { id } = useParams();
  const numId = Number(id);
  const villa = villas.find((villa) => villa.id === numId);
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{villa.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={villa.image} alt={villa.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src={people1} alt="people" />
                <img src={people2} alt="people2" />
              </div>
              <div>
                <img src={landing} alt="landing" />
                <img src={host} alt="host" />
              </div>
            </div>
          </div>
          <h4>{villa.location}</h4>
          <p>
            {villa.bathrooms} BathRooms / {villa.bedrooms} BedRooms /{" "}
            {villa.guests} Guests / {villa.squareMeter} Area
          </p>
          <div className="checkin_out">
            <h5>
              Check In: <span>9:00 AM</span>
            </h5>
            <h5>
              Check OUT: <span>11:00 PM</span>
            </h5>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d204.3468373812779!2d-88.53725873855437!3d30.443326507163093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1715412873841!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVilla;
