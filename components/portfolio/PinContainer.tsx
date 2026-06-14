"use client";

import styled from "styled-components";
import PinPerspective from "./PinPerspective";
import { useState, type ReactNode } from "react";

const Container = styled.div`
  position: relative;
  z-index: 50;
  cursor: pointer;

  &:hover .hover-opacity {
    opacity: 1;
  }
`;

const PerspectiveWrapper = styled.div`
  perspective: 1000px;
  transform: rotateX(70deg) translateZ(0deg);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Card = styled.div<{ transform: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.7s;
  overflow: hidden;
  transform: ${(props) => props.transform};
`;

const InnerContent = styled.div`
  position: relative;
  z-index: 50;
`;

interface PinContainerProps {
  children: ReactNode;
  title: string;
  href: string | null;
  className?: string;
  containerClassName?: string;
}

const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: PinContainerProps) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Container
      className={containerClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <PerspectiveWrapper>
        <Card transform={transform} className={className}>
          <InnerContent>{children}</InnerContent>
        </Card>
      </PerspectiveWrapper>
      <PinPerspective title={title} link={href} />
    </Container>
  );
};

export default PinContainer;
