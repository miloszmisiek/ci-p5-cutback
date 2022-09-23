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
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <ActionButton onClick={() => setShowEditForm(true)}>
          <i className="fas fa-edit"></i>
        </ActionButton>
        <VerticalDivider></VerticalDivider>
        <ActionButton delete onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </ActionButton>
      </Popover.Content>
    </Popover>
  );
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
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="left"
            overlay={popover}
          >
            <MoreButton>
              <i className="fas fa-ellipsis-v"></i>
            </MoreButton>
          </OverlayTrigger>
        )}
      </Media>
    </>
  );
};

export default Comment;
