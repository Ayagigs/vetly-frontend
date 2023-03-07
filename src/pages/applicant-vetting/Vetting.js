import {
  ApplicantVettingParent,
  CenterWrapper,
  VettingHeadersContainer,
} from "./applicant.vetting.styles";

const Vetting = () => {
  return (
    <ApplicantVettingParent>
      <CenterWrapper>
        <VettingHeadersContainer>
          <h1>Successful Vetting</h1>
          <h1>Pending Requests</h1>
          <h1>Denied Requests</h1>
        </VettingHeadersContainer>
      </CenterWrapper>
    </ApplicantVettingParent>
  );
};

export default Vetting;
