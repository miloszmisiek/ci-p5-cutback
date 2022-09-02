import React from 'react'
import { Dropdown, Form, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Avatar from '../avatar/Avatar';
import {
    StyledButton,
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
} from './NavBar.styled';


const loggedOutIcons = (
    <>
        <NavLink
            to="/signin"
        >
            Sign in
        </NavLink>
        <StyledNavLink
            to="/signup"
        >
            Sign up
        </StyledNavLink>
    </>
);

// TODO: logged-in styling width 425-768 - adjust search bar responsiveness
const NavBar = () => {
    return (
        <StyledNavbar
            bg="white"
            expand="md"
            fixed='top'
        >
            <StyledContainer>
                <StyledRow>
                    <StyledCol logo xs={6} sm={6} md={4} lg={3}>
                        <StyledLogo>
                            <NavLink to="/">
                                <img src={logo} alt='Logo' height="45"></img>
                                <StyledLogoName>Cutback</StyledLogoName>
                            </NavLink>
                        </StyledLogo>
                    </StyledCol>
                    <StyledCol nav xs={6} sm={6} md={{ span: 4, order: 'last' }} lg={3}>
                        {/* {loggedOutIcons} */}
                        <StyledDropdown title={<Avatar src={logo} height={40} />} id="basic-nav-dropdown">
                            <StyledSignedInMsg> Signed in as <br /> <strong>username</strong></StyledSignedInMsg>
                            <NavDropdown.Divider />
                            {/* TODO: add routes for dropdown section */}
                            <StyledNavLink dropdownItem to="/">Your Equipment</StyledNavLink>
                            <StyledNavLink dropdownItem to="/">Your Ratings</StyledNavLink>
                            <StyledNavLink dropdownItem to="/">Your Profile</StyledNavLink>
                            <NavDropdown.Divider />
                            {/* TODO: add onClick logout handler */}
                            <StyledNavLink dropdownItem to="/">
                                <i class="fas fa-sign-out-alt"></i> Logout
                            </StyledNavLink>
                        </StyledDropdown>
                    </StyledCol>
                    <StyledCol xs={12} md={6} lg={6}>
                        <Form inline>
                            <StyledSearchBarContainer>
                                <StyledFormControl type="text" placeholder="&#xF002; Search" className="mr-sm-2" />
                                {/* TODO: dropdown menu for small screens - adjust font-size and padding */}
                                <Dropdown>
                                    <StyledCategoriesDropdown id="dropdown-basic">
                                        Categories
                                    </StyledCategoriesDropdown>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </StyledSearchBarContainer>
                        </Form>
                    </StyledCol>
                </StyledRow>
            </StyledContainer>
        </StyledNavbar>
    )
}

export default NavBar
