import styled from "styled-components";

export const Wrapper = styled.div`
  height: 30%;
  width: 50%;
  margin-top: 2rem;
  margin-inline: auto;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & label {
    margin-top: 0.3rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 28px;
  }
`;
