import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import Asset from "../../../components/asset";
import Avatar from "../../../components/avatar";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import ProductCard from "../../products/productCard";
import ProductsPage from "../../products/productsPage";
import { ReactPaginateStyled } from "../../products/productsPage/styles";
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
  //   const [pageCount, setPageCount] = useState(0);
  //   const [profileProducts, setProfileProducts] = useState({ results: [] });
  //   console.log(profileData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileProducts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/products/?owner__profile=${id}`),
          ]);
        setProfileData(pageProfile);
        // setProfileProducts(profileProducts);
        // setPageCount(
        //   !!profileProducts.next
        //     ? Math.ceil(profileProducts.count / profileProducts.results?.length)
        //     : 0
        // );
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  //   const handlePageClick = async (e) => {
  //     try {
  //       const { data } = await axiosReq.get(
  //         `/products/?page=${e.selected + 1}&owner__profile=${id}`
  //       );
  //       setProfileProducts(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

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
          <ProductsPage filter={`owner__profile=${id}`} />{" "}
        </>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ProfilePage;
