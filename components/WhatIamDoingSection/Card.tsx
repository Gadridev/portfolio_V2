"use client";

import { useState } from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const CardChild = styled.div`
  border-radius: 8px;
  padding: 15px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  background: var(--border-gradient-onyx);
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
    border-color: #666666;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1d2432;
  border-radius: 8px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  color: #a0aec0;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

interface CardProps {
  title: string;
  description: string;
  details: string;
}

const Card = ({ title, description, details }: CardProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <>
      <CardChild onClick={() => setSelectedSkill(title)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardChild>
      {selectedSkill && (
        <Modal onClick={() => setSelectedSkill(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{details}</ModalDescription>
            <CloseButton onClick={() => setSelectedSkill(null)}>
              <X size={24} />
            </CloseButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Card;
