import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
//import Home from '@/components/Dashboard/Home'; //got rid of
import Image from 'next/image';

const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      
      <Logo href="/">
      <Image src="/ImperiumLogo2.png" alt='home icon' width={200} height={200}/>
      </Logo>
      <h1>Aptive Imperium</h1>
      <NavLinks>
        <ButtonLink href="/about">About Us</ButtonLink>
        <ButtonLink href="/apply">Apply</ButtonLink>
        <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
        <ButtonLink href="/auth/login">Login</ButtonLink>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  padding: 15px 20px;
  align-items: center;
  background-color: #b5c5b2;
  justify-content: space-between;
  color: white;
  width: 100%;
`;

const Logo = styled(Link)`
  
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  visibility: visible;
  margin-left: auto;
  
`;

const ButtonLink = styled(Link)`
  padding: 10px 20px;
  background-color: white;
  color: #1E2D3A;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #309c42;
  }
`;

export default Navbar;
