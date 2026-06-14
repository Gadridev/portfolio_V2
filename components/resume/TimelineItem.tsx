import styled from "styled-components";

const TimeLineItem = styled.li`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    background-color: var(--jet);
    border-radius: 50%;
    left: -50px;
    top: 1px;
  }

  @media (min-width: 580px) {
    &::after {
      height: 15px;
      width: 16px;
      left: -51px;
    }
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    top: -25px;
    left: -30px;
    width: 1px;
    height: calc(100% + 50px);
    background: var(--jet);
    @media (max-width: 1250px) {
      left: 10rem;
    }
    @media (max-width: 425px) {
      left: -44px;
    }
    @media (min-width: 425px) and (max-width: 580px) {
      left: -44px;
    }
  }

  @media (min-width: 580px) {
    &:not(:last-child)::before {
      left: -44px;
    }
  }
`;

const TimeLineItemTitle = styled.h4`
  font-size: var(--fs-6);
  line-height: 1.3;
  margin-bottom: 7px;
  color: var(--white-2);
  text-transform: capitalize;
`;

const H5 = styled.h5`
  color: var(--orange-yellow-crayola);
  text-transform: capitalize;
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
`;

const TimelineText = styled.p`
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
`;

const Date = styled.span`
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
`;

const SeeCertificateButton = styled.button`
  padding: 8px 16px;
  background-color: var(--eerie-black-1);
  color: var(--orange-yellow-crayola);
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

interface TimelineItemProps {
  title: string;
  titleP: string;
  company?: string;
  dates: string;
  description: string;
  credentialID?: string | null;
}

const TimelineItem = ({
  title,
  titleP,
  company,
  dates,
  description,
  credentialID,
}: TimelineItemProps) => {
  return (
    <TimeLineItem>
      <TimeLineItemTitle>{title}</TimeLineItemTitle>
      {company && <H5>{company}</H5>}
      <Date>{dates}</Date>
      <TimelineText>{description}</TimelineText>
      <a href={credentialID ?? undefined} target="_blank">
        {titleP === "certificates" && (
          <SeeCertificateButton disabled={credentialID === null}>
            See Certificate
          </SeeCertificateButton>
        )}
      </a>
    </TimeLineItem>
  );
};

export default TimelineItem;
