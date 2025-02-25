import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Section>
      <Overlay>
        <Container>
          <HeroTextColumn>
            <Header>
              Welcome to one of the fastest growing teams... at one of the fastest growing sales company's in the world.
              <Highlight></Highlight>
            </Header>
            <SubHeader>High standards, high expectations, high results</SubHeader>
            <SubheaderAndStarsColumn>
              <CTAButton>Apply Now</CTAButton>
            </SubheaderAndStarsColumn>
          </HeroTextColumn>
        </Container>
      </Overlay>
    </Section>
  );
};

const Section = styled.section`
background-color: #78856e;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
`;

const Overlay = styled.div`
`;

const Container = styled.div`
`;

const HeroTextColumn = styled.div`
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #f5f7ed;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  align-items: center;
  color: #f5f7ed;
  margin-top: 20px;
  
`;

const SubheaderAndStarsColumn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #309c42;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  font-size: 2rem;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #309c42;
    color: white;
  }
`;

export default Hero;
