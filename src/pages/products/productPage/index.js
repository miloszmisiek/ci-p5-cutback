import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import { FullRow } from "../../auth/signUpForm/styles";
import StarRatings from "react-star-ratings";
import {
  BrandStock,
  CarouselImgProductPage,
  CarouselProductPage,
  CommentContainer,
  ContactData,
  ContactInformation,
  CountryFlag,
  Description,
  Divider,
  Price,
  ProductAvgScore,
  ProductPageColumn,
  Rating,
  RatingsWrapper,
  TextContainer,
  Title,
  Wrapper,
} from "./styles";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import CommentCreateForm from "../../comments/commentCreateForm";
import Comment from "../../comments/comment";
import Asset from "../../../components/asset/index";
import { ReactPaginateStyled } from "../productsPage/styles";

const ProductPage = ({ itemsPerPage }) => {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [rating, setRating] = useState({
    rating_data: [],
    avg: 0,
    currentUserRating: null,
    scores: {},
  });
  const [comments, setComments] = useState([]);
  const [profile, setProfile] = useState({
    profile_id: null,
    owner: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const [productData, setProductData] = useState({
    category: "",
    title: "",
    description: "",
    brand: "",
    in_stock: false,
    price: "",
    price_currency_symbol: "",
    street: "",
    city: "",
    country: {},
    gallery: [],
    comments_count: "",
  });
  const [pageCount, setPageCount] = useState(0);

  const { rating_data, avg, currentUserRating, scores } = rating;
  const { profile_id, owner, email, first_name, last_name, phone_number } =
    profile;
  const {
    category,
    country,
    title,
    description,
    price_currency_symbol,
    brand,
    price,
    street,
    city,
    in_stock,
    gallery,
    comments_count,
  } = productData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: products }, { data: commentsData }] = await Promise.all([
          axiosReq.get(`/products/${id}/`),
          axiosReq.get(`comments/?product=${id}`),
        ]);
        const {
          category,
          country,
          price_currency_symbol,
          title,
          description,
          brand,
          price,
          street,
          city,
          gallery,
          in_stock,
          owner_profile,
          scores,
          comments_count,
        } = products;
        const {
          id: profile_id,
          owner,
          email,
          first_name,
          last_name,
          phone_number,
        } = owner_profile;

        setProductData({
          category,
          country: country,
          price_currency_symbol,
          title,
          description,
          brand,
          price,
          street,
          city,
          in_stock,
          gallery,
          comments_count,
        });
        setProfile({
          profile_id,
          owner,
          email,
          first_name,
          last_name,
          phone_number,
        });
        setRating((prev) => ({
          ...prev,
          rating_data: scores?.data,
          avg: scores?.statistics?.avg,
          scores: scores?.statistics?.scores,
        }));
        setComments(commentsData.results);
        setPageCount(
          !!commentsData.next
            ? Math.ceil(commentsData?.count / commentsData?.results?.length)
            : 0
        );
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id, currentUserRating, comments_count]);

  const handleRating = async (newRating) => {
    try {
      await axiosRes.post(`/ratings/`, { product: id, score: newRating });
    } catch (err) {
      console.log(err);
    }
    setRating({ ...rating, currentUserRating: newRating });
  };

  const editCurrentUserRating = async (newRating) => {
    const currentUserRating = rating_data?.filter((rating) => rating.is_owner);
    try {
      await axiosRes.put(`ratings/${currentUserRating[0]?.id}`, {
        product: id,
        score: newRating,
      });
    } catch (err) {
      console.log(err);
    }
    setRating({ ...rating, currentUserRating: newRating });
  };
  const handlePageClick = async (e) => {
    try {
      const { data } = await axiosReq.get(
        `comments/?page=${e.selected + 1}&product=${id}`
      );
      setComments(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const ratingProductPage = (
    <RatingsWrapper>
      <Rating>
        <ProductAvgScore>{parseFloat(avg).toFixed(1)}</ProductAvgScore>
        <StarRatings
          rating={avg}
          starHoverColor="green"
          starDimension="20px"
          starSpacing="2px"
          starEmptyColor="rgb(180,211,178)"
          starRatedColor="green"
          changeRating={
            rating_data?.some((rating) => rating.is_owner)
              ? editCurrentUserRating
              : currentUser && handleRating
          }
        />
      </Rating>
      <Divider />
      {Object.entries(scores).map((score) => (
        <Rating key={parseInt(score[0].split("star_")[1])} scores>
          <StarRatings
            rating={parseInt(score[0].split("star_")[1])}
            starDimension="20px"
            starSpacing="2px"
            starEmptyColor="rgb(180,211,178)"
            starRatedColor="green"
          />
          <ProductAvgScore>{score[1]}</ProductAvgScore>
        </Rating>
      ))}
    </RatingsWrapper>
  );
  const productPageTest = (
    <ProductPageColumn text="true" xs={12} md={5}>
      <TextContainer>
        <Wrapper>
          <Price>
            {price_currency_symbol} {price}
          </Price>
          <Title>{title}</Title>
        </Wrapper>
        <Divider />
        <Wrapper>
          <BrandStock>{brand}</BrandStock>
          <Description>{description}</Description>
          {in_stock ? (
            <BrandStock available="true">Available</BrandStock>
          ) : (
            <BrandStock outOfStock="true">Out of stock</BrandStock>
          )}
        </Wrapper>
        <Divider />
        <Wrapper>
          <ContactInformation>
            <i className="far fa-id-card"></i> Contact Information
          </ContactInformation>
          <ContactData>
            <NavLink to={`/profile/${profile_id}`}>
              <i className="fas fa-user"></i>{" "}
            </NavLink>
            {first_name ? first_name : owner} {last_name ? last_name : null}
          </ContactData>
          {phone_number ? (
            <ContactData>
              <i className="fas fa-phone-alt"></i>
              {phone_number}
            </ContactData>
          ) : null}
          <ContactData>
            <a href={`mailto:${email}`} aria-label="Go to email page">
              <i className="fas fa-envelope"></i>
            </a>
            {email}
          </ContactData>
        </Wrapper>
        <Divider />
        <Wrapper>
          <ContactInformation>
            <i className="fas fa-map-pin"></i> Location
          </ContactInformation>
          <ContactData>
            <strong>Address: </strong>
            {street}
          </ContactData>
          <ContactData>
            <strong>City:</strong> {city}
          </ContactData>
          <ContactData>
            <strong>Country:</strong> {country.name}
            {<CountryFlag svg countryCode={country?.code} />}
          </ContactData>
        </Wrapper>
      </TextContainer>
    </ProductPageColumn>
  );
  const carouselProductPage = (
    <ProductPageColumn xs={12} md={7}>
      {!!gallery.length ? (
        <CarouselProductPage>
          {gallery?.map((image) => (
            <Carousel.Item key={image.id}>
              <CarouselImgProductPage
                className="d-block w-100"
                src={image.image}
                alt="Product image"
                height={300}
              />
            </Carousel.Item>
          ))}
        </CarouselProductPage>
      ) : (
        <Asset
          src={
            "https://res.cloudinary.com/milo-milo/image/upload/v1663236405/default_gkffon.png"
          }
          height={200}
          productCard
        />
      )}
      {ratingProductPage}
      <CommentContainer>
        {currentUser && (
          <CommentCreateForm
            productData={productData}
            setProductData={setProductData}
            setComments={setComments}
          />
        )}
        {!!comments.length &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              setProductData={setProductData}
              setComments={setComments}
              {...comment}
            />
          ))}
        <ReactPaginateStyled
          nextLabel={<i className="fas fa-chevron-right"></i>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<i className="fas fa-chevron-left"></i>}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </CommentContainer>
    </ProductPageColumn>
  );

  return (
    <>
      {hasLoaded && (
        <FullRow>
          {carouselProductPage}
          {productPageTest}
        </FullRow>
      )}
      ;
    </>
  );
};
export default ProductPage;
