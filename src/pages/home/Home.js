import React from "react";
import {
  HomeParent,
  HomeNav,
  Wrapper,
  HomeLeft,
  HomeRight,
  LogoContainer,
  TrusteesContainer,
  TrusteesWrapper,
  MainContainer,
  ButtonWrapper
} from "./home.styles";
import logo from "../../assets/logo.png";
import FormButton from "../../components/custom-button/FormButton";
import { useNavigate } from "react-router-dom";
import landingPageImage from "../../assets/landing-page-image.png";
import ayaLogo from "../../assets/aya-logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign-in");
  }

  return (
    <HomeParent>
      <HomeNav>
        <LogoContainer>
          <img src={logo} alt="vetly-logo" />
          <h1>vetly</h1>
        </LogoContainer>
      </HomeNav>
      <Wrapper>
        <HomeLeft>
          <MainContainer>
            <h1>
              <strong>Hire with Confidence</strong> - Verify Past Work Experience with Vetly
            </h1>
            <h3>
              The Platform that Connects Hiring Managers with Candidates with verified work experiences.
            </h3>
            <ButtonWrapper>
              <FormButton text="Get Started" backgroundColor="#0570FB" color="#fff" borderColor="#fff" handleClick={handleGetStarted} width="20rem" />
            </ButtonWrapper>
          </MainContainer>
          <TrusteesContainer>
            Trusted by;
            <TrusteesWrapper>
              <img src={ayaLogo} alt="aya-logo" />
              <img src={ayaLogo} alt="aya-logo" />
              <img src={ayaLogo} alt="aya-logo" />
              <img src={ayaLogo} alt="aya-logo" />
            </TrusteesWrapper>
          </TrusteesContainer>
        </HomeLeft>
        <HomeRight>
          <img src={landingPageImage} alt="business-dashboard" />
        </HomeRight>
      </Wrapper>
    </HomeParent>
  )
};
export default Home;
