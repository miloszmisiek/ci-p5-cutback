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
  min-height: 5.6rem;

  @media (max-width: 767px) {
    min-height: 9.6rem;
  }
`;

export const StyledFormControl = styled(FormControl)`
  font-family: "Font Awesome\ 5 Free", "Montserrat", sans-serif;
  font-weight: 600;
  display: inline-block;
  width: 100% !important;
  background-color: transparent;
  border: none;
  padding-right: 4rem;
  &:focus {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    z-index: -1;
  }

  @media (min-width: 576px) {
    padding-right: 8rem;
  }
`;
export const StyledRow = styled(Row)`
  align-items: center;
  width: 100%;
  margin: 0;
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
  @media (max-width: 368px) {
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
        justify-content: flex-end;
        align-items: center;
        padding: 1vh 0;
        @media (max-width: 300px) {
                max-width: ${
                  props.loggedout ? `${(100 / 12) * 6}% !important` : null
                };
            }
        @media (max-width: 355px) {
            font-size: 0.8rem !important;
        }
        @media (max-width: 440px) {
            max-width: ${props.loggedout ? "45" : "40"}%;
        }
        @media (min-width: 768px) and (max-width: 991px) {
            max-width: ${
              props.loggedout ? `${(100 / 12) * 3}%` : `${(100 / 12) * 2}%`
            };

        `
      : props.logo
      ? `
        padding: 0;
        @media (max-width: 440px) {
                max-width: 55%;
                flex: 0 0 55%;
            }
            
        @media (min-width: 768px) and (max-width: 991px) {
            max-width: ${
              props.loggedout ? `${(100 / 12) * 3}%` : `${(100 / 12) * 6}%`
            };
        };
        @media (max-width: 300px) {
            max-width: ${(100 / 12) * 6}%;
        }
        `
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
    left: auto;
    margin-top: 7px !important;
  }
  &.show:before {
    position: absolute;
    display: inline-block;
    content: "";
    top: 42px;
    right: 37px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.175);
    margin-top: 7px;
  }
  &.show:after {
    position: absolute;
    display: inline-block;
    content: "";
    top: 43px;
    right: 36px;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid #fff;
    z-index: 1001;
    margin-top: 7px;
  }
`;

export const StyledSearchBarContainer = styled.div`
  position: relative;
  height: 100%;
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
  margin-left: ${(props) => (props.dropdownitem ? null : "1rem")};
  &:hover {
    border-color: #b4d3b2;
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
  @media (max-width: 320px) {
    margin-left: ${(props) => (props.dropdownitem ? null : "0.6rem")};
  }
`;

export const StyledCategoriesDropdown = styled(Dropdown.Toggle)`
  height: 100%;
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
    min-width: 8rem;
    & #categories {
      display: inline !important;
    }
    & #categories-icon {
      display: none !important;
    }
  }
`;

export const SearchBarDropdown = styled(Dropdown)`
  .dropdown-menu {
    left: auto;
    right: 0;
  }
  .dropdown-menu.show {
    margin-top: 0.5rem !important;
  }

  position: absolute;
  right: 0;
  height: 100%;
`;

export const CategoriesLinks = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
