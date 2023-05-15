import {
  Header as HeaderWrapper,
  HeaderInner,
  Hamburger,
  Logo,
  HeaderLink,
  HeaderButton,
  HeaderNav,
  HamburgerDiv,
  HamburgerLink,
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";
import { useState } from "react";

const Header = ({ isAdmin, isLoggedIn, setIsLoggedIn, setIsAdmin }) => {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("is_admin");
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to={"/"}>
          <Logo />
        </Link>
        <Hamburger onClick={showSidebar} />
        {sidebar && (
          <HamburgerDiv onClick={showSidebar}>
            <HamburgerLink to={"/"}>Home</HamburgerLink>

            <HamburgerLink to={"/Courses"}>Courses</HamburgerLink>
            {isAdmin && <HamburgerLink to={"/profile"}>Profile</HamburgerLink>}

            {isLoggedIn ? (
              <HamburgerLink to="#" onClick={logout}>
                Logout
              </HamburgerLink>
            ) : (
              <HamburgerLink to={"/sign-in"}>Sign in</HamburgerLink>
            )}

            {!isLoggedIn && (
              <HamburgerLink to={"/register"}>Register</HamburgerLink>
            )}
          </HamburgerDiv>
        )}

        <HeaderNav>
          <HeaderLink to={"/"}>Home</HeaderLink>
          <HeaderLink to={"/Courses"}>Courses</HeaderLink>

          {isAdmin && isLoggedIn && (
            <HeaderLink to={"/profile"}>Profile</HeaderLink>
          )}
          {isLoggedIn ? (
            <HeaderButton onClick={logout} isOutline>
              {" "}
              Logout
            </HeaderButton>
          ) : (
            <HeaderButton onClick={() => navigate("/sign-in")} isOutline>
              {" "}
              Sign in
            </HeaderButton>
          )}

          {!isLoggedIn && (
            <HeaderButton onClick={() => navigate("/register")}>
              {" "}
              Register
            </HeaderButton>
          )}
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
