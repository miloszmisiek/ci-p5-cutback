import React, { useEffect, useState } from "react";
import { Carousel, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import { FullRow } from "../../auth/signUpForm/styles";
import StarRatings from "react-star-ratings";
import {
  BrandStock,
  CarouselImgProductPage,
  CarouselProductPage,
  Category,
  CommentContainer,
  CommentPagination,
  ContactData,
  ContactInformation,
  ContactLink,
  CountryFlag,
  CreatedDate,
  Description,
  Divider,
  LocationLink,
  Price,
  ProductAvgScore,
  ProductPageColumn,
  ProductPageConters,
  Rating,
  RatingsWrapper,
  TextContainer,
  Title,
  TitleLink,
  TopWrapper,
  Wrapper,
} from "./styles";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import CommentCreateForm from "../../comments/commentCreateForm";
import Comment from "../../comments/comment";
import Asset from "../../../components/asset/index";
import { useSetAlertContext } from "../../../contexts/AlertContext";
import {
  formatPhoneNumberIntl,
  parsePhoneNumber,
} from "react-phone-number-input";

const ProductPage = ({ itemsPerPage }) => {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);

  const [rating, setRating] = useState({
    rating_data: [],
    avg: 0,
    currentUserRating: null,
    scores: {},
    all_scores: 0,
  });
  const [comments, setComments] = useState({});
  const [profile, setProfile] = useState({
    profile_id: null,
    owner: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const [productData, setProductData] = useState({
    category_name: "",
    title: "",
    description: "",
    brand: "",
    in_stock: false,
    price: "",
    street: "",
    city: "",
    country: {},
    gallery: [],
    comments_count: "",
    created_at: "",
  });
  const [pageCount, setPageCount] = useState(0);

  const { handleShowAlert } = useSetAlertContext();

  const { rating_data, avg, currentUserRating, scores, all_scores } = rating;
  const { profile_id, owner, email, first_name, last_name, phone_number } =
    profile;
  const {
    category_name,
    country,
    title,
    description,
    brand,
    price,
    street,
    city,
    in_stock,
    gallery,
    comments_count,
    created_at,
  } = productData;
  const is_owner = currentUser?.username === owner;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: products }, { data: commentsData }] = await Promise.all([
          axiosReq.get(`/products/${id}/`),
          axiosReq.get(`comments/?product=${id}`),
        ]);
        const {
          category_name,
          country,
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
          created_at,
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
          category_name,
          country: country,
          title,
          description,
          brand,
          price,
          street,
          city,
          in_stock,
          gallery,
          comments_count,
          created_at,
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
          rating_data: scores.data,
          avg: scores.statistics.avg,
          scores: scores.statistics.scores,
          all_scores: scores.statistics.all_scores,
        }));
        setComments(commentsData);
        setPageCount(
          !!commentsData.next
            ? Math.ceil(commentsData?.count / commentsData.results?.length)
            : 0
        );
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    const timer = setTimeout(() => {
      handleMount();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [id, currentUserRating, comments_count, pageCount]);

  const handleRating = async (newRating) => {
    try {
      await axiosRes.post(`/ratings/`, { product: id, score: newRating });
    } catch (err) {
      // console.log(err);
    }
    setRating({ ...rating, currentUserRating: newRating });
    handleShowAlert("success", "Your vote has been registered!");
  };

  const editCurrentUserRating = async (newRating) => {
    const currentUserRating = rating_data?.filter((rating) => rating.is_owner);
    try {
      await axiosRes.put(`ratings/${currentUserRating[0]?.id}`, {
        product: id,
        score: newRating,
      });
    } catch (err) {
      // console.log(err);
    }
    setRating({ ...rating, currentUserRating: newRating });
    handleShowAlert("secondary", "Your vote has been updated.");
  };
  const handlePageClick = async (e) => {
    try {
      const { data } = await axiosReq.get(
        `comments/?page=${e.selected + 1}&product=${id}`
      );
      setComments(data);
    } catch (err) {
      // console.log(err);
    }
  };

  const ratingProductPage = (
    <RatingsWrapper>
      <Rating>
        <ProductAvgScore>{parseFloat(avg).toFixed(1)}</ProductAvgScore>
        {is_owner ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>You can't rate your own post!</Tooltip>}
          >
            <StarRatings
              rating={avg}
              starHoverColor="green"
              starDimension="20px"
              starSpacing="2px"
              starEmptyColor="rgb(180,211,178)"
              starRatedColor="green"
            />
          </OverlayTrigger>
        ) : (
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
        )}
      </Rating>
      <ProductPageConters>
        {" "}
        {all_scores}
        {all_scores !== 1 ? " ratings" : " rating"} and {comments_count}
        {comments_count !== 1 ? " reviews" : " review"}
      </ProductPageConters>
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
    <ProductPageColumn text="true" xs={12} md={{ span: 5, order: "last" }}>
      <TextContainer>
        <Wrapper>
          <TopWrapper>
            <Category>{category_name}</Category>
            <Price> &#8364; {price}</Price>
          </TopWrapper>
          {is_owner ? (
            <Title>
              <TitleLink to={`/products/${id}/edit`}>{title}</TitleLink>
            </Title>
          ) : (
            <Title>{title}</Title>
          )}
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
            <i className="far fa-id-card pr-1"></i> Contact Information
          </ContactInformation>
          <ContactData>
            <ContactLink as={Link} to={`/profiles/${profile_id}`}>
              <i className="fas fa-user mr-2"></i>{" "}
              {first_name ? first_name : owner} {last_name ? last_name : null}
            </ContactLink>
          </ContactData>
          {phone_number ? (
            <ContactData>
              <ContactLink href={`tel:${formatPhoneNumberIntl(phone_number)}`}>
                <i className="fas fa-phone-alt mr-2"></i>
                {formatPhoneNumberIntl(phone_number)}
              </ContactLink>
              {
                <CountryFlag
                  svg
                  countryCode={parsePhoneNumber(phone_number).country}
                />
              }
            </ContactData>
          ) : null}
          <ContactData>
            <ContactLink href={`mailto:${email}`} aria-label="Go to email page">
              <i className="fas fa-envelope mr-2"></i>
              {email}
            </ContactLink>
          </ContactData>
        </Wrapper>
        <Divider />
        <Wrapper>
          <ContactInformation>
            <LocationLink
              href={`http://maps.google.com/?q=${
                street + " " + city + " " + country.name
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-pin pr-1"></i> Location
            </LocationLink>
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
        <Divider />
        <CreatedDate>
          <span className="mr-1">
            <i className="far fa-calendar-plus mr-2"></i>Created at:{" "}
          </span>
          {created_at}
        </CreatedDate>
      </TextContainer>
    </ProductPageColumn>
  );
  const carouselProductPage = (
    <ProductPageColumn xs={12} md={7}>
      {gallery.length > 1 ? (
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
      ) : !!gallery.length ? (
        <Asset src={gallery[0]?.image} height={300} productCard />
      ) : (
        <Asset
          src="https://res.cloudinary.com/milo-milo/image/upload/v1663236405/default_gkffon.png"
          height={200}
          productCard
        />
      )}
      {ratingProductPage}
      <CommentContainer>
        {currentUser ? (
          <CommentCreateForm
            productData={productData}
            comments={comments}
            setProductData={setProductData}
            setComments={setComments}
          />
        ) : !!comments.results?.length ? (
          "Comments"
        ) : null}
        {!!comments.results?.length ? (
          comments.results?.map((comment) => (
            <Comment
              key={comment.id}
              setProductData={setProductData}
              setComments={setComments}
              {...comment}
            />
          ))
        ) : currentUser ? (
          <span>No comments yet, be the first to comment!</span>
        ) : (
          <span>No comments... yet</span>
        )}
        <CommentPagination
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
      {hasLoaded ? (
        <>
          <FullRow>
            {productPageTest}
            {carouselProductPage}
          </FullRow>
        </>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};
export default ProductPage;
