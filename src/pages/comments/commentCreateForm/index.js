import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
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

const CommentCreateForm = ({
  productData,
  setProductData,
  comments,
  setComments,
  // setPageCount,
}) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
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
      // setPageCount(
      //   Math.ceil(comments.count + 1 / comments.results?.length)
      // );
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
