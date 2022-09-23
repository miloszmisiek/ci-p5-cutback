import React, { useState } from "react";
import { Button, Media, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import Avatar from "../../../components/avatar/index";
import CommentEditForm from "../commentEditForm";
import {
  ActionButton,
  Divider,
  InfoContainer,
  MediaBody,
  MoreButton,
  OwnerSpan,
  UpdatedAtSpan,
  VerticalDivider,
  PopOver,
} from "./styles";
import ModalCustom from "../../../components/modal";
import { useSetModalContext } from "../../../contexts/ModalContext";
import { MoreDropdown, ThreeDots } from "../../../components/moreDropdown";

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
    handleClose();
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
          // <OverlayTrigger
          //   trigger="click"
          //   rootClose
          //   placement="left"
          //   overlay={popover}
          // >
          //   <MoreButton>
          //     <i className="fas fa-ellipsis-v"></i>
          //   </MoreButton>
          // </OverlayTrigger>
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
