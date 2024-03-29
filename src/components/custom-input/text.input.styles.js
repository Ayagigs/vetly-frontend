import styled from "styled-components";

export const FormLabel = styled.label`
  color: #0d0d0d;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-top: 2rem;
`;

export const FormControl = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "75%")};
  border: 1px solid #0d0d0d;
  border-radius: 5px;
  height: 3.8rem;
  padding: 0 1rem;
  background: #fff;
  margin-top: 1rem;

  & .form-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #fff;
    color: #726e6e;
    font-size: 1.5rem;
  }

  & .form-input::placeholder {
    color: #5d5e5f;
    line-height: 28px;
    font-size: 1.3rem;
  }

  & #date {
    width: 100%;
    outline: 0;
    padding: 0 8px;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    transition: 300ms border-color ease;
  }

  & #date:focus {
    border-color: #000;
  }
`;
