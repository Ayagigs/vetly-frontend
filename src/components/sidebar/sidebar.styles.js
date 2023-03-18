import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarParent = styled.aside`
  width: 18%;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #cde2fe;
  display: flex;
  flex-direction: column;
`;

export const SidebarLogoContainer = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cde2fe;
  color: #011632;

  & h1 {
    font-weight: 600;
    font-size: 3.2rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border: 1px soild yellow;

  display: flex;
  width: 100%;
  align-items: center;
  color: #000;
  border: 1px solid #f5f5f5;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background: #fff;

  & img {
    margin-right: 0.8rem;
  }

  & h3 {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  &.active {
    background: #0570fb;
    color: #fff;
  }

  &.active img {
    background: #0570fb;
    color: #fff;
  }
`;

export const SidebarLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 90%;
  margin-top: 5rem;
`;

export const SidebarLink = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: #000;
  border: 1px solid black;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;

  & img {
    margin-right: 0.8rem;
  }

  & h3 {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

export const LogoutArea = styled.div`
  flex: 10%;
  display: flex;
  // justify-content: center;
  align-item: center;
  cursor: pointer;

  & h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #b21015;
    padding: 2rem;
    width: 60%;
    text-align: center;
  }
`;
