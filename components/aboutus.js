import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Title>Meet Our Team</Title>
        <TeamGrid>
          <TeamMember name="Jackson Lamont" image="/reps/Jackson_Lamont.jpg" />
          <TeamMember name="Adrian Wertheim" image="/reps/Adrian_Wertheim.jpg" />
          <TeamMember name="Manuel Aguilar" image="/reps/Manuel_Aguilar.jpg" />
          <TeamMember name="Ripken Robbins" image="/reps/Ripken_Robbins.jpg" />
        </TeamGrid>
      </Container>
    </Section>
  );
};


const TeamMember = ({ name, image }) => {
  return (
    <MemberCard>
      <MemberImage src={image} alt={name} />
      <MemberName>{name}</MemberName>
    </MemberCard>
  );
};

const Section = styled.section`
  background-color: #f5f7ed;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #344c38;
  margin-bottom: 40px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;
`;

const MemberCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  
  margin-bottom: 10px;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #1E2D3A;
`;

export default AboutUs;
