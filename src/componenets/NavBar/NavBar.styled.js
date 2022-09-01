import { Col, Container, FormControl, Nav, NavDropdown, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledFormControl = styled(FormControl)`
    display: inline-block;
    max-width: 70%;
    background-color: transparent;
    border: none;
`;
export const StyledRow = styled(Row)`
    align-items: center;
    width: 100%;
`;

export const StyledContainer = styled(Container)`
    width: 100%;
    justify-content: space-around !important;
`

export const StyledLogo = styled.span`
    font-family: 'Permanent Marker';
    font-size: 2rem;
    margin: auto;
    width: 100%;
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

export const StyledNavCol = styled(Col)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1vh 0;
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
    @media (max-width: 768px) {
        max-width: 80%;
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
`