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
          <i className="fas fa-books-medical fa-9x"></i>
        </font>
        <Card.Body className="Allergy">
          <Card.Title style={{ color: "#195a65" }}>Report</Card.Title>
          <Card.Text>
            <div>Title: {props.title}</div>
            <div>Place:{props.place}</div>
            <div>Date:{props.date}</div>
            <div>Description:{props.description}</div>
            <div>Medication:{props.meds}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllergyCard;
