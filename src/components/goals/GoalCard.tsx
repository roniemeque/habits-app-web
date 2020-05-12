import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import styled from "../../styles/styled";
import { css } from "@emotion/core";
import { gql, useMutation } from "@apollo/client";

interface Props {
  goal: Goal;
}

const CHANGE_COMPLETED = gql`
  mutation updateGoal($goalId: ID!, $daysCompleted: [String]) {
    updateGoal(goalId: $goalId, daysCompleted: $daysCompleted) {
      id
      title
      daysLength
      daysCompleted
    }
  }
`;

const GoalCard: FunctionComponent<Props> = ({ goal }) => {
  const [changeGoal] = useMutation(CHANGE_COMPLETED);

  const today = format(new Date(), "yyyy-MM-dd");
  const doneToday = goal.daysCompleted.includes(today);

  const toggleToday = () => {
    let updatedDays;
    if (doneToday) {
      updatedDays = goal.daysCompleted.filter((day) => day !== today);
    } else {
      updatedDays = [...goal.daysCompleted, today];
    }
    changeGoal({
      variables: {
        goalId: goal.id,
        daysCompleted: updatedDays,
      },
    });

    // return changeGoal({
    //   variables: {
    //     goalId: goal.id,
    //     daysCompleted: [...goal.daysCompleted, today],
    //   },
    // });
  };

  const finished = goal.status === "finished";

  return (
    <GoalCardStyled
      onClick={toggleToday}
      finished={finished}
      doneToday={doneToday}
    >
      <div className="icon"></div>
      <div className="info">
        <span className="title">{goal.title}</span>
      </div>
      {!!goal.daysLength && (
        <div className="activity">
          {`${goal.daysCompleted.length} of ${goal.daysLength} days completed`}
        </div>
      )}
    </GoalCardStyled>
  );
};

const GoalCardStyled = styled.div<{ doneToday: boolean; finished: boolean }>`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.border.small};
  border: 3px solid ${({ theme }) => theme.colors.stroke};
  background: ${({ theme }) => theme.colors.primary};
  background: #fffffe;
  color: ${({ theme }) => theme.colors.stroke};
  display: grid;
  align-items: center;
  grid-template-columns: 3.5rem 1fr;
  gap: 1rem;
  row-gap: 0.4rem;
  grid-template-areas:
    "icon info"
    "icon activity";

  .icon {
    grid-area: icon;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid;
    align-self: center;
    justify-self: center;
  }

  .info {
    grid-area: info;
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.cool};
    font-size: 1.2rem;
  }

  .activity {
    grid-area: activity;
  }

  ${({ theme, doneToday }) =>
    doneToday &&
    css`
      background: ${theme.colors.secondary};
    `}
  ${({ theme, finished }) =>
    finished &&
    css`
      background: ${theme.colors.tertiary};
    `}
`;

export default GoalCard;
