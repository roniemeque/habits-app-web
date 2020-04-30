import React, { FunctionComponent } from "react";
import GoalCard from "./GoalCard";
import { gql, useQuery } from "@apollo/client";
import styled from "../../styles/styled";

interface Props {}

const GET_GOALS = gql`
  query goals {
    goals(userId: 1) {
      _id
      title
      daysCompleted
    }
  }
`;

interface GoalsData {
  goals: Goal[];
}

const GoalsList: FunctionComponent<Props> = () => {
  const { data, loading, error } = useQuery<GoalsData>(GET_GOALS);

  if (loading) return <div>loading</div>;
  if (error || !data) return <div>error</div>;

  const { goals } = data;

  return (
    <GoalsListStyled>
      <h2>My goals</h2>
      <div className="captions">
        <span className="caption">pendent</span>
        <span className="caption">done today</span>
        <span className="caption">finished</span>
      </div>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}>
            <GoalCard goal={goal}></GoalCard>
          </li>
        ))}
      </ul>
    </GoalsListStyled>
  );
};

const GoalsListStyled = styled.div`
  color: ${({ theme }) => theme.colors.text};
  .captions {
    margin: 1rem 0 0.5rem;
    display: grid;
    gap: 1.5rem;
    grid-auto-flow: column;
    justify-content: flex-start;
    .caption {
      display: flex;
      align-items: center;
      &::before {
        content: "";
        margin-right: 0.4rem;
        width: 1rem;
        height: 1rem;
        background: red;
        display: inline-block;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.black};
      }
      &:first-of-type::before {
        background: ${({ theme }) => theme.colors.primary};
      }
      &:nth-of-type(2)::before {
        background: ${({ theme }) => theme.colors.secondary};
      }
      &:nth-of-type(3)::before {
        background: ${({ theme }) => theme.colors.tertiary};
      }
    }
    .pendent {
    }
    .done {
    }
  }
  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(auto, 22rem));
    justify-content: center;
  }
`;

export default GoalsList;
