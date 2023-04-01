import React from "react";
import { 
  BaseContainer,
  CenterWrapper,
  CoinbaseContainer,
  CloseContainer,
  ParentContainer,
  TrustContainer,
  MetamaskContainer,
  WalletContainer } from "./connect.modal.styles";
import Coinbase from  "../../assets/Coinbase.png";
import trustwallet from "../../assets/trustwallet.png";
import metamask from "../../assets/metamask.png";
import { Link } from "react-router-dom";

const ConnectModal =  ({ open, onClose }) => {
    if (!open) return null;
    return (<ParentContainer onClick={onClose}>
        <CenterWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
        >
   
    <CloseContainer onClick={onClose}>X</CloseContainer>
    <WalletContainer>Connect your Wallet
    
    </WalletContainer> 

     <CoinbaseContainer>
<img src={Coinbase} alt="Coinbase"/> Coinbase wallet
     </CoinbaseContainer>
     <TrustContainer>
     <img src={trustwallet} alt="trustwallet"/> Trust wallet
     </TrustContainer>
     <MetamaskContainer>
     <img src={metamask} alt="metamask" /> Metamask 
     </MetamaskContainer>
   
    <BaseContainer>By connecting a wallet, you agree to our  <Link to="/">Terms and Conditions </Link> 
    and consent to its <Link to= "/">Privacy Policy </Link></BaseContainer>
    </CenterWrapper>
 </ParentContainer>
    

    
    )
    }

    export default ConnectModal;
    
    