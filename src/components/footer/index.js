import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledFooter,
  StyledFooterLogo,
  StyledRights,
  StyledSocialLinks,
} from "./styles";
import footer from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <StyledFooter>
        <StyledFooterLogo>
          <NavLink to="/">
            <img src={footer} alt="Logo" height="35"></img>
            <span>Cutback</span>
          </NavLink>
        </StyledFooterLogo>
        <StyledRights>
          All rights reserved. Copyright{" "}
          <i className="far fa-copyright px-1"></i> 2022
        </StyledRights>
        <StyledSocialLinks>
          <li>
            <a
              href="mailto:milosz.workspace@gmail.com"
              aria-label="Go to email page"
            >
              <i className="far fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/milosz-misiek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Milosz Misiek LinkedIn page"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/miloszmisiek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Milosz Misiek GitHub page"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </StyledSocialLinks>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
