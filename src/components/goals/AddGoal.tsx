import React from "react";
import styled from "../../styles/styled";

interface Props {}

const AddGoal = (props: Props) => {
  return (
    <AddGoalStyled>
      <h2>Add a new goal</h2>
    </AddGoalStyled>
  );
};

const AddGoalStyled = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

export default AddGoal;
