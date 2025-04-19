import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/LandingPage/Footer';

const MoreInfo = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ContentWrapper>
          <Header>Getting Started with ChainTix</Header>

          <StepsGrid>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepTitle>Create a Wallet</StepTitle>
              <StepText>
                Download a Web3 wallet like MetaMask or Coinbase Wallet from your app store or browser extension marketplace. Follow their setup steps to create a secure wallet.
              </StepText>
            </StepCard>

            <StepCard>
              <StepNumber>2</StepNumber>
              <StepTitle>Fund Your Wallet</StepTitle>
              <StepText>
                Use a crypto exchange (like Coinbase or Binance) to buy Ethereum or another supported token, then send the funds to your wallet address.
              </StepText>
            </StepCard>

            <StepCard>
              <StepNumber>3</StepNumber>
              <StepTitle>Connect Your Wallet</StepTitle>
              <StepText>
                Once you're on the ChainTix site, click the "Connect Wallet" button in the navbar. Approve the connection using your wallet pop-up.
              </StepText>
            </StepCard>

            <StepCard>
              <StepNumber>4</StepNumber>
              <StepTitle>Buy Tickets</StepTitle>
              <StepText>
                Browse upcoming events, select the one you want, and click "Buy Ticket." Confirm the transaction in your wallet to complete your purchase securely.
              </StepText>
            </StepCard>
          </StepsGrid>
        </ContentWrapper>
      </PageContainer>
      <Footer />
    </>
  );
};

export default MoreInfo;

// Styled Components

const PageContainer = styled.div`
  background-color: #68c5db;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 4rem;
  color: #fcf8ec;
  text-align: center;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  color: #fcf8ec;
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const StepText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;
