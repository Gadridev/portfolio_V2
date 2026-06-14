"use client";

import { useResume } from "@/context/ResumeContext";
import styled from "styled-components";
import { Header, Title } from "@/components/about/About";
import TimelineSection from "./TimelineSection";

const ResumeContainer = styled.article`
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

const Resume = () => {
  const { education, experience, certificate } = useResume();

  return (
    <ResumeContainer>
      <Header>
        <Title>Resume</Title>
      </Header>
      <TimelineSection title="Education" items={education} icon="book-outline" />
      <TimelineSection title="Experience" items={experience} icon="briefcase-outline" />
      <TimelineSection title="certificates" items={certificate} icon="briefcase-outline" />
    </ResumeContainer>
  );
};

export default Resume;
