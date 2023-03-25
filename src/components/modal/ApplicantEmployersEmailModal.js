import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployersModalStatus, updateModalStatus } from "../../slices/modal";
import FormButton from "../custom-button/FormButton";
import {
  CheckboxContainer,
  LoaderContainer,
  Wrapper,
} from "./employers.email.styles";
import {
  ButtonsContainer,
  HeadingContainer,
  ModalContainer,
} from "./modal.styles";
import { APIConfig } from "../../config/apiConfig";
import { Oval } from "react-loader-spinner";
import { Box, useToast } from "@chakra-ui/react";

const ApplicantEmployersEmailModal = ({ resumeId }) => {
  const [employersEmails, setEmployersEmails] = useState([]);
  const [selectedEmployersEmail, setSelectedEmployersEmail] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const dispatch = useDispatch();
  const employersEmailModalStatus = useSelector(getEmployersModalStatus);

  useEffect(() => {
    if (error) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="red.500" fontSize={15}>
            {error}
          </Box>
        ),
        onCloseComplete: () => {
          setError("");
        },
      });
    }
  }, [error, toast]);

  useEffect(() => {
    const getEmployersEmail = async () => {
      setLoading(true);
      try {
        const { data } = await APIConfig.get(`vetting/resume/${resumeId}`);
        setLoading(false);
        setEmployersEmails(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getEmployersEmail();
  }, [resumeId]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedEmployersEmail([...selectedEmployersEmail, value]);
    } else {
      setSelectedEmployersEmail(
        selectedEmployersEmail.filter((el) => el !== value)
      );
    }
  };

  const closeModal = () => {
    dispatch(
      updateModalStatus({
        ...employersEmailModalStatus,
        isModalOpened: false,
      })
    );
  };

  const sendVettingEmails = () => {
    if (selectedEmployersEmail.length === 0) {
      setError("Please select at least one email");
      return;
    }

    const payload = {
      emails: selectedEmployersEmail,
    };
    console.log(payload);
  };

  return (
    <ModalContainer>
      <i className="fa fa-close icon" onClick={closeModal}></i>

      {!loading ? (
        <>
          {" "}
          <HeadingContainer>
            <h1>Confirm employers' email</h1>
          </HeadingContainer>
          <Wrapper>
            {employersEmails.map((el) => (
              <CheckboxContainer key={el}>
                <input type="checkbox" value={el} onChange={handleChange} />
                <label>{el}</label>
              </CheckboxContainer>
            ))}
          </Wrapper>
          <ButtonsContainer>
            <FormButton
              text="Done"
              backgroundColor="#0570fb"
              width={"100%"}
              handleClick={sendVettingEmails}
            />
          </ButtonsContainer>
        </>
      ) : (
        <>
          {" "}
          <LoaderContainer>
            <Oval
              height={80}
              width={80}
              color="#0570FB"
              wrapperStyle={{}}
              wrapperClass="spinner"
              visible={loading}
              ariaLabel="oval-loading"
              secondaryColor="#0570FB"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </LoaderContainer>
        </>
      )}
    </ModalContainer>
  );
};

export default ApplicantEmployersEmailModal;
