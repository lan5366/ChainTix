import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} Logan Newell - All Rights Reserved
        </LeftContainer>
        <CenterContainer>
          {/*<Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link> */}
        </CenterContainer>
        <RightContainer>
          {/*}
          <<SocialIcon href="#" aria-label="Facebook">FB</SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">TW</SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">IG</SocialIcon> */}
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #448fa3;
  height: 25vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #f5f7ed;
`;

const FooterContainer = styled.div`
  font-size: 2rem;
`;

const LeftContainer = styled.div``;

const CenterContainer = styled.div``;

const RightContainer = styled.div`

`;

const Link = styled.a`

`;

const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #007bff;
  }
`;

export default Footer;
