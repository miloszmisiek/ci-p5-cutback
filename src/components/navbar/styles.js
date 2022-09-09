import {
  Col,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export const StyledFormControl = styled(FormControl)`
  font-family: "Font Awesome\ 5 Free", "Montserrat", sans-serif;
  font-weight: 600;
  display: inline-block;
  width: 100%;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    z-index: -1;
  }
`;
export const StyledRow = styled(Row)`
  align-items: center;
  width: 100%;
`;

export const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 95vw;
  justify-content: space-around !important;
  @media (max-width: 440px) {
    max-width: 100%;
  }
`;

export const StyledLogo = styled.span`
  font-family: "Permanent Marker";
  font-size: 2rem;
  margin: auto;
  width: 100%;
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 1.6rem !important;
  }
  @media (max-width: 351px) {
    font-size: 1.5rem !important;
  }
`;

export const StyledLogoName = styled.span`
  @media (max-width: 300px) {
    display: none;
  }
`;

export const StyledButton = styled.button`
  color: #73ad70;
  background: transparent;
  padding: 0 15px;
  max-width: 30%;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: transparent;
    color: black;
  }
`;

export const StyledCol = styled(Col)`
  ${(props) =>
    props.nav
      ? `display: flex;
        justify-content: ${props.loggedout ? "space-around" : "flex-end"} ;
        align-items: center;
        padding: 1vh 0;
        @media (max-width: 440px) {
            width: ${props.loggedout ? "45" : "40"}%;
            font-size: 0.8rem !important;
        }
        @media (min-width: 768px) and (max-width: 991px) {
            width: ${
              props.loggedout ? `${(100 / 12) * 3}%` : `${(100 / 12) * 2}%`
            };
        }
        `
      : props.logo
      ? `@media (max-width: 440px) {
                width: 55%;
                padding-right: 0;
                padding-left: 5px;
            }
            
            @media (min-width: 768px) and (max-width: 991px) {
                width: ${
                  props.loggedout ? `${(100 / 12) * 3}%` : `${(100 / 12) * 6}%`
                };
            }`
      : null}
`;

export const StyledNav = styled(Nav)`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const StyledDropdown = styled(NavDropdown)`
  .dropdown-menu {
    top: 50px;
    right: 0px;
  }
  &.show:before {
    position: absolute;
    display: inline-block;
    content: "";
    top: 42px;
    right: 22px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.175);
  }
  &.show:after {
    position: absolute;
    display: inline-block;
    content: "";
    top: 43px;
    right: 21px;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid #fff;
    z-index: 1001;
  }
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #b4d3b2;
  border-radius: 20px;
  width: 100%;
  @media (max-width: 767px) {
    max-width: 95%;
    margin: 15px auto 10px;
  }
`;

export const StyledSignedInMsg = styled.div`
  cursor: default;
  margin: auto;
  width: 100%;
  padding-left: 15px;

  &:hover {
    background-color: transparent;
  }
`;

export const StyledNavLink = styled(NavLink)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    border-color: #b4d3b2;
  }
  @media (max-width: 440px) {
    margin-left: 7px;
  }
  ${(props) =>
    props.dropdownitem
      ? `
        display: block;
        width: 100%;
        padding: 0.25rem 1rem;
        clear: both;
        font-weight: 400;
        text-align: inherit;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
        
        &:hover {
            background-color: #f8f8f8;
        }
        `
      : null}
`;

export const StyledCategoriesDropdown = styled(Dropdown.Toggle)`
  background-color: rgba(180, 211, 178, 1) !important;
  color: black !important;
  font-weight: 600;
  border: 0;
  border-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  &:hover {
    background-color: rgba(180, 193, 185, 1) !important;
  }
  &:focus {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    z-index: -1;
  }

  @media (min-width: 500px) {
    & #categories {
      display: inline !important;
    }
    & #categories-icon {
      display: none !important;
    }
  }
`;
