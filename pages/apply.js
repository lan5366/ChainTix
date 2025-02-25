import Navbar from '../components/Dashboard/Navbar';
import { styled } from 'styled-components'
import Footer from "@/components/LandingPage/Footer"
import Apply from '@/components/application'

export default function ApplicationPage() {
  return (
    <>
        <Navbar/>
        
        <PageContainer>
        <StateMent>Fill out the form below for a commitment free meeting to see how Aptive could help you reach your goals</StateMent>

            <Apply/>
        </PageContainer>
        <Footer />
    </>
  )
}


const StateMent = styled.div`
    font-size: 2rem;
    color: #1e2d3a;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 40vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7ed; 
  flex-direction: column;
  background-size: cover;
  background-position: center;
`;
