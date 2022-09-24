import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { AvgScore, RatingComponent } from "../../products/productCard/styles";
import ProductsPage from "../../products/productsPage";
import StarRatings from "react-star-ratings";
import {
  ProfileData,
  ProfileInfoContainer,
  ProfileName,
  Stats,
  StatsContainer,
  StatsTitle,
  StatsValues,
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
              <Link to={`/profiles/${id}/edit`}>
                <Avatar shadow={true} src={profileData.image} height={120} />
              </Link>
              <ProfileData>
                <ProfileName>{profileData.owner}</ProfileName>
                <StatsContainer>
                  <Stats>
                    <StatsTitle>Products</StatsTitle>
                    <StatsValues>{profileData.products_count}</StatsValues>
                  </Stats>
                  <Stats>
                    <StatsTitle>Avg Rating</StatsTitle>
                    <RatingComponent>
                      <AvgScore>
                        {parseFloat(profileData.avg_score).toFixed(1)}
                      </AvgScore>
                      <StarRatings
                        rating={profileData.avg_score}
                        numberOfStars={Math.ceil(
                          parseFloat(profileData.avg_score)
                        )}
                        starDimension="20px"
                        starSpacing="2px"
                        starEmptyColor="rgb(180,211,178)"
                        starRatedColor="green"
                      />
                    </RatingComponent>
                  </Stats>
                  <Stats>
                    <StatsTitle>All Ratings</StatsTitle>
                    <StatsValues>{profileData.all_scores}</StatsValues>
                  </Stats>
                </StatsContainer>
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
