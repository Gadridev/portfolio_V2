import styled from "styled-components";
import { IoBookOutline } from "react-icons/io5";
import TimelineItem from "./TimelineItem";
import type { TimelineItem as TimelineItemType } from "@/types";

const Timeline = styled.section`
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 10px;
  }
`;

const IconBox = styled.div`
  position: relative;
  width: 43px;
  height: 33px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    background: var(--eerie-black-1);
    border-radius: inherit;
    z-index: -1;
  }
  @media (max-width: 1250px) {
    &::before {
      left: 10rem;
    }
  }
`;

const style = { fontSize: "22px" };

const TimeLineList = styled.ol`
  margin-left: 65px;

  @media (max-width: 1250px) {
    margin-left: 0;
    padding-left: 65px;
  }
`;

interface TimelineSectionProps {
  title: string;
  items: TimelineItemType[];
  icon: string;
}

const TimelineSection = ({ title, items }: TimelineSectionProps) => {
  return (
    <Timeline>
      <TitleWrapper>
        <IconBox>
          <IoBookOutline style={style} />
        </IconBox>
        <h3 className="h3">{title}</h3>
      </TitleWrapper>
      <TimeLineList>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} titleP={title} />
        ))}
      </TimeLineList>
    </Timeline>
  );
};

export default TimelineSection;
