import { Header } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";

import { APIConfig } from "../../config/apiConfig";

import {
  Nav,
  LogoContainer,
  OrganizationParent,
  PreviewSection,
  Wrapper,
  Details,
  Segment,
  PreviewWrapper,
  DivideWrapper,
} from "./organization.styles";
import FormButton from "../../components/custom-button/FormButton";

const Organization = () => {
  const [workExperience, setWorkExperience] = useState([]);
  const { token } = useParams();

  useEffect(() => {
    const getVettingRequestDetails = async () => {
      try {
        const { data } = await APIConfig.post("vetting/get-details", {
          token,
        });
        setWorkExperience(data.resume.work_experience);
      } catch (error) {
        console.log(error);
      }
    };
    getVettingRequestDetails();
  }, [token]);

  const approveRequest = async () => {
    const payload = {
      token,
      status: "success",
      reason: "Exceptional professional",
    };
    try {
      const { data } = await APIConfig.patch("vetting/response", payload);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const rejectRequest = async () => { };
  

  // Remove the hardcoded details and uncomment what is commented in the details section

  return (
    <OrganizationParent>
      {" "}
      <Nav>
        <LogoContainer>
          <img src={logo} alt="vetly-logo" />
          <h1>vetly</h1>
        </LogoContainer>
      </Nav>
      <Wrapper>
        {/* Work Experience Preview */}
        <PreviewSection>
          <PreviewWrapper>
            <Segment>
              <h1>Work Experience</h1>
              {workExperience.length > 0 ? (
                <>
                  {workExperience.map((exp) => (
                    <Details key={exp._id}>
                      <Header>
                        {/* <h2>{exp.occupation}</h2> */}
                        <h2>Frontend Engineer</h2>
                      </Header>
                      {/* <h2>{exp.company}</h2> */}
                      <h2>Facebook</h2>
                      <p>
                        {/* 03/23 | {exp.city}, {exp.country} */}
                        03/23 | Lagos, Nigeria
                      </p>
                      {/* <p>{exp.main_activities}</p> */}
                      <p>Mentorship</p>
                    </Details>
                  ))}
                </>
              ) : (
                <>
                  <p>No experience to display</p>
                </>
              )}
            </Segment>
          </PreviewWrapper>
        </PreviewSection>

        <DivideWrapper>
          <FormButton
            text="Vet"
            backgroundColor="#0570fb"
            handleClick={approveRequest}
          />

          <FormButton
            text="Reject"
            backgroundColor="red"
            borderColor="red"
            handleClick={rejectRequest}
          />
        </DivideWrapper>
      </Wrapper>
    </OrganizationParent>
  );
};

export default Organization;
