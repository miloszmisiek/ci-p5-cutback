import { Media } from "react-bootstrap";
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
