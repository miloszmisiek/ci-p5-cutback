import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq, axiosRes } from "../../../api/axiosDefaults";
import { Divider } from "../../products/productPage/styles";
import {
  CommentContainer,
  CommentInput,
  CommentText,
  PostBox,
  PostButton,
  TypeBox,
} from "./styles";

const CommentCreateForm = ({ productData, setProductData, setComments }) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const commentFormData = new FormData();
    commentFormData.append("content", comment);
    commentFormData.append("product", id);
    try {
      const { data } = await axiosRes.post("/comments/", commentFormData);
      // setComments((prev) => [data, ...prev]);
      setProductData((prev) => ({
        ...prev,
        comments_count: prev.comments_count + 1,
      }));
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <Form onSubmit={handleCommentSubmit}>
      <TypeBox>
        <CommentText>
          <CommentInput
            type="text"
            placeholder="Comment..."
            onChange={handleCommentChange}
            name="comment"
            value={comment}
          />
        </CommentText>
        <PostBox>
          <PostButton variant="primary" type="submit">
            Post
          </PostButton>
        </PostBox>
      </TypeBox>
    </Form>
  );
};

export default CommentCreateForm;
