import styled from "styled-components";

export const ApplicantWalletParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
`;

export const WalletContainer = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 1.5rem;
  
`;

export const WalletBalanceContainer = styled.section`
  display: flex;
  width: 48%;
  height: 11.3rem;
  border-left: 15px solid #0570FB;
  border-top: 1px solid #f1eeed;
  border-right: 1px solid #f1eeed;
  border-bottom: 1px solid #f1eeed;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  line-height: 3.0rem;
  font-size: 1.5rem;
  font-weight: 700;
`;
export const UpperContainer = styled.section`
  display: flex;
  width: 400%;
  height: 4.3rem;
  background:#f1eeed;
  display: flex;
  line-height: 3.3rem;
  
  
`;

export const LowerContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.3rem;
  background:#ffffff;
  margin-top: 5rem;
 
`;





export const EthContainer = styled.section`
  display: flex;
  width: 50%;
  height: 6.3rem;
  line-height: 2.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1.3rem;
  padding: 5px auto;

  & img{
    display: flex;
    height: 2rem;
    width: 2rem;
    margin-right: 1.5rem;
  }
`;

export const TotalWithdrawalContainer = styled.section`
display: flex;
justify-content: space-between;
width: 48%;
height: 15.3rem;
padding: 2rem 2rem;
background: #ffffff;
border-top: 1px solid #f1eeed;
border-left: 1px solid #f1eeed;
border-bottom: 1px solid #f1eeed;
border-right: 1px solid #f1eeed;
border-radius: 5px;
color: #000000;
font-weight: 600;
font-size: 1.5rem;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

export const UContainer = styled.section`
  display: inline-block;
  width: 150%;
  height:70%;
  background:#ffffff;
  
`;

export const EContainer = styled.section`
  display: flex;
  width: 200%;
  height: 100%;
  background:#ffffff;
  margin-left: 10rem;
  padding-left: 20px;

  & img{
    display: flex;
    height: 2rem;
    width: 2rem;
    margin-right: 1.5rem;
  }
  
  
`;

export const LContainer = styled.section`
  display: flex;
  width: 100%;
  height:5rem;
  background:#ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WithdrawContainer = styled.section`
  width: 60%;
  margin-top: 15rem;
  margin-right:15rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  color: #0570FB;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2.6rem;
  border: 2.5px solid #0570FB;
  padding: 0 3rem;
`;

export const ActivitiesContainer = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  `;

export const ConnectContainer = styled.section`
  background: #ffffff;
  width: 48%;
  height: 86%;
  display: flex;
  border-radius: 12px;
  border: 1px solid red;
  border: 1px solid rgba(1, 22, 50, 0.1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

export const ConnectButton = styled.section`
  width: 45%;
  margin-top: 30rem;
  margin-left:14rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0570FB;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2.6rem;
  border: 2.5px solid #0570FB;
  padding: 0 3rem;
`;

export const Ractivities = styled.div`
  height: 80%;
  width: 48%;
  display: flex;
  background: #FFFFFFF;
  border: 1px solid #5D5E5F;
  border-radius: 12px;
  margin-top:3rem;
  border: 1px solid red;
  border: 1px solid rgba(1, 22, 50, 0.1);
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

& h1 {
  font-size: 1.8rem;
  font-weight:500;
  line-height:2.5rem;
}

`;

export const CircleContainer = styled.div`
display: flex;
width: 20%;
height:80%;
align-items: center;
flex-wrap: wrap;
margin-top: 2.5rem;

& img {
  height: 4.8rem
}


`;
