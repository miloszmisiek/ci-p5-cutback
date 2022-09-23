import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import ProductsPage from "../../products/productsPage";
import {
  ProfileData,
  ProfileInfoContainer,
  ProfileName,
  Stats,
} from "./styles";

const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        setProfileData(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  return (
    <>
      {hasLoaded ? (
        <>
          <Row>
            <ProfileInfoContainer>
              <Avatar src={profileData.image} height={150} />
              <ProfileData>
                <ProfileName>{profileData.owner}</ProfileName>
                <Stats>
                  <span>{}</span>
                  <span></span>
                  <span></span>
                </Stats>
              </ProfileData>
            </ProfileInfoContainer>
          </Row>
          <hr />
          <ProductsPage
            filter={`owner__profile=${id}`}
            heightCorrection={"370px"}
          />{" "}
        </>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProfilePage;
