import styled from "styled-components";

export const NavigateButton = styled.button`
  margin-top: 2.1rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  border-radius: 4px;
  padding: 12px 32px;
  width: ${(props) => (props.width ? props.width : "25.7rem")};
  height: 4.8rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 24px;
  border: 1px solid #0570fb;
  display: block;
  outline: none;
`;

//#0570fb;

//25.7rem
