import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from "@/backend/Firebase"; 
import { collection, getDocs } from "firebase/firestore";

{/*
  application component
  */}

const Apply = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectedUser: '', 
    });

    const [users, setUsers] = useState([]); 

   
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = await getDocs(collection(db, "users"));
                const userList = usersCollection.docs.map(doc => ({
                    id: doc.id,
                    fullName: doc.data().fullName, 
                }));
                setUsers(userList);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                    name='name'
                    placeholder='Full Name'
                    value={formData.name}
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
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <Select name="selectedUser" value={formData.selectedUser} onChange={handleChange} required>
                    <option value="">Select a registered user</option>
                    {users.map(user => (
                        <option key={user.id} value={user.fullName}>{user.fullName}</option>
                    ))}
                </Select>

                <SubmitButton type='submit'>Submit Application</SubmitButton>
            </Form>
        </FormContainer>
    );
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

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
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
