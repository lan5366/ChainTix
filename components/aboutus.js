import React, { useState } from 'react';
import styled from 'styled-components';

const teamMembers = [
  { id: 1, name: "Jackson Lamont", image: "/reps/Jackson_Lamont.jpg", bio: "Jackson is jackson" },
  { id: 2, name: "Adrian Wertheim", image: "/reps/Adrian_Wertheim.jpg", bio: "Adrian is a sales strategist with a passion for developing winning teams." },
  { id: 3, name: "Manuel Aguilar", image: "/reps/Manuel_Aguilar.jpg", bio: "Manuel brings a wealth of experience in direct sales and client relations." },
  { id: 4, name: "Ripken Robbins", image: "/reps/Ripken_Robbins.jpg", bio: "Ripken is known for his ability to drive sales through innovative strategies." }
];

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <Section>
      <Container>
        <Title>Meet Our Team</Title>
        <TeamGrid isSelected={selectedMember !== null}>
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              member={member}
              isSelected={selectedMember?.id === member.id}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </TeamGrid>

        {selectedMember && (
          <FocusContainer>
            <FocusImage src={selectedMember.image} alt={selectedMember.name} />
            <FocusText>
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.bio}</p>
              <CloseButton onClick={() => setSelectedMember(null)}>Close</CloseButton>
            </FocusText>
          </FocusContainer>
        )}
      </Container>
    </Section>
  );
};

// ✅ Team Member Component
const TeamMember = ({ member, isSelected, onClick }) => {
  return (
    <MemberCard isSelected={isSelected} onClick={onClick}>
      <MemberImage src={member.image} alt={member.name} />
      <MemberName>{member.name}</MemberName>
    </MemberCard>
  );
};

// ✅ Styled Components
const Section = styled.section`
  background-color: #f5f7ed;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  max-width: 900px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #344c38;
  margin-bottom: 40px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ isSelected }) => (isSelected ? "1fr 1fr" : "repeat(2, 1fr)")}; /* ✅ Dynamic grid */
  gap: 20px;
  transition: all 0.3s ease;
`;

const MemberCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transform: ${({ isSelected }) => (isSelected ? "scale(1.1)" : "scale(1)")};
  transition: transform 0.3s ease;
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  color: #1E2D3A;
`;

const FocusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
`;

const FocusImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
`;

const FocusText = styled.div`
  max-width: 400px;
  text-align: left;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: #344c38;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1E2D3A;
  }
`;

export default AboutUs;
