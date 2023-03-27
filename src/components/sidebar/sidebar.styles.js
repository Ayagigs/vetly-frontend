import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from '../../utils/device';

export const SidebarParent = styled.aside`
  width: 10%;
  height: 100%;
  background: #fff;
  border-right: 1px solid #cde2fe;
  border-bottom: 1px solid #cde2fe;
  display: flex;
  flex-direction: column;
  }

  @media ${device.laptop} {
    width: 10rem;
    height: 100%;
    background: #fff;
    border-right: 1px solid #cde2fe;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    
    &:hover {
      width: 20%;
      display: flex;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      opacity: 1;

      & h1 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }

      & h3 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const SidebarLogoContainer = styled.div`
  align-items: center;
  color: #011632;
  padding: 1rem;

  & h1 {
    opacity: 0;
  }

  & img {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${device.laptop} {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    color: #011632;
    padding: 3rem 2rem;

    & h1 {
      font-family: "Urbane";
      font-style: normal;
      font-weight: 600;
      font-size: 3.75rem;
      opacity: 0;
    }

    & img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 1rem;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: #000;
  align-items: center;
  padding: 1rem;

  & h3 {
    opacity: 0;
  }

  @media ${device.laptop} {
    text-decoration: none;
    display: flex;
    width: 100%;
    align-items: center;
    color: #000;
    padding: 3rem 2rem;

    & span {
      margin-left: 2rem;
      margin-right: 1rem;  
    }

    & h3 {
      font-family: "Inter";
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.8rem;
      opacity: 0;
    }

    &.active {
      background: #0570fb;
      color: #fff;
    }

    &.active span {
      background: #0570fb;
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 90%;
  margin-top: 3rem;
`;

export const LogoutArea = styled.div`
    flex: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;
    color: #b21015;

    & h3 {
      opacity: 0;
    }

  @media ${device.laptop} {
    margin-bottom: 2rem;
    padding: 3rem 2rem;

    & span {
      margin-left: 2rem;
      margin-right: 1rem;
    }

    & h3 {
      font-family: "Inter";
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.8rem;
      opacity: 0;
    }
  }
`;
