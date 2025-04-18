import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/LandingPage/Footer';

const CreateEvent = () => {
  const [specificSeating, setSpecificSeating] = useState(false);

  return (
    <>
      <Navbar />
      <FormContainer>
        <h1>Create a New Event</h1>
        <Form>
          <Label>
            Event Name
            <Input type="text" name="eventName" required />
          </Label>

          <Label>
            Event Date
            <Input type="date" name="eventDate" required />
          </Label>

          <Label>
            Location
            <Input type="text" name="location" required />
          </Label>

          <Label>
            Number of Tickets
            <Input type="number" name="ticketCount" min="1" required />
          </Label>

          <CheckboxLabel>
            <input
              type="checkbox"
              checked={specificSeating}
              onChange={(e) => setSpecificSeating(e.target.checked)}
            />
            Enable Specific Seating
          </CheckboxLabel>

          {specificSeating && (
            <SeatingOptions>
              <Label>
                Number of Sections
                <Input type="number" name="sections" min="1" />
              </Label>
              <Label>
                Rows per Section
                <Input type="number" name="rows" min="1" />
              </Label>
              <Label>
                Seats per Row
                <Input type="number" name="seats" min="1" />
              </Label>
            </SeatingOptions>
          )}

          <SubmitButton type="submit">Create Event</SubmitButton>
        </Form>
      </FormContainer>
      <Footer />
    </>
  );
};

export default CreateEvent;



const FormContainer = styled.div`
  background-color: #68c5db;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: #1e1e1e;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: #1e1e1e;
`;

const SeatingOptions = styled.div`
  margin-bottom: 1.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.9rem 1.6rem;
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
`;
