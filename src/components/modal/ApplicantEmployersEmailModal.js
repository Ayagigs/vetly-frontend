import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployersModalStatus, updateModalStatus } from "../../slices/modal";
import FormButton from "../custom-button/FormButton";
import { CheckboxContainer, Wrapper } from "./employers.email.styles";
import {
  ButtonsContainer,
  HeadingContainer,
  ModalContainer,
} from "./modal.styles";

const employersEmails = ["seun@gmail.com", "jaye@yahoo.com"];

const ApplicantEmployersEmailModal = () => {
  const [employersEmail, setEmployersEmail] = useState([]);

  const dispatch = useDispatch();
  const employersEmailModalStatus = useSelector(getEmployersModalStatus);

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    if (checked) {
      setEmployersEmail([...employersEmail, value]);
    } else {
      setEmployersEmail(employersEmail.filter((el) => el !== value));
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

  // console.log(employersEmail);
  return (
    <ModalContainer>
      {" "}
      <i className="fa fa-close icon" onClick={closeModal}></i>
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
        <FormButton text="Done" backgroundColor="#0570fb" width={"100%"} />
      </ButtonsContainer>
    </ModalContainer>
  );
};

export default ApplicantEmployersEmailModal;
