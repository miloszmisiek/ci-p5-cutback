import React from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown, Row } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../assets/logo.png';

const StyledFormControl = styled(FormControl)`
    font-family: "Montserrat", 'Font Awesome\ 5 Free', sans-serif;
    font-style: normal;
    font-weight: 600;
    display: inline-block;
    max-width: 70%;
`;
const StyledRow = styled(Row)`
    align-items: center;
    width: 100%;
`;

const StyledContainer = styled(Container)`
    width: 100%;
    justify-content: space-around !important;
`

const StyledLogo = styled.span`
    font-family: 'Permanent Marker';
    font-size: 2rem;
    margin: auto;
    width: 100%;
`;

const StyledButton = styled(Button)`
    max-width: 30%;
`;

const StyledNavCol = styled(Col)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1vh 0;
`;

const StyledNav = styled(Nav)`
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

const StyledDropdown = styled(NavDropdown)`
    .dropdown-menu {
        top: 50px;
        right: 0px;
    }
`;

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
                            <StyledFormControl type="text" placeholder="&#xF002; Search" className="mr-sm-2" />
                            <StyledButton variant="outline-success">Search</StyledButton>
                        </Form>
                    </Col>
                </StyledRow>
            </StyledContainer>
        </Navbar>
    )
}

export default NavBar
