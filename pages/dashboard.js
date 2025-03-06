import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Dashboard/Navbar';
import { useStateContext } from '@/context/StateContext';
import { getAllUserPhotos } from '@/backend/Database';
import Footer from '@/components/LandingPage/Footer';

const Dashboard = () => {
  const { user } = useStateContext();

  useEffect(() => {
    if (user) {
      (async () => {
        const userPhotos = await getAllUserPhotos(user);
        // setPhotoData(orderPhotos(userPhotos))  // Uncomment when ready to use
      })();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Title>Jackson is Gay</Title>
        <Subtitle></Subtitle>
      </DashboardContainer>
      <Footer/>
    </>
  );
};


const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  background: linear-gradient(to right, #344c38, #1E2D3A); /* Cool gradient */
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-style: italic;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 600px;
  line-height: 1.4;
`;

export default Dashboard;
