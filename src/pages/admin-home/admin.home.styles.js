import styled from "styled-components";

export const AdminHomeParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 2rem auto;

  & h1{
  font-size: 2.5rem;
  font-weight: 500;

}

`;

export const SummaryContainer = styled.section`
  width: 100%;
  height: 22%;
  display: flex;
  gap: 1.5rem;
  justify-content: space-around;
  align-items: center;
  padding-top:1.5rem;
`;

export const SummaryCard = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.2rem 2.2rem;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

  & img {
    margin-bottom: 1.1rem
  }
  & h2 {
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #000000;
  }

  & h1 {
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 2.3rem;
    color: #000000;
  }
  
`;
export const ActivitiesContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;

export const RecentActivities = styled.div`
  height: 100%;
  width:60%;
  display:flex;
  background: #FFFFFFF;
  border: 1px solid #5D5E5F;
  border-radius: 12px;
  margin-top:5rem;
  padding-left:3rem;
  padding-top:2rem;
  
`;

export const Ractivities = styled.div`
  height: 100%;
  width:40%;
  display:flex;
  background: #FFFFFFF;
  border: 1px solid #5D5E5F;
  border-radius: 12px;
  margin-top:5rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

`;

export const ListContainer = styled.div`
height: 100%;
width:100%;
display:flex;
background: #FFFFFFF;
margin-top:2rem;
padding-left:3rem;
font-size: 1.5rem;

& ListIcon {
  color: #D9D9D9
}

& p {
  font-size: 1.3rem;
  font-weight:300;
  font-family:
}

`;

