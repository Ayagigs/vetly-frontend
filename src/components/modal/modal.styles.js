import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 40rem;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  z-index: 15;
  margin: 3rem 0;

  & .icon {
    position: absolute;
    font-size: 24px;
    font-weight: 100;
    top: 2rem;
    right: 2.5rem;
    cursor: pointer;
  }

`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #000000;
  text-align: center;
  margin-top: 10rem;

  & h1 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 35%;
  height: 18%;
  margin: 3rem auto 0rem auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
