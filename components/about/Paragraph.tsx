import styled from "styled-components";
import type { ReactNode } from "react";

const P = styled.p`
  font-size: 0.9rem;
  color: #a8b2d1;
  margin-bottom: 30px;
`;

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <P>{children}</P>;
};

export default Paragraph;
