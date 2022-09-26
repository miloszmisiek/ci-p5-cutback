import React, { useEffect, useRef, useState } from "react";
import { Alert, Col, Form, OverlayTrigger } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import { useSetAlertContext } from "../../../contexts/AlertContext";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../../contexts/CurrentUserContext";
import { useSetModalContext } from "../../../contexts/ModalContext";
import { ActionButtonContainer } from "../../comments/commentEditForm/styles";
import {
  AvatarContainer,
  AvatarFigure,
  CancelButton,
  EmailAddress,
  EmailDescritpion,
  FormControl,
  PersonalInfo,
  PhoneInputCustom,
  ProfileButton,
  RowCustom,
  ToolTip,
} from "./styles";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

const ProfileEditPage = () => {
  const { id } = useParams();
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [profileData, setProfileData] = useState({
    owner: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const { owner, username, first_name, last_name, email, image } = profileData;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const imageFile = useRef();
  const { handleClose, handleShow } = useSetModalContext();
  const { handleShowAlert } = useSetAlertContext();

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}`);
          const { owner, first_name, last_name, email, phone_number, image } =
            data;
          setProfileData((prev) => ({
            ...prev,
            owner: owner,
            username: currentUser.username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            image: image,
          }));
          setPhoneNo(phone_number);
          setHasLoaded(true);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("go back useeffect");
        history.goBack();
      }
    };
    handleMount();
  }, [currentUser, history, id, hasLoaded]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/profiles/${id}/`);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(profileData, phoneNo, country);
    const profileFormData = new FormData();
    profileFormData.append("first_name", first_name);
    profileFormData.append("last_name", last_name);
    profileFormData.append("phone_number", phoneNo);

    if (imageFile?.current?.files[0]) {
      profileFormData.append("image", imageFile?.current?.files[0]);
    }
    try {
      const { data } = await axiosRes.put(`/profiles/${id}/`, profileFormData);
      username !== currentUser.username &&
        (await axiosRes.put("/dj-rest-auth/user/", { username }));
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
        profile_image: data.image,
      }));
      handleShowAlert("success", "Your profile has been updated!");
      history.goBack();
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
        <RowCustom>
          {/* <ModalCustom /> */}
          <Col xs={12} md={{ span: 6, order: "last" }}>
            <AvatarContainer>
              <Form.Group>
                <div>
                  <Form.Label htmlFor="image-upload">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <ToolTip id={`tooltip-top`}>Change your avatar</ToolTip>
                      }
                    >
                      <AvatarFigure>
                        <Avatar shadow={true} src={image} height={200} />
                      </AvatarFigure>
                    </OverlayTrigger>
                  </Form.Label>
                </div>
                <Form.File
                  className="d-none"
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }
                    setDisabled(false);
                  }}
                />
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </AvatarContainer>
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <PersonalInfo>Personal Information</PersonalInfo>
              <hr />
              <EmailAddress>
                <EmailDescritpion>Email address:</EmailDescritpion>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <ToolTip id={`tooltip-top`}>
                      You can't edit your email address for user verification
                      reason.
                    </ToolTip>
                  }
                >
                  <span>{email}</span>
                </OverlayTrigger>
              </EmailAddress>
              <Form.Group controlId="formUsername">
                <Form.Label className="d-none">Username</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username ? username : ""}
                  onChange={handleChange}
                  disabled={disabled}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert className="ml-auto" variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="formFirstName">
                <Form.Label className="d-none">First Name</Form.Label>
                <FormControl
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={first_name}
                  onChange={handleChange}
                  disabled={disabled}
                />
              </Form.Group>
              {errors.first_name?.map((message, idx) => (
                <Alert className="ml-auto" variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="formLasttName">
                <Form.Label className="d-none">Last Name</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={last_name}
                  onChange={handleChange}
                  disabled={disabled}
                />
              </Form.Group>
              {errors.last_name?.map((message, idx) => (
                <Alert className="ml-auto" variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="formPhoneNumber">
                <PhoneInputCustom
                  placeholder="Phone No."
                  value={phoneNo}
                  onChange={setPhoneNo}
                  onCountryChange={setCountry}
                  limitMaxLength={true}
                  disabled={disabled}
                />
              </Form.Group>
              {errors.phone_number?.map((message, idx) => (
                <Alert className="ml-auto" variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <ActionButtonContainer>
                {disabled ? (
                  <ProfileButton
                    edit="true"
                    onClick={(e) => {
                      e.preventDefault();
                      setDisabled(false);
                    }}
                  >
                    Edit
                  </ProfileButton>
                ) : (
                  <>
                    <ProfileButton type="submit">Save</ProfileButton>
                    <CancelButton
                      onClick={(e) => {
                        e.preventDefault();
                        setDisabled(true);
                      }}
                    >
                      Cancel
                    </CancelButton>
                  </>
                )}
              </ActionButtonContainer>

              <PersonalInfo delete="true">Delete Account</PersonalInfo>
              <hr />
              <Form.Text>
                Once you delete your account, you will loose all your data.
                Please be certain.
              </Form.Text>
              <ProfileButton
                delete="true"
                onClick={() => handleShow("account", handleDelete)}
              >
                Delete
              </ProfileButton>
            </Form>
          </Col>
        </RowCustom>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProfileEditPage;
