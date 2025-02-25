import React, { useState } from 'react';
import styled from 'styled-components';

const Apply = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Application submitted successfully!');
    };

    return (
        
            <FormContainer>
                <FormTitle>Apply Now</FormTitle>

                <Form onSubmit={handleSubmit}>
                    <Input 
                        type='text'
                        name='Name'
                        placeholder='Full Name'
                        value={formData.Name}
                        onChange={handleChange}
                        required
                        />
                    <Input 
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    <Input 
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        value={formData.Phone}
                        onChange={handleChange}
                        required
                        />
                    

                    <SubmitButton type='Submit'>Submit Application</SubmitButton>
                </Form>
            </FormContainer>
        
    )
};


const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background-color: #b8ccc9;
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #344c38;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 5px;
  font-size: 1rem;
  height: 100px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #309c42;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: white;
    color: #309c42;
  }
`;


export default Apply;
