import React from "react";
import {
    SearchParent,
    StyledNavLink,
} from "./search.styles";

const Search = ({ routes }) => {

    return (
        <SearchParent>
            <StyledNavLink>
                <input type="text" placeholder="Search for applicant" />
            </StyledNavLink>
        </SearchParent>
    );
};

export default Search;
