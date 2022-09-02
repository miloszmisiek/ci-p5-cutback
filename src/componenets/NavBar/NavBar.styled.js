import { Col, Container, FormControl, Nav, NavDropdown, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const StyledFormControl = styled(FormControl)`
    display: inline-block;
    width: 100%;
    background-color: transparent;
    border: none;
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
`

export const StyledLogo = styled.span`
    font-family: 'Permanent Marker';
    font-size: 2rem;
    margin: auto;
    width: 100%;
    @media (max-width: 351px) {
        font-size: 1.5rem !important;
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
    ${props => props.nav ?
        `display: flex;
        justify-content: ${props.loggedOut ? 'space-around' : 'flex-end' } ;
        align-items: center;
        padding: 1vh 0;
        @media (max-width: 440px) {
            width: 40%;
            font-size: 0.8rem !important;
        }
        @media (min-width: 768px) and (max-width: 991px) {
            width: ${props.loggedOut ? `${100/12*4}%` :`${100/12*2}%`};
        }
        ` : props.logo ? 
        `@media (max-width: 440px) {
            width: 60%;
        }`
        :
        `@media (min-width: 768px) and (max-width: 991px) {
            width: ${props.loggedOut ? `${100/12*4}%` :`${100/12*6}%`};
        }`
    }

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
    };
    &.show:before {
        position: absolute;
        display: inline-block;
        content: "";
        top: 42px;
        right: 32px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(0,0,0,0.175);
    }
    &.show:after {
        position: absolute;
        display: inline-block;
        content: "";
        top: 43px;
        right: 31px;
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
    border: 1px solid #b4d3b2;
    border-radius: 20px;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 767px) {
        max-width: 80%;
        margin-top: 15px;
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
`;