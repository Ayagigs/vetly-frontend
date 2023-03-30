import styled from "styled-components";


export const ParentContainer = styled.div`
width: 30%;
height: 70%;
background: #ffffff;
position: absolute;
border-left: 1px solid #f1eeed;
border-top: 1px solid #f1eeed;
border-right: 1px solid #f1eeed;
border-bottom: 1px solid #f1eeed;
border-radius: 8px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 25px 35px rgba(0, 0, 0, 0.1);
justify-content: center;
display: flex !important;
margin: 0 auto;
vertical-align: center;
horizontal-align: center;
z-index: 1;
vertical-align: super;
background-position-x: center; 
background-position-y: center;
transform: translate(50%, -50%);
`;


export const CenterWrapper = styled.div`
width: 40%;
height: 80%;
margin: 0rem auto;
color: #000000;
justify-content: center;
line-height: 2.8rem;
align-items: center;
font-weight: 700;
justify-content: center;
font-size: 1.3rem;
display: relative;
padding-right: 6rem;



& img {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}


`;


export const CloseContainer = styled.div`
display: flex
width: 150%;
align-items: flex-end; 
justify-content: flex-end;
margin-left: 22rem;
margin-top: 2rem;
font-size: 2rem;
`;

export const WalletContainer = styled.div`
width: 200%;
font-size: 2rem;
margin-right: 4rem;
margin-top: 1rem;
margin-bottom: 3rem;
justify-content: center;
`;

export const CoinbaseContainer = styled.div`
width: 180%;
height: 10%;
display: flex;
position: center;
border-left: 1px solid #0570FB;
border-top: 1px solid #0570FB;
border-right: 1px solid #0570FB;
border-bottom: 1px solid #0570FB;
border-radius: 8px;
color: #000000;
margin-top: 1rem;
margin-left: 0rem;
margin-bottom: 1.5rem;
align-items: center;
justify-content: center;



`;

export const TrustContainer = styled.div`
width: 180%;
height: 10%;
display: flex;
align-items: center;
color: #000000;
border-left: 1px solid #0570FB;
border-top: 1px solid #0570FB;
border-right: 1px solid #0570FB;
border-bottom: 1px solid #0570FB;
border-radius: 8px;
margin-bottom: 1.5rem;
align-items: center;
justify-content: center;



`;

export const MetamaskContainer = styled.div`
width: 180%;
height: 10%;
display: flex;
align-items: center;
justify-items: space-around;
border-left: 1px solid #0570FB;
border-top: 1px solid #0570FB;
border-right: 1px solid #0570FB;
border-bottom: 1px solid #0570FB;
border-radius: 8px;
margin-bottom: 1.5rem;
align-items: center;
justify-content: center;


`;

export const BaseContainer = styled.div`
width: 200%;
line-height:1.5rem;
margin-top: 3rem;
display: in-flex;
align-content: center;
font-size: 1.1rem;
font-weight:350;
padding-right:8px; 

& link {
  color: #0570FB;
}
`;

export const Dot = styled.div`
width: 25%;
height:25%;
border-radius: 50%;
display: in-flex;
align-content: center;
color: #0570FB;



`;