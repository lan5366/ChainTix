import React from "react";
import Navbar from "@/components/Dashboard/Navbar";
import Footer from "@/components/LandingPage/Footer";
import SignUpForm from "@/components/SignUpForm";
import styled from "styled-components";

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <SignupContainer>
        <PreApprovalNotice>
          <strong>Important:</strong> Only preapproved users can access login features.
          If you were not preapproved, your account will not be able to sign in.
        </PreApprovalNotice>
        <SignUpForm />
      </SignupContainer>
      <Footer />
    </>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f7ed;
`;

const PreApprovalNotice = styled.p`
  background-color: #fff3cd; /* Light yellow background */
  color: #856404; /* Dark gold text */
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  max-width: 420px; /* ✅ Matches sign-up form width */
  width: 100%;
  border: 1px solid #ffeeba;
  margin-bottom: 20px; /* ✅ Reduced space between notice & form */
  margin-top: -40px; /* ✅ Pulls it closer without overlapping */
`;

export default SignupPage;
