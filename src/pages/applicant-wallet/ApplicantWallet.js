import React, { useState } from 'react'
import {
  ActivitiesContainer,
  ApplicantWalletParent,
  CenterWrapper,
  CircleContainer,
  ConnectButton,
  ConnectContainer,
  EContainer,
  EthContainer,
  LContainer,
  ListContainer,
  LowerContainer,
  Ractivities,
  TotalWithdrawalContainer,
  UpperContainer,
  WalletBalanceContainer,
  WalletContainer,
  WithdrawContainer,
  UContainer
} from './applicant.wallet.styles';
import {
  List,
  ListItem,
} from '@chakra-ui/react';
import ethereum from "../../assets/ethereum.png";
import licon from "../../assets/licon.png";
import licon2 from "../../assets/licon2.png";
import licon3 from "../../assets/licon3.png";
import licon4 from "../../assets/licon4.png";
import ConnectModal from "../../components/connect-modal/ConnectModal";




const ApplicantWallet = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <ApplicantWalletParent>
      <CenterWrapper>
        <WalletContainer>

          <WalletBalanceContainer>
            <UpperContainer>
              Wallet Balance

            </UpperContainer>
            <LowerContainer>

              <EthContainer>
                <img src={ethereum} alt='ethereum' />
                Eth
                0.0083
              </EthContainer>
            </LowerContainer>
          </WalletBalanceContainer>

          <TotalWithdrawalContainer>
            <UContainer>
              Total Withdrawal
              0.0083
              <EContainer>
                <img src={ethereum} alt='ethereum' />Eth
              </EContainer>

            </UContainer>
            <LContainer>
              <WithdrawContainer>

                Withdraw
              </WithdrawContainer>
            </LContainer>
          </TotalWithdrawalContainer>




        </WalletContainer>
        <ActivitiesContainer>
          <ConnectContainer>
            <ConnectButton onClick={() => setOpenModal(true)} >Connect Wallet
              <ConnectModal
                open={openModal}
                onClose={() => setOpenModal(false)} />
            </ConnectButton>
          </ConnectContainer>
          <Ractivities>
            <ListContainer>
              <CircleContainer>
                <img src={licon} alt="licon" />
                <img src={licon2} alt="licon" />
                <img src={licon3} alt="licon" />
                <img src={licon4} alt="licon" />
                <img src={licon4} alt="licon" />
              </CircleContainer>
              <List spacing={5}>
                <h1> Recent Activities</h1>
                <ListItem>
                  You earn 0.00003eth from completed vet by
                  pheobeayo@vetly.com
                </ListItem>

                <ListItem>
                  You earn 0.00003eth from completed vet by
                  pheobeayo@vetly.com
                </ListItem>
                <ListItem>
                  You earn 0.00003eth from completed vet by
                  pheobeayo@vetly.com
                </ListItem>
                <ListItem>
                  You earn 0.00003eth from completed vet by
                  pheobeayo@vetly.com
                </ListItem>
                <ListItem>
                  You earn 0.00003eth from completed vet by
                  pheobeayo@vetly.com
                </ListItem>

              </List>


            </ListContainer>
          </Ractivities>
        </ActivitiesContainer>
      </CenterWrapper>






    </ApplicantWalletParent>
  )
}

export default ApplicantWallet;