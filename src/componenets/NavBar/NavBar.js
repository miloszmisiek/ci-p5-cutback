import React from 'react'
import { Col, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import { StyledButton, StyledContainer, StyledDropdown, StyledFormControl, StyledLogo, StyledNavCol, StyledRow, StyledSearchBarContainer } from './NavBar.styled';



const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" fixed='top'>
            <StyledContainer>
                <StyledRow>
                    <Col xs={{ span: 12 }} sm={6} md={4}>
                        <StyledLogo><img src={logo} alt='Logo' height="45"></img>Cutback</StyledLogo>
                    </Col>
                    <StyledNavCol sm={6} md={{ span: 4, order: 'last' }}>
                        <Nav.Link>Sign in</Nav.Link>
                        <Nav.Link>Sign up</Nav.Link>
                        <StyledDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item>Equipment</NavDropdown.Item>
                            <NavDropdown.Item>Ratings</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </StyledDropdown>
                    </StyledNavCol>
                    <Col xs={12} md={4}>
                        <Form inline>
                            <StyledSearchBarContainer>
                                <StyledFormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <StyledButton variant="outline-success"><i class="fas fa-search"></i></StyledButton>
                            </StyledSearchBarContainer>
                        </Form>
                    </Col>
                </StyledRow>
            </StyledContainer>
        </Navbar>
    )
}

export default NavBar
