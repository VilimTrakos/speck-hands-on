import { Header as HeaderWrapper, HeaderInner, Hamburger, Logo, HeaderLink, HeaderButton, HeaderNav } from "./HeaderStyle"



import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";

const Header = () => {

    const navigate = useNavigate();



    return (<HeaderWrapper>
        <HeaderInner>
            <Link to={"/"}>
                <Logo />
            </Link>
            <Hamburger />
            <HeaderNav>
                <HeaderLink to={"/"}>Home</HeaderLink>
                <HeaderLink to={"/Courses"}>Courses</HeaderLink>

                <HeaderButton onClick={() => navigate("/SignIn")}> Sign in</HeaderButton>
                <HeaderButton onClick={() => navigate("/Register")}> Register</HeaderButton>
            </HeaderNav>
        </HeaderInner>
    </HeaderWrapper>
    )

}

export default Header;