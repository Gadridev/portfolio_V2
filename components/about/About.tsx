import styled from "styled-components";
import ProfessionalSummary from "./ProfessionalSummary";
import PersonalInterests from "./PersonalInterests";
import WhatImDoingSection from "@/components/WhatIamDoingSection";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 7px;
  color: white;
  margin-bottom: 15px;
  @media (min-width: 580px) {
    margin-bottom: 20px;
    font-weight: var(--fw-600);
  }
  @media (min-width: 768px) {
    padding-bottom: 20px;
  }
`;

const AboutContainer = styled.article`
  line-height: 1.625;
  color: #cbd5e1;
  font-smooth: always;
  padding: 15px;
  z-index: 1;
  @media (max-width: 450px) {
    margin: 20px 0px !important;
  }
  @media (max-width: 1250px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
  }
`;

const AboutText = styled.section`
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
`;

function About() {
  return (
    <AboutContainer>
      <Header>
        <Title>About me</Title>
      </Header>
      <AboutText>
        <PersonalInterests />
        <ProfessionalSummary />
      </AboutText>
      <WhatImDoingSection />
    </AboutContainer>
  );
}

export default About;
