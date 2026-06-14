import styled from "styled-components";
import Card from "./Card";

const H2 = styled.h2`
  font-size: 1.8em;
  margin-bottom: 15px;
  font-weight: 600;
  color: #d3d3d3;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    margin: 18px 20px;
    width: 100%;
  }
`;

const WhatImDoingSection = () => {
  const cardData = [
    {
      title: "Full-Stack Development",
      description:
        "Creating robust, high-performance web applications using frameworks like React, Node.js, and Express.",
      details:
        "As a Full-Stack Developer, I specialize in building end-to-end web applications that are not only performant but also scalable and maintainable. My expertise spans both front-end and back-end technologies, allowing me to create seamless, integrated solutions. I leverage React for building dynamic and responsive user interfaces, while utilizing Node.js and Express for robust server-side applications. My approach emphasizes clean code practices, modern architecture patterns, and performance optimization techniques to deliver exceptional user experiences.",
      cta: "View My Work",
    },
    {
      title: "API Design & Integration",
      description:
        "Optimizing database performance with MongoDB and PostgreSQL for scalable applications.",
      details:
        "In API Design and Integration, I focus on creating efficient, secure, and scalable API solutions that serve as the backbone of modern web applications. My experience includes working with both SQL (PostgreSQL) and NoSQL (MongoDB) databases, allowing me to choose the best solution for each project's unique requirements. I specialize in designing RESTful APIs and GraphQL services that facilitate seamless data flow between different components of a system. My approach prioritizes performance optimization, including efficient query design and caching strategies, to ensure that applications can handle high traffic loads and complex data relationships.",
      cta: "Learn More",
    },
    {
      title: "Product Design",
      description:
        "Designing intuitive wireframes and prototypes with a user-first mindset for impactful solutions.",
      details:
        "My approach to Product Design combines technical knowledge with user-centric design principles to create intuitive and engaging user interfaces. I specialize in crafting detailed wireframes and interactive prototypes that form the foundation of successful digital products. My process involves extensive user research, iterative design, and usability testing to ensure that the final product not only looks great but also delivers an optimal user experience. I pay particular attention to responsive design and accessibility, ensuring that the products I design are inclusive and function seamlessly across all devices.",
      cta: "Explore Projects",
    },
    {
      title: "Real-Time Applications",
      description:
        "Building live, interactive apps like chat platforms and dashboards using WebSockets and real-time technologies.",
      details:
        "In Real-Time Application development, I specialize in creating dynamic and interactive platforms that update in real-time. My experience includes implementing WebSockets for live communication, building collaborative dashboards, and ensuring high performance under concurrent usage. I focus on scalability, reliability, and smooth user experiences, making sure real-time features integrate seamlessly with full-stack applications.",
      cta: "See Live Projects",
    },
  ];

  return (
    <div className="what-im-doing-section">
      <H2>What Im Doing</H2>
      <CardContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            details={card.details}
          />
        ))}
      </CardContainer>
    </div>
  );
};

export default WhatImDoingSection;
