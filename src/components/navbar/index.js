import axios from "axios";
import React from "react";
import { Dropdown, Form, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCategories } from "../../contexts/CategoriesContext";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { removeTokenTimestamp } from "../../utils/utils";
import Avatar from "../avatar/index.js";
import {
  StyledContainer,
  StyledDropdown,
  StyledFormControl,
  StyledLogo,
  StyledCol,
  StyledRow,
  StyledSearchBarContainer,
  StyledSignedInMsg,
  StyledNavLink,
  StyledNavbar,
  StyledLogoName,
  StyledCategoriesDropdown,
  SearchBarDropdown,
  CategoriesLinks,
} from "./styles.js";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const choices = useCategories();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.error(err);
    }
  };

  const loggedOutIcons = (
    <StyledCol
      loggedout="true"
      nav="true"
      xs={6}
      sm={6}
      md={{ span: 4, order: "last" }}
      lg={3}
    >
      <NavLink to="/signin">Sign in</NavLink>
      <StyledNavLink to="/signup">Sign up</StyledNavLink>
    </StyledCol>
  );

  const loggedInMenu = (
    <StyledCol nav="true" xs={6} sm={6} md={{ span: 4, order: "last" }} lg={3}>
      <StyledDropdown
        title={<Avatar src={currentUser?.profile_image} height={40} />}
        id="basic-nav-dropdown"
      >
        <StyledSignedInMsg>
          {" "}
          Signed in as <br /> <strong>{currentUser?.username}</strong>
        </StyledSignedInMsg>
        <NavDropdown.Divider />
        {/* TODO: add routes for dropdown section */}
        <StyledNavLink
          dropdownitem="true"
          to={`/profiles/${currentUser?.profile_id}/products`}
        >
          Your Equipment
        </StyledNavLink>
        <StyledNavLink dropdownitem="true" to="/">
          Your Ratings
        </StyledNavLink>
        <StyledNavLink dropdownitem="true" to="/">
          Your Profile
        </StyledNavLink>
        <NavDropdown.Divider />
        <StyledNavLink dropdownitem="true" to="/" onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </StyledNavLink>
      </StyledDropdown>
    </StyledCol>
  );

  const logoCol = (
    <StyledCol
      loggedout={currentUser ? null : "true"}
      logo="true"
      xs={6}
      sm={6}
      md={4}
      lg={3}
    >
      <StyledLogo>
        <NavLink to="/">
          <img src={logo} alt="Logo" height="45"></img>
          <StyledLogoName>Cutback</StyledLogoName>
        </NavLink>
      </StyledLogo>
    </StyledCol>
  );

  const searchBarCol = (
    <StyledCol xs={12} md={6}>
      <Form inline>
        <StyledSearchBarContainer>
          <StyledFormControl
            type="text"
            placeholder="&#xF002; Search"
            className="mr-sm-2"
          />
          <SearchBarDropdown>
            <StyledCategoriesDropdown id="dropdown-basic">
              <span className="d-none" id="categories">
                Categories
              </span>
              <span className="d-inline" id="categories-icon">
                <i className="fas fa-th-list"></i>
              </span>
            </StyledCategoriesDropdown>
            <Dropdown.Menu className="end-0">
              {choices.categories?.map((cat) => (
                <CategoriesLinks key={cat.value} to={`/${cat.display_name}`}>
                  {cat.display_name}
                </CategoriesLinks>
              ))}
            </Dropdown.Menu>
          </SearchBarDropdown>
        </StyledSearchBarContainer>
      </Form>
    </StyledCol>
  );

  return (
    <StyledNavbar bg="white" expand="md" fixed="top">
      <StyledContainer>
        <StyledRow>
          {logoCol}
          {currentUser ? loggedInMenu : loggedOutIcons}
          {searchBarCol}
        </StyledRow>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
