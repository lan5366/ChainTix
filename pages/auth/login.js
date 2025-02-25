import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from "@/components/LandingPage/Footer"

const Login = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()


  async function handleLogin(){

  }


  return (
    <>
    <Navbar/>
    <Section>
        <StateMent>Login Authentication is only available for current reps of Aptive Imperium</StateMent>
        <StateMent>
        If you are a current rep and are having trouble logging in, please contact your manager.
        </StateMent>
        <Header>Login</Header>
        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>

        <MainButton onClick={handleLogin}>Login</MainButton>

    </Section>
    <Footer/>
    </>
  )
}

const StateMent = styled.div`
    font-size: 2rem;
    color: #1e2d3a;
    alighn: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
`;

const Input = styled.input`
  font-size: 16px;
  max-width: 350px;
`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
  color: #666;
`;

const MainButton = styled.button`
  background-color: #007bff;
  max-width: 350px;

  &:hover {
    background-color: #0056b3;
  }
`;

const UserAgreementText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;

const UserAgreementSpan = styled(Link)`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-of-type)::after {
    content: ', '; /* Adds comma between links */
  }
`;


export default Login