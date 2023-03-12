import styled from "styled-components";

export const FormLabel = styled.label`
  color: #0d0d0d;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-top: 2rem;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: ${(props) => (props.width ? props.width : "75%")};
  border: 1px solid #5d5e5f;
  border-radius: 5px;
  height: 20.6rem;
  padding: 0 1rem;
  background: #fff;
  margin-top: 0.7rem;

  //   & .form-input {
  //     border: 0;
  //     outline: none;
  //     flex: 1;
  //     background: #fff;
  //     color: #726e6e;
  //     font-size: 1.5rem;
  //   }
`;
