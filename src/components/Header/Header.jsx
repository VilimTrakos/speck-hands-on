import { Header as HeaderWrapper, HeaderInner, Hamburger, Logo, HeaderLink, HeaderButton, HeaderNav } from "./HeaderStyle"



import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";

const Header = () => {

    const navigate = useNavigate();

    

    return (<HeaderWrapper>
        <HeaderInner>
        <Link to={"/"}>
            <Logo/>
        </Link>
        <Hamburger/>
        <HeaderNav>
            <HeaderLink to={"/"}>Home</HeaderLink>
            <HeaderLink to={"/Courses"}>Courses</HeaderLink>
            
            <HeaderLink to={"/SignIn"}><HeaderButton> Sign in</HeaderButton></HeaderLink>
            <HeaderLink to={"/Register"}><HeaderButton> Register</HeaderButton></HeaderLink>
        </HeaderNav>
        </HeaderInner>
            </HeaderWrapper>
    )

}

export default Header;