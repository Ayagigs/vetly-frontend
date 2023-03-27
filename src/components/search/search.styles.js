import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SearchParent = styled.div`
  margin-left: 5%;
  width: 100%;
  height: 15%;
  color: #000;
  display: flex;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`

    & input {
        width: 50%;
        height: 100%;
        border: 1px solid #cde2fe;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1.8rem;
        font-family: "Inter";
        font-weight: 300;
    } 
`;