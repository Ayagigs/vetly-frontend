import React, { useState } from "react";
import ApplicantEmployersEmailModal from "../../components/modal/ApplicantEmployersEmailModal";
import Modal from "../../components/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateModalStatus, getEmployersModalStatus } from "../../slices/modal";
import {
  ActivitiesContainer,
  ApplicantHomeParent,
  CenterWrapper,
  DarkOverlayContainer,
  ProfileView,
  RecentActivities,
  RequestVettingContainer,
  SummaryCard,
  SummaryContainer,
} from "./applicant.home.styles";

const ApplicantHome = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const employersEmailModalStatus = useSelector(getEmployersModalStatus);
  const modalStatus = employersEmailModalStatus.isModalOpened;
  console.log(modalStatus);

  const onOpenModal = () => setIsModalOpened(true);
  const onCloseModal = () => setIsModalOpened(false);
  return (
    <ApplicantHomeParent>
      <CenterWrapper>
        <SummaryContainer>
          <SummaryCard background="#f2fcf9" borderColor="#22a57e">
            <h2>Completed Requests</h2>
            <h1>25</h1>
          </SummaryCard>
          <SummaryCard background="#FFF9E5" borderColor="#BFA24C">
            <h2>Pending Requests</h2>
            <h1>13</h1>
          </SummaryCard>
          <SummaryCard background="#FEF1F1" borderColor="#B21015">
            <h2>Declined Requests</h2>
            <h1>10</h1>
          </SummaryCard>
        </SummaryContainer>

        <RequestVettingContainer onClick={onOpenModal}>
          Request Vetting
        </RequestVettingContainer>

        {isModalOpened && <Modal closeModal={onCloseModal} />}
        {modalStatus && (
          <ApplicantEmployersEmailModal closeModal={onCloseModal} />
        )}
        {isModalOpened || modalStatus ? (
          <DarkOverlayContainer onClick={onCloseModal} />
        ) : (
          <></>
        )}
        
        <ActivitiesContainer>
          <RecentActivities></RecentActivities>
          <ProfileView></ProfileView>
        </ActivitiesContainer>
      </CenterWrapper>
    </ApplicantHomeParent>
  );
};

export default ApplicantHome;
