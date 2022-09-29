import Dropdown  from "react-bootstrap/Dropdown";
import styled from "styled-components";

export const DropdownCustom = styled(Dropdown)`
  .dropdown-menu.show {
    inset: -8px 10px auto auto !important;
    display: flex;
    justify-content: space-evenly;
    padding: 0.3rem 0 !important;
  }
  &.show:after {
    position: absolute;
    display: inline-block;
    content: "";
    top: 8px;
    right: 25px;
    border-left: 10px solid #fff;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    z-index: 1001;
  }
  &.show:before {
    position: absolute;
    display: inline-block;
    content: "";
    top: 4px;
    right: 23px;
    border-left: 15px solid rgba(0, 0, 0, 0.175);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;

export const ActionButton = styled(Dropdown.Item)`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.delete ? "red" : "color: rgba(0, 0, 0, 0.5)")};
  padding: 0.2rem 0.5rem !important;
  width: auto;

  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    color: ${(props) => (props.delete ? "red" : "color: rgba(0, 0, 0, 0.5)")};
    background: transparent;
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
