import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, Form, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCategories } from "../../contexts/CategoriesContext";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import {
  useQueryContext,
  useSetQueryContext,
} from "../../contexts/QueryContext";
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
  const [displayName, setDisplayName] = useState("Categories");
  const location = useLocation();
  const { query } = useQueryContext();
  const { setQuery, setHasLoaded } = useSetQueryContext();
  const [menuIsOpen, setMenuIsOpen] = useState({
    navbar: false,
    category: false,
  });
  const history = useHistory();

  useEffect(() => {
    !choices.categories?.some((cat) =>
      location.pathname.includes(cat.display_name.toLowerCase())
    )
      ? setDisplayName("Categories")
      : setDisplayName(
          choices.categories?.filter((cat) =>
            location.pathname.includes(cat.display_name.toLowerCase())
          )[0].display_name
        );
  }, [location, choices, query, history]);

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
        show={menuIsOpen.navbar}
        onToggle={() =>
          setMenuIsOpen((prev) => ({ ...prev, navbar: !prev.navbar }))
        }
      >
        <StyledSignedInMsg>
          {" "}
          Signed in as <br /> <strong>{currentUser?.username}</strong>
        </StyledSignedInMsg>
        <NavDropdown.Divider />
        <StyledNavLink
          dropdownitem="true"
          to={`/`}
          onClick={() => {
            setMenuIsOpen((prev) => ({ ...prev, navbar: !prev.navbar }));
            if (location.pathname === "/") {
              history.go(0);
            }
          }}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          dropdownitem="true"
          to={`/profiles/${currentUser?.profile_id}/`}
          onClick={() => {
            setMenuIsOpen((prev) => ({ ...prev, navbar: !prev }));
            setHasLoaded(false);
          }}
        >
          Profile
        </StyledNavLink>
        <StyledNavLink
          dropdownitem="true"
          to={`/profiles/${currentUser?.profile_id}/edit`}
          onClick={() => {
            setMenuIsOpen((prev) => ({ ...prev, navbar: !prev }));
          }}
        >
          Settings
        </StyledNavLink>
        <NavDropdown.Divider />
        <StyledNavLink
          dropdownitem="true"
          to="/"
          onClick={() => {
            handleSignOut();
            setMenuIsOpen((prev) => ({ ...prev, navbar: !prev }));
          }}
        >
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
        <NavLink
          to="/"
          onClick={() => {
            history.push("/");
            if (location.pathname === "/") {
              history.go(0);
            }
          }}
        >
          <img src={logo} alt="Logo" height="45"></img>
          <StyledLogoName>Cutback</StyledLogoName>
        </NavLink>
      </StyledLogo>
    </StyledCol>
  );

  const searchBarCol = (
    <StyledCol xs={12} md={6}>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <StyledSearchBarContainer>
          <StyledFormControl
            type="text"
            placeholder="&#xF002; Search"
            className="mr-sm-2"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              history.push("/");
              setHasLoaded(false);
            }}
          />
          <SearchBarDropdown
            show={menuIsOpen.category}
            onToggle={() =>
              setMenuIsOpen((prev) => ({
                ...prev,
                category: !prev.category,
              }))
            }
          >
            <StyledCategoriesDropdown id="dropdown-basic">
              <span className="d-none" id="categories">
                {displayName}
              </span>
              <span
                onClick={() =>
                  setMenuIsOpen((prev) => ({
                    ...prev,
                    category: !prev.category,
                  }))
                }
                className="d-inline"
                id="categories-icon"
              >
                <i className="fas fa-th-list"></i>
              </span>
            </StyledCategoriesDropdown>
            <Dropdown.Menu className="end-0">
              <CategoriesLinks
                onClick={() => {
                  setDisplayName("Categories");
                  setMenuIsOpen((prev) => ({
                    ...prev,
                    category: !prev.category,
                  }));
                }}
                to={"/"}
              >
                All
              </CategoriesLinks>
              <Dropdown.Divider />
              {choices.categories?.map((cat) => (
                <CategoriesLinks
                  onClick={() => {
                    setDisplayName(cat.display_name);
                    setMenuIsOpen((prev) => ({
                      ...prev,
                      category: !prev.category,
                    }));
                    setHasLoaded(false);
                  }}
                  key={cat.value}
                  to={`/products/categories/${cat.display_name.toLowerCase()}`}
                >
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
