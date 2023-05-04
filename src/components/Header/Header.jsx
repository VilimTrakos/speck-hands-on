import { Header as HeaderWrapper, HeaderInner, Hamburger, Logo, HeaderLink, HeaderButton, HeaderNav, HamburgerDiv, HamburgerLink } from "./HeaderStyle"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import React from "react";
import { useState } from "react";

const Header = () => {

    const navigate = useNavigate();

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        
    <HeaderWrapper>
    
        <HeaderInner>
            <Link to={"/"}>
                <Logo />
            </Link>
            <Hamburger onClick={showSidebar} />
            {sidebar &&
                <HamburgerDiv onClick={showSidebar}>

                    <HamburgerLink to={"/"}>
                        Home
                    </HamburgerLink>

                    <HamburgerLink to={"/Courses"}>
                        Courses
                    </HamburgerLink>

                    <HamburgerLink to={"/sign-in"}>
                        Sign in
                    </HamburgerLink>

                    <HamburgerLink to={"/register"}>
                        Register
                    </HamburgerLink>


                </HamburgerDiv>
            }

            <HeaderNav>
                <HeaderLink to={"/"}>Home</HeaderLink>
                <HeaderLink to={"/Courses"}>Courses</HeaderLink>
                <HeaderButton onClick={() => navigate("/sign-in")} isOutline> Sign in</HeaderButton>
                <HeaderButton onClick={() => navigate("/register")}> Register</HeaderButton>
            </HeaderNav>
        </HeaderInner>
    </HeaderWrapper>
    )

}

export default Header;