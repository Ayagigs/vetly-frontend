import styled from "styled-components";
import { device } from "../../utils/device";

export const OrganizationParent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.div`
  width: 100%;
  height: 10%;
  background: #fff;
`;

export const LogoContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #011632;
  padding: 1rem;

  & h1 {
    font-family: "Urbane";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
  }

  & img {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${device.laptop} {
    margin-top: 1rem;
    margin-left: 9rem;
    width: 20%;
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
    }

    & img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 1rem;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
`;

export const PreviewSection = styled.div`
  width: 40%;
  margin: 3% auto;
  height: auto;
  padding: 0px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
`;

export const PreviewWrapper = styled.div`
  margin: 4rem auto;
  width: 85%;
  height: 100%;
`;

export const Segment = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;

  & h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 2rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 1rem 0rem;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  & h2,
  p {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 18px;
    color: #000000;
  }

  & p {
    margin-top: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2,
  p {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 18px;
    color: #000000;
    margin-bottom: 1rem;
  }
`;

export const DivideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin-inline: auto;
  gap: 1rem;
  margin: 2rem auto;
`;
