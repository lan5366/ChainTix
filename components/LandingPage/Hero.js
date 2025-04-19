import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const Home = () => {
  return (
    <Main>
      <Head>
        <title>ChainTix | Decentralized Ticketing</title>
        <meta name="description" content="Buy and sell verified event tickets on the blockchain with ChainTix." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection>
        <Title>🎟️ ChainTix</Title>
        <Subtitle>Decentralized ticketing — transparent, secure, and fair.</Subtitle>
        <CTAGroup>
          <Link href="/events" passHref>
          <PrimaryButton>Explore Events</PrimaryButton>
          </Link>
          <Link href="/moreinfo" passHref>
          <SecondaryButton>Learn More</SecondaryButton>
          </Link>
        </CTAGroup>
      </HeroSection>

      <FeaturesSection>
        <Feature>
          <FeatureIcon>🛡️</FeatureIcon>
          <FeatureTitle>Trustless Security</FeatureTitle>
          <FeatureText>All tickets are backed by blockchain verification.</FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>🔁</FeatureIcon>
          <FeatureTitle>Peer-to-Peer Resale</FeatureTitle>
          <FeatureText>Resell or transfer tickets easily with low fees.</FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>🎉</FeatureIcon>
          <FeatureTitle>Real Ownership</FeatureTitle>
          <FeatureText>Tickets live in your wallet — no middlemen.</FeatureText>
        </Feature>
      </FeaturesSection>

      <CTASection>
        <CTAHeadline>Ready to change how tickets work?</CTAHeadline>
        <Link href="/events" passHref>
        <PrimaryButton>Get Started</PrimaryButton>
        </Link>
      </CTASection>
    </Main>
  );
};

export default Home;

// Styled Components

const Main = styled.main`
  background-color: #68c5db;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #1e1e1e;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const PrimaryButton = styled.button`
  padding: 0.9rem 1.6rem;
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  color: #1e1e1e;
  border: 2px solid #1e1e1e;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  width: 100%;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Feature = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #444;
`;

const CTASection = styled.section`
  text-align: center;
  margin-top: 4rem;
`;

const CTAHeadline = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1e1e1e;
`;
