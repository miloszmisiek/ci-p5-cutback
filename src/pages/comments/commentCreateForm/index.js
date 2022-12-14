import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { axiosRes } from "../../../api/axiosDefaults";
import { useSetAlertContext } from "../../../contexts/AlertContext";

import {
  CommentInput,
  CommentText,
  PostBox,
  PostButton,
  TypeBox,
} from "./styles";

const CommentCreateForm = ({ setProductData, setComments }) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { handleShowAlert } = useSetAlertContext();
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const commentFormData = new FormData();
    commentFormData.append("content", comment);
    commentFormData.append("product", id);
    try {
      const { data } = await axiosRes.post("/comments/", commentFormData);
      setComments((prev) => ({
        ...prev,
        results: [data, ...prev.results],
      }));
      setProductData((prev) => ({
        ...prev,
        comments_count: prev.comments_count + 1,
      }));
      setComment("");
    } catch (err) {
      // console.log(err);
    }
    window.scrollTo(0, 0);
    handleShowAlert("success", "Your comment has been submitted!");
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <Form onSubmit={handleCommentSubmit}>
      <TypeBox>
        <CommentText>
          <CommentInput
            as="textarea"
            placeholder="Comment..."
            onChange={handleCommentChange}
            name="comment"
            value={comment}
            rows={2}
          />
        </CommentText>
        <PostBox>
          <PostButton variant="success" type="submit">
            Post
          </PostButton>
        </PostBox>
      </TypeBox>
    </Form>
  );
};

export default CommentCreateForm;
