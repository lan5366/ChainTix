import React, { useState } from "react";
import { useRouter } from "next/router"; 
import styled from "styled-components";
import { signUp } from "@/backend/Auth";
import Link from "next/link";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const router = useRouter(); 

  const checkPreapproval = async (email) => {
    try {
      const res = await fetch("/api/checkPa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!(await checkPreapproval(email))) {
      setMessage("Your email is not preapproved for registration.");
      setTimeout(() => router.push("/"), 2000); 
      return;
    }

    try {
      await signUp(email, password);
      setMessage("Sign-up successful!");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <SignUpContainer>
      <SignUpFormStyled onSubmit={handleSignUp}>
        <Title>Sign Up</Title>
        {message && <MessageText>{message}</MessageText>}
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
          />
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
        <SignUpButton type="submit">Sign Up</SignUpButton>

        <LoginText>
          Already have an account? <StyledLink href="/auth/login">Log in</StyledLink>
        </LoginText>
      </SignUpFormStyled>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f7ed;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #344c38;
  font-size: 2rem;
`;

const SignUpFormStyled = styled.form`
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 420px;
  text-align: center;
`;

const Input = styled.input`
  padding: 14px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1.1rem;
  outline: none;
  &:focus {
    border-color: #344c38;
  }
`;

const SignUpButton = styled.button`
  padding: 14px;
  background-color: #344c38;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  &:hover {
    background-color: #1E2D3A;
  }
`;

const LoginText = styled.p`
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

const MessageText = styled.p`
  color: ${({ message }) => (message === "Sign-up successful!" ? "green" : "red")};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export default SignUpForm;
