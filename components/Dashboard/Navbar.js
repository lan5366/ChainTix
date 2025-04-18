import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavBarContainer>
      <Link href="/" passHref>
        <Logo src="/logo.png" alt="ChainTix Logo" />
      </Link>

      <RightSection>
        <Link href="/createevent" passHref>
        <NavButton>Create Event</NavButton>
        </Link>
        <Link href="/events" passHref>
          <NavButton>Events</NavButton>
        </Link>
        <NavButton>Connect Wallet</NavButton>
      </RightSection>
    </NavBarContainer>
  );
};



// Styled Components

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background-color: #fcf8ec; 
  border-bottom: 2px solid #ddd;
`;

const Logo = styled.img`
  height: 150px;
  max-height: 200px;
  object-fit: contain;
  cursor: pointer;
`;

const RightSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavButton = styled.button`
  padding: 0.9rem 1.6rem;
  font-size: 1rem;
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export default Navbar;