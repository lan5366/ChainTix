import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/LandingPage/Footer';

const events = [
  {
    name: 'DVSN at Champs',
    date: 'Thursday',
    time: '9:00 PM',
  },
  {
    name: 'Latin Night at Basement',
    date: 'Saturday',
    time: '10:00 PM',
  },
  {
    name: 'Wrestling Match at Rec Hall',
    date: 'Friday',
    time: '7:00 PM',
  },
  {
    name: 'Last of Us S2 E2 Premier',
    date: 'Sunday',
    time: '8:00 PM',
  },
];

const Events = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Header>Upcoming Events</Header>
        <Grid>
          {events.map((event, index) => (
            <Card key={index}>
              <EventName>{event.name}</EventName>
              <EventDetail>{event.date}</EventDetail>
              <EventDetail>{event.time}</EventDetail>
            </Card>
          ))}
        </Grid>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Events;

// Styled Components
const PageContainer = styled.div`
  background-color: #68c5db;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #1e1e1e;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const EventName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EventDetail = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 0.25rem 0;
`;
