import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarParent = styled.div`
  width: 100%;
  height: 15%;
  color: #000;
  border-bottom: 1px solid #cde2fe;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #03387E;
    padding: 3rem 2rem;
    width: 30%;
    height: 20%;

    & span {
        margin: 1rem; 
    }

    & h3 {
        font-family: "Inter";
        font-weight: 300;
        font-size: 1.8rem;
        line-height: 2.8rem;
        margin: 1rem;
    }

    & img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: 1rem;
    }
`;