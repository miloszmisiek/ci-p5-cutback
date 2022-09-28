import React, { useEffect, useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { AvgScore, RatingComponent } from "../../products/productCard/styles";
import ProductsPage from "../../products/productsPage";
import StarRatings from "react-star-ratings";
import {
  AddProductBtn,
  AvatarContainer,
  ProfileData,
  ProfileInfoContainer,
  ProfileName,
  ProfilePageDivider,
  RowProfilePage,
  Stats,
  StatsContainer,
  StatsTitle,
  StatsValues,
} from "./styles";
import { ToolTip } from "../profileEditPage/styles";

const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const is_owner = currentUser?.profile_id === parseInt(id);

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        setProfileData(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  return (
    <>
      {hasLoaded ? (
        <>
          <RowProfilePage>
            {currentUser && (
              <Link to="/products/create">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<ToolTip id={`tooltip-top`}>Add product</ToolTip>}
                >
                  <AddProductBtn>
                    <i className="fas fa-plus"></i>
                  </AddProductBtn>
                </OverlayTrigger>
              </Link>
            )}

            <ProfileInfoContainer>
              <AvatarContainer>
                {is_owner ? (
                  <Link to={`/profiles/${id}/edit`}>
                    <Avatar
                      shadow={true}
                      src={profileData.image}
                      height={120}
                    />
                  </Link>
                ) : (
                  <Avatar shadow={true} src={profileData.image} height={120} />
                )}
              </AvatarContainer>
              <ProfileData>
                <ProfileName>{profileData.owner}</ProfileName>
                <StatsContainer>
                  <Stats>
                    <StatsTitle>Products</StatsTitle>
                    <StatsValues>
                      {!!profileData.products_count ? (
                        profileData.products_count
                      ) : (
                        <i className="far fa-sad-cry"></i>
                      )}
                    </StatsValues>
                  </Stats>
                  <Stats>
                    <StatsTitle>Avg Rating</StatsTitle>
                    {!!profileData.avg_score ? (
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
                    ) : (
                      <StatsValues>
                        <i className="far fa-sad-cry"></i>
                      </StatsValues>
                    )}
                  </Stats>
                  <Stats>
                    <StatsTitle>All Ratings</StatsTitle>
                    <StatsValues>
                      {!!profileData.all_scores ? (
                        profileData.all_scores
                      ) : (
                        <i className="far fa-sad-cry"></i>
                      )}
                    </StatsValues>
                  </Stats>
                </StatsContainer>
              </ProfileData>
            </ProfileInfoContainer>
          </RowProfilePage>
          <ProfilePageDivider />
          {!!profileData.products_count ? (
            <ProductsPage
              filter={`owner__profile=${id}`}
              heightcorrection={"370px"}
              visible={null}
            />
          ) : (
            <Asset
              src={
                "https://res.cloudinary.com/milo-milo/image/upload/v1664234685/000_1705.S.05.V01.surfingskeleton_pf4n2t.svg"
              }
              message="No products, no waves, no fun..."
              height={200}
            />
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProfilePage;
