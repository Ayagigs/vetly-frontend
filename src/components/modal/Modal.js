import React from "react";
import FormButton from "../custom-button/FormButton";
import {
  ButtonsContainer,
  HeadingContainer,
  ModalContainer,
} from "./modal.styles";
import { useDispatch, useSelector } from "react-redux";
import { getEmployersModalStatus, updateModalStatus } from "../../slices/modal";

const Modal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const employersEmailModalStatus = useSelector(getEmployersModalStatus);
  console.log(employersEmailModalStatus);

  const changeToNextModal = () => {
    dispatch(
      updateModalStatus({
        ...employersEmailModalStatus,
        isModalOpened: true,
      })
    );
    closeModal();
  };
  return (
    <ModalContainer>
      <i className="fa fa-close icon" onClick={closeModal}></i>
      <HeadingContainer>
        <h1>
          Confirm that your entries in <br /> the resume are correct
        </h1>
      </HeadingContainer>

      <ButtonsContainer>
        <FormButton
          text="Done"
          backgroundColor="#0570fb"
          width={"100%"}
          handleClick={changeToNextModal}
        />
      </ButtonsContainer>
    </ModalContainer>
  );
};

export default Modal;
