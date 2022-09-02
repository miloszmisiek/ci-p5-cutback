import React from 'react'
import { Col, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
    StyledSignedInMsg
} from './NavBar.styled';


const loggedOutIcons = (
    <>
        <Nav.Link
            to="/signin"
        >
            Sign in
        </Nav.Link>
        <Nav.Link
            to="/signup"
        >
            Sign up
        </Nav.Link>
    </>
);

// TODO: styling for logged-in user navbar
const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" fixed='top'>
            <StyledContainer>
                <StyledRow>
                    <StyledCol logo xs={6} sm={6} md={4} lg={3}>
                        <StyledLogo ><img src={logo} alt='Logo' height="45"></img>Cutback</StyledLogo>
                    </StyledCol>
                    <StyledCol nav xs={6} sm={6} md={{ span: 4, order: 'last' }} lg={3}>
                        {/* {loggedOutIcons} */}
                        <StyledDropdown title={<Avatar src={logo} height={40} />} id="basic-nav-dropdown">
                            <StyledSignedInMsg> Signed in as <br /> <strong>username</strong></StyledSignedInMsg>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Your Equipment</NavDropdown.Item>
                            <NavDropdown.Item>Your Ratings</NavDropdown.Item>
                            <NavDropdown.Item>Your Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
                        </StyledDropdown>
                    </StyledCol>
                    <StyledCol xs={12} md={6} lg={6}>
                        <Form inline>
                            <StyledSearchBarContainer>
                                <StyledFormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <StyledButton onClick={(e) => e.preventDefault()}><i class="fas fa-search"></i></StyledButton>
                            </StyledSearchBarContainer>
                        </Form>
                    </StyledCol>
                </StyledRow>
            </StyledContainer>
        </Navbar>
    )
}

export default NavBar
