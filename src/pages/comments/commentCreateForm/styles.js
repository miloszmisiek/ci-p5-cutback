import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

export const TypeBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const CommentText = styled.div`
  display: flex;
  width: 100%;
`;

export const PostBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 1rem;
`;

export const CommentInput = styled(Form.Control)`
  border: none;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 1rem;
  border-radius: 0;
  resize: none;
  width: 100%;
`;

export const PostButton = styled(Button)`
  padding: 0.375rem 1.5rem;
  background-color: rgb(180, 211, 178) !important;
  border: none;
  color: black;
  font-weight: 600;
  &:hover {
    background-color: rgba(180, 193, 185, 1) !important;
    color: black;
  }
`;
