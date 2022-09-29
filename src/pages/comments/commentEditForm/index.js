import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../../api/axiosDefaults";
import { ActionButton, ActionButtonContainer } from "./styles";

const CommentEditForm = ({ id, content, setShowEditForm, setComments }) => {
  const [formContent, setFormContent] = useState(content);

  const handleChange = (e) => {
    setFormContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prev) => ({
        ...prev,
        results: prev.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <ActionButtonContainer>
        <ActionButton save disabled={!content.trim()} type="submit">
          <i className="fas fa-save"></i> Save
        </ActionButton>
        <ActionButton onClick={() => setShowEditForm(false)} type="button">
          Cancel
        </ActionButton>
      </ActionButtonContainer>
    </Form>
  );
};

export default CommentEditForm;
