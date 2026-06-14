"use client";

import styled from "styled-components";
import { FaCircleChevronDown, FaCircleChevronUp, FaLocationArrow } from "react-icons/fa6";
import PinContainer from "./PinContainer";
import { useResume } from "@/context/ResumeContext";
import toast from "react-hot-toast";
import { useState } from "react";

const Section = styled.div`
  padding: 0 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0;
  @media (min-width: 1024px) {
    border-radius: 1rem;
  }
`;

const ForegroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  z-index: 10;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 4rem 0rem;
  justify-items: center;
  padding: 1rem 0rem;
  @media (max-width: 728px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  border-radius: 1rem;
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  margin: 11px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.75rem;

  @media (min-width: 768px) {
    height: 12rem;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  text-align: center;
  color: #bec1dd;
  margin: 0.5rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  gap: 30px;
`;

const IconListContainer = styled.div`
  display: flex;

  div {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    background-color: black;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 2.3rem;
      height: 2.3rem;
    }
  }
`;

const LiveSite = styled.div`
  display: flex;
  align-items: center;
  width: 104px;

  p {
    font-size: 0.875rem;
    color: #cbacf9;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const IconWrapper = styled.div<{ index: number }>`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  transform: ${({ index }) => `translateX(-${5 * index + 2}px)`};
  transition: transform 0.2s ease;
  img {
    width: 20px;
    border-radius: 50%;
  }
`;

const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  padding: 0;
  color: #4f46e5;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #0056b3;
    transform: scale(1.05);
  }

  &:hover svg {
    transform: translateY(3px);
  }
`;

const notify = () => toast("🚀 Coming soon! Stay tuned for the hosted live demo.");

const Portfolio = () => {
  const { portfolio } = useResume();
  const [showMore, setShowMore] = useState(false);

  return (
    <Section>
      <Heading>Project</Heading>

      <ProjectsContainer>
        {portfolio.slice(0, showMore ? portfolio.length : 4).map((item) => (
          <ProjectCard key={item.id}>
            <PinContainer title="github" href={item.git}>
              <ImageContainer>
                <BackgroundImage>
                  <img src="/bg.png" alt="Background" />
                </BackgroundImage>
                <ForegroundImage src={item.image} alt="Cover" />
              </ImageContainer>

              <Title>{item.title}</Title>

              <Description>{item.description}</Description>

              <Footer>
                <IconListContainer>
                  {item.tags.map((icon, index) => (
                    <IconWrapper key={index} index={index}>
                      <img src={icon} alt="Icon" className="p-2" />
                    </IconWrapper>
                  ))}
                </IconListContainer>

                <a
                  href={item.live ?? "#"}
                  target="_blank"
                  onClick={item.live === null ? notify : undefined}
                >
                  <LiveSite>
                    <p>Check Live</p>
                    <FaLocationArrow color="#CBACF9" />
                  </LiveSite>
                </a>
              </Footer>
            </PinContainer>
          </ProjectCard>
        ))}
      </ProjectsContainer>
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More Projects"}
        {showMore ? <FaCircleChevronUp /> : <FaCircleChevronDown />}
      </ShowMoreButton>
    </Section>
  );
};

export default Portfolio;
