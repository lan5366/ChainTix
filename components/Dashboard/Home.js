import React from 'react';
import Link  from 'next/link';
import Image from "next/image";
import styled from 'styled-components';

{/*
  home component really button for logo
  */}
const Home = () => {
  return (
    <Square href="/dashboard">
      <Image src="/ImperiumLogo2.png" alt='home icon' width={120} height={120}/>
    </Square>
  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; // Adjust the size as needed
  height: 50px; // Adjust the size as needed
  background-color: #009999; // Adjust the background color as needed
  color: white;
  border-radius: 4px; // Adjust for square or rounded corners
  text-decoration: none;
  
  svg {
    width: 24px; // Adjust icon size as needed
    height: 24px; // Adjust icon size as needed
  }

  &:hover {
    background-color: #0056b3; // Adjust hover effect as needed
  }
`;

export default Home;
