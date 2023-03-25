import React, { useEffect, useState } from "react";
import ApplicantEmployersEmailModal from "../../components/modal/ApplicantEmployersEmailModal";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getEmployersModalStatus } from "../../slices/modal";
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
import { APIConfig } from "../../config/apiConfig";
import { Oval } from "react-loader-spinner";
import { Box, useToast } from "@chakra-ui/react";
import { updateResume } from "../../slices/resume";

const ApplicantHome = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useState("");
  const [userPrompt, setUserPrompt] = useState("");

  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userPrompt) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="green.500" fontSize={15}>
            {userPrompt}
          </Box>
        ),
        onCloseComplete: () => {
          setUserPrompt("");
        },
      });
    }
  }, [userPrompt, toast]);

  const employersEmailModalStatus = useSelector(getEmployersModalStatus);

  const modalStatus = employersEmailModalStatus.isModalOpened;

  const initialVettingRequest = async () => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get("resume");
      if (data === "") {
        setUserPrompt("You have not created a resume. Kindly create one");
        setLoading(false);
        return;
      }
      setResumeId(data.id);
      dispatch(
        updateResume({
          ...data,
        })
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setIsModalOpened(true);
  };
  const onCloseModal = () => setIsModalOpened(false);
  return (
    <ApplicantHomeParent>
      <Oval
        height={80}
        width={80}
        color="#0570FB"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={loading}
        ariaLabel="oval-loading"
        secondaryColor="#0570FB"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
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

        <RequestVettingContainer onClick={initialVettingRequest}>
          Request Vetting
        </RequestVettingContainer>

        {isModalOpened && <Modal closeModal={onCloseModal} />}
        {modalStatus && (
          <ApplicantEmployersEmailModal
            closeModal={onCloseModal}
            resumeId={resumeId}
          />
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
