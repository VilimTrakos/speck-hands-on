import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "../../utils/styles/generalStyles";

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
`;

export const HeaderInner = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0;
    max-width: 930px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`;

export const Hamburger = styled(HamburgerIcon)`
  display: block;
  width: 32px;
  height: 32px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const Logo = styled(LogoIcon)`
  path {
    fill: ${colors.primary};
  }
`;

export const HeaderLink = styled(Link)`
  @media (${breakpoints.desktop}) {
    margin-right: 32px;
    transition: color 03s ease-out;

    &:hover {
      color: ${colors.primary};
    }
  }
`;
export const HeaderButton = styled(Button)`
  display: inline-block;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;
export const HeaderNav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;
export const HamburgerDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  z-index: 9999;
  background-color: ${colors.bgSecondary};
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;
export const HamburgerLink = styled(Link)`
  text-align: center;
  display: block;
  justify-content: center;
  line-height: 3;
  color: ${colors.textPrimary};

  &:hover {
    color: ${colors.textSecondary};
    background-color: ${colors.primaryDark};
  }
  background-color: ${colors.primary};
  font-size: 32px;
  width: 100%;
`;
