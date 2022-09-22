import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Avatar from "../../../components/avatar/index";
import CommentEditForm from "../commentEditForm";
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
          {showEditForm ? (
            <CommentEditForm
              id={id}
              content={content}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
          <button onClick={handleDelete}>Delete</button>
        </MediaBody>
        {is_owner && !showEditForm && (
          <button onClick={() => setShowEditForm(true)}>Edit</button>
        )}
      </Media>
    </>
  );
};

export default Comment;
