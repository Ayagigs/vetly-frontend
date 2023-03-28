import React from "react";
import { SlBell } from "react-icons/sl";
import avatar from "../../assets/business-profile.png";
import Search from "../search/Search";
import {
    NavbarParent,
    StyledNavLink,
} from "./navbar.styles";

const Navbar = ({ profileRoute }) => {

    return (
        <NavbarParent>
            <Search />
            <StyledNavLink to={profileRoute}>
                <span><SlBell size={22} /></span>
                <h3>View Profile</h3>
                <img src={avatar} alt="profile avatar" />
            </StyledNavLink>
        </NavbarParent>
    );
};

export default Navbar;
