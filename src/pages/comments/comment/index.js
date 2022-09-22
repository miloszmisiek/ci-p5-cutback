import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Avatar from "../../../components/avatar/index";
import {
  Divider,
  InfoContainer,
  MediaBody,
  OwnerSpan,
  UpdatedAtSpan,
} from "./styles";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    is_owner,
    setComments,
    setProductData,
    id,
  } = props;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setProductData((prev) => ({
        ...prev,
        comments_count: prev.comments_count - 1,
      }));
      // If the id is for the comment we want to remove, our filter method will not return  it into the updated results array.
    //   setComments((prev) => prev.filter((comment) => comment.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Divider />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <MediaBody>
          <InfoContainer>
            <OwnerSpan>{owner}</OwnerSpan>
            <UpdatedAtSpan>{updated_at}</UpdatedAtSpan>
          </InfoContainer>
          {/* {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )} */}
          <p>{content}</p>
          <button onClick={handleDelete}>Delete</button>
        </MediaBody>
        {/* {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )} */}
      </Media>
    </>
  );
};

export default Comment;
