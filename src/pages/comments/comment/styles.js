import { Button, Media, Popover } from "react-bootstrap";
import styled from "styled-components";

export const MediaBody = styled(Media.Body)`
  margin-left: 0.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const OwnerSpan = styled.span`
  font-weight: 600;
`;

export const UpdatedAtSpan = styled.span`
  font-weight: 300;
  margin-left: 1rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
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

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.delete ? "red" : "color: rgba(0, 0, 0, 0.5)")};
  padding: 0 1rem;
  /* border-left: ${(props) =>
    props.delete ? "0.5px solid rgba(0,0,0,.2)" : "none"};
  border-right: ${(props) =>
    props.delete ? "none" : "0.5px solid rgba(0,0,0,.2)"}; */

  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  display: inline;
  font-size: 1.5rem;
`;

export const PopOver = styled(Popover)`
  z-index: 1040 !important;
  /* margin-right: 0.5rem !important; */
`;
