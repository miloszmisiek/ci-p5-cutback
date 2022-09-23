import { Button, Media } from "react-bootstrap";
import styled from "styled-components";

export const MediaBody = styled(Media.Body)`
  margin-left: 0.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const OwnerSpan = styled.span`
  font-weight: 600;
`;

export const UpdatedAtSpan = styled.span`
  font-weight: 300;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

export const MoreButton = styled(Button)`
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  padding: 0 0.5rem;

  &:active,
  :focus,
  :hover {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none !important;
    background-color: transparent !important;
    color: rgba(0, 0, 0, 0.5) !important;
  }
`;
