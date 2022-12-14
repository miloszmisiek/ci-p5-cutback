import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import { axiosRes } from "../../../api/axiosDefaults";
import Avatar from "../../../components/avatar/index";
import CommentEditForm from "../commentEditForm";
import {
  Divider,
  InfoContainer,
  MediaBody,
  OwnerSpan,
  UpdatedAtSpan,
} from "./styles";
import { useSetModalContext } from "../../../contexts/ModalContext";
import { MoreDropdown } from "../../../components/moreDropdown";
import { useSetAlertContext } from "../../../contexts/AlertContext";

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
  const { handleClose, handleShow } = useSetModalContext();
  const { handleShowAlert } = useSetAlertContext();
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setProductData((prev) => ({
        ...prev,
        comments_count: prev.comments_count - 1,
      }));
    } catch (err) {
      // console.log(err);
    }
    handleClose();
    window.scrollTo(0, 0);
    handleShowAlert("secondary", "Your comment has been deleted.");
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
        </MediaBody>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={() => handleShow("comment", handleDelete)}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
