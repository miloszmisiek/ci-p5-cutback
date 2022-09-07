import React from 'react'
import { Dropdown, Form, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Avatar from '../avatar/index.js';
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
} from './styles.js';


const loggedInMenu = (
    <StyledDropdown title={<Avatar src={logo} height={40} />} id="basic-nav-dropdown">
        <StyledSignedInMsg> Signed in as <br /> <strong>username</strong></StyledSignedInMsg>
        <NavDropdown.Divider />
        {/* TODO: add routes for dropdown section */}
        <StyledNavLink dropdownitem="true" to="/">Your Equipment</StyledNavLink>
        <StyledNavLink dropdownitem="true" to="/">Your Ratings</StyledNavLink>
        <StyledNavLink dropdownitem="true" to="/">Your Profile</StyledNavLink>
        <NavDropdown.Divider />
        {/* TODO: add onClick logout handler */}
        <StyledNavLink dropdownitem="true" to="/">
            <i className="fas fa-sign-out-alt"></i> Logout
        </StyledNavLink>
    </StyledDropdown>


);

const logoCol = (
    <StyledCol logo="true" xs={6} sm={6} md={4} lg={3}>
        <StyledLogo>
            <NavLink to="/">
                <img src={logo} alt='Logo' height="45"></img>
                <StyledLogoName>Cutback</StyledLogoName>
            </NavLink>
        </StyledLogo>
    </StyledCol>
);


const searchBarCol = (
    <StyledCol xs={12} md={6} lg={6}>
        <Form inline>
            <StyledSearchBarContainer>
                <StyledFormControl type="text" placeholder="&#xF002; Search" className="mr-sm-2" />
                <Dropdown>
                    <StyledCategoriesDropdown id="dropdown-basic">
                        <span className='d-none' id='categories'>Categories</span>
                        <span className='d-inline' id='categories-icon'><i className="fas fa-th-list"></i></span>
                    </StyledCategoriesDropdown>
                    <Dropdown.Menu className='end-0'>
                        <Dropdown.Item>Boards</Dropdown.Item>
                        <Dropdown.Item>Kites</Dropdown.Item>
                        <Dropdown.Item>Wetsuits</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </StyledSearchBarContainer>
        </Form>
    </StyledCol>
);

// TODO: logged-in styling width 425-768 - adjust search bar responsiveness
const NavBar = (props) => {
    const handleChange = () => props.setSignUp("true");
    return (
        <StyledNavbar
            bg="white"
            expand="md"
            fixed='top'
        >
            <StyledContainer>
                <StyledRow>
                    {logoCol}
                    <StyledCol nav="true" xs={6} sm={6} md={{ span: 4, order: 'last' }} lg={3}>
                        <>
                            <NavLink
                                to="/signin"
                            >
                                Sign in

                            </NavLink>
                            <StyledNavLink
                            to="/signup"
                            isActive={(match) => { props.setSignUp(match ? "true" : null) }}
                            >
                                Sign up
                            </StyledNavLink>
                        </>
                    </StyledCol>
                    {searchBarCol}
                </StyledRow>
            </StyledContainer>
        </StyledNavbar>
    )
}

export default NavBar
