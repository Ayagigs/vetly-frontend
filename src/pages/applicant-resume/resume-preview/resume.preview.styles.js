import styled from "styled-components";

export const Parent = styled.section`
  width: 100%;
  height: 100%;
`;

export const Container = styled.section`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin: 4rem auto;
  width: 65%;
`;


export const DivideWrapper = styled.div`
  display: flex;
  width: 65%;
  gap: 2rem;
  margin: 2rem auto;
`;

export const Wrapper = styled.div`
  margin: 4rem auto;
  width: 85%;
  height: 100%;
  //   border: 1px solid #000;
`;

export const Segment = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;

  & h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 2rem;
  }
`;

export const EductaionSection = styled.section`
  width: 100%;
  height: auto;
  border: 1px solid #000;

  & h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 1rem 0rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  & h2,
  p {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 18px;
    color: #000000;
  }

  & p {
    margin-top: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  & h2,
  p {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 18px;
    color: #000000;
    margin-bottom: 1rem;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  gap: 3rem;

  & p {
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #0570fb;
    cursor: pointer;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & img {
    width: 2rem;
    height: 1.1rem;
    display: block;
    cursor: pointer;
  }

  & .work-email {
    color: #045dd1;
    margin-bottom: 1rem;
  }
`;
