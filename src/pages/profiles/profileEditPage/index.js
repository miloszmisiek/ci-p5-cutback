import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import { PostButton } from "../../comments/commentCreateForm/styles";
import {
  ActionButton,
  ActionButtonContainer,
} from "../../comments/commentEditForm/styles";
import {
  CancelButton,
  PersonalInfo,
  PhoneInputCustom,
  ProfileButton,
  SaveButton,
} from "./styles";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

const ProfileEditPage = () => {
  const { id } = useParams();
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [profileData, setProfileData] = useState({
    owner: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const { owner, first_name, last_name, email, phone_number } = profileData;
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}`);
        const { owner, first_name, last_name, email, phone_number } = data;

        setProfileData((prev) => ({
          ...prev,
          owner: owner,
          first_name: first_name,
          last_name: last_name,
          email: email,
        }));
        setPhoneNo(phone_number);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profileData, phoneNo, country);
    const profileFormData = new FormData();
    for (const property in profileData) {
      profileFormData.append(`${property}`, profileData[property]);
    }
    profileFormData.append("phone_number", phoneNo);
    try {
      await axiosRes.put(`/profiles/${id}/`, profileFormData);
      history.push(`/profiles/${id}/products`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
      // console.log(err);
    }
  };
  return (
    <>
      {hasLoaded ? (
        <Row>
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <PersonalInfo>Personal Information</PersonalInfo>
              <hr />
              <Form.Group controlId="formFirstName">
                <Form.Label className="d-none">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={first_name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formLasttName">
                <Form.Label className="d-none">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={last_name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="d-none">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <PhoneInputCustom
                  placeholder="Phone No."
                  value={phoneNo}
                  onChange={setPhoneNo}
                  onCountryChange={setCountry}
                  limitMaxLength={true}
                />
              </Form.Group>
              {errors.phone_number?.map((message, idx) => (
                <Alert className="ml-auto" variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <ActionButtonContainer>
                <ProfileButton variant="primary" type="submit">
                  Save
                </ProfileButton>
                <CancelButton onClick={() => history.goBack()}>
                  Cancel
                </CancelButton>
              </ActionButtonContainer>
              <PersonalInfo delete="true">Delete Account</PersonalInfo>
              <hr />
              <Form.Text>
                Once you delete your account, you will loose all your data.
                Please be certain.
              </Form.Text>
              <ProfileButton delete="true">Delete</ProfileButton>
            </Form>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProfileEditPage;
