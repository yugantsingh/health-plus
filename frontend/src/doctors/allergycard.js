import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../jj.jpg";
import "../css/DoctorListCard.css";


const AllergyCard = (props) => {
    return (
      <div>
        <Card border="info" className="DoctorListCards">
          <br />
          <font className="DoctorIcon">
            <i className="fas fa-bacteria fa-9x"></i>
          </font>
          <Card.Body>
            <Card.Title style={{ fontSize: "2rem", color: "#195a65" }}>
              Report
            </Card.Title>
            <Card.Text>
              Title: {props.title}
              Place:{props.place}
              Date:{props.date}
              Description:{props.description}
              Medication:{props.meds}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
};

export default AllergyCard;