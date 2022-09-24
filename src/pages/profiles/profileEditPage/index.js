import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import { useParams } from "react-router-dom";
import { PostButton } from "../../comments/commentCreateForm/styles";
import { PersonalInfo, PhoneInputCustom, SaveButton } from "./styles";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

const ProfileEditPage = () => {
  const { id } = useParams();
  const [phoneNo, setPhoneNo] = useState({
    number: "",
    country: "",
  });
  return (
    <Row>
      <Col xs={12} md={6}>
        <Form>
          <PersonalInfo>Personal Information</PersonalInfo>
          <hr />
          <Form.Group controlId="formFirstName">
            <Form.Label className="d-none">First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group controlId="formLasttName">
            <Form.Label className="d-none">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="d-none">Email address</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          {/* <Form.Group controlId="formPhoneNumber">
            <Form.Label className="d-none">Phone Number</Form.Label>
            <Form.Control type="email" placeholder="Phone No." />
          </Form.Group> */}
          <Form.Group controlId="formPhoneNumber">
            <PhoneInputCustom
              placeholder="Phone No."
              value={phoneNo.number}
              onChange={(e) => setPhoneNo({...phoneNo, number: e.target.value})}
              onCountryChange={(e) => setPhoneNo({...phoneNo, country: e.target.value})}
              limitMaxLength={true}
            />
          </Form.Group>
          <SaveButton variant="primary" type="submit">
            Submit
          </SaveButton>
        </Form>
      </Col>
      <Col xs={12} md={6}></Col>
    </Row>
  );
};

export default ProfileEditPage;
