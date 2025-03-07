import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useStateContext } from '@/context/StateContext';
import { logIn } from '@/backend/Auth';
import Link from 'next/link';
import Navbar from '@/components/Dashboard/Navbar';
import Footer from '@/components/LandingPage/Footer';

{/*
  login page setup
  */}
const Login = () => {
  const { user, setUser } = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await logIn(email, password);
      router.push('/dashboard'); 
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Navbar />
      <LoginContainer>
        <LoginFormStyled onSubmit={handleLogin}>
          <Title>Login</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
          <Input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />
          <LoginButton type="submit">Login</LoginButton>

          
          <SignupText>
            Don't have an account? <StyledLink href="/auth/signup">Sign Up</StyledLink>
          </SignupText>
        </LoginFormStyled>
      </LoginContainer>
      <Footer />
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f7ed;
`;

const LoginFormStyled = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #344c38;
  font-size: 2rem;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #344c38;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  background-color: #344c38;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  &:hover {
    background-color: #1E2D3A;
  }
`;

const SignupText = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export default Login;
