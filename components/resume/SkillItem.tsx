import styled from "styled-components";

const SkillItems = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
  data {
    color: var(--light-gray);
    font-size: var(--fs-7);
    font-weight: var(--fw-300);
  }
`;

const H5 = styled.h5`
  font-size: var(--fs-7);
  color: var(--white-2);
  text-transform: capitalize;
  font-weight: var(--fw-500);
`;

const SkillProgress = styled.div`
  background: var(--jet);
  width: 100%;
  height: 8px;
  border-radius: 10px;
`;

const SkillProgressFill = styled.div`
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
`;

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem = ({ name, level }: SkillItemProps) => {
  return (
    <SkillItems>
      <TitleWrapper>
        <H5>{name}</H5>
        <data value={level}>{level}%</data>
      </TitleWrapper>
      <SkillProgress>
        <SkillProgressFill style={{ width: `${level}%` }}></SkillProgressFill>
      </SkillProgress>
    </SkillItems>
  );
};

export default SkillItem;
