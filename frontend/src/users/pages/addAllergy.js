import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "../../css/Allergy.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useHttpClient } from "../../shared/hooks/useHttpClient";
import { AuthContext } from "../../shared/util/AuthContext";

const Allergy = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    var title = document.getElementById("AF").value;
    var place = document.getElementById("AR").value;
    var date = document.getElementById("AS").value;
    var description = document.getElementById("AT").value;
    var meds = document.getElementById("AU").value;

    try {
      await sendRequest(
        "http://localhost:5000/api/users/allergy",
        "POST",
        JSON.stringify({
          title: title,
          place: place,
          date: date,
          description: description,
          meds: meds,
          creator: auth.userId,
        }),
        { "Content-Type": "application/json" }
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <div className="BGGradeAllergy">
      <div className="TopMarginAllergy"></div>

      <div className="box" id="heading">
        <h1 className="Heading"> Report Form</h1>{" "}
      </div>
      <Jumbotron className="container" bg-dark>
        <Form className="form-signin" onSubmit={placeSubmitHandler}>
          <Form.Group controlId="formGroupheart">
            <Form.Label className="AllergyFormTextLabel">
              Report Title
            </Form.Label>
            <Form.Control
              type="text"
              id="AF"
              placeholder="Report Title"
              className="AllergyFormText"
            />
          </Form.Group>
          <Form.Group controlId="formGroupBP">
            <Form.Label className="AllergyFormTextLabel">Place</Form.Label>
            <Form.Control
              type="text"
              id="AR"
              className="AllergyFormText"
              placeholder="Place"
            />
          </Form.Group>
          <Form.Group controlId="formGroupBP">
            <Form.Label className="AllergyFormTextLabel">Date</Form.Label>
            <Form.Control
              type="text"
              id="AS"
              className="AllergyFormText"
              placeholder="Date"
            />
          </Form.Group>
          <Form.Group controlId="formGroupBP">
            <Form.Label className="AllergyFormTextLabel">
              Description
            </Form.Label>
            <Form.Control
              type="text"
              id="AT"
              className="AllergyFormText"
              placeholder="Description"
            />
          </Form.Group>
          <Form.Group controlId="formGroupBP">
            <Form.Label className="AllergyFormTextLabel">Medication</Form.Label>
            <Form.Control
              type="text"
              id="AU"
              className="AllergyFormText"
              placeholder="Medication"
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit" className="AllergyButton">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default Allergy;
