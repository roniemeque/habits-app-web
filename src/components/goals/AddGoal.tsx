import React, { FormEvent, FunctionComponent, useState } from "react";
import styled from "../../styles/styled";
import { Button } from "../../styles/Buttons";

interface Props {}

const AddGoal: FunctionComponent<Props> = () => {
  const [newGoal, setNewGoal] = useState({
    title: "",
    icon: "default",
    daysLength: 21,
    userId: "5eaa296e164245257d5894a2",
  });

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setNewGoal({
      ...newGoal,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(newGoal);
  };

  return (
    <AddGoalStyled>
      <h2>Add a new goal</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Input>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={newGoal.title}
              onChange={handleInput}
              placeholder="Drink more water"
            />
          </Input>
          <Input>
            <label htmlFor="daysLength">Days to acomplish</label>
            <input
              id="daysLength"
              name="daysLength"
              type="number"
              value={newGoal.daysLength}
              onChange={handleInput}
              placeholder="21 days"
              min="0"
              max="40"
            />
          </Input>
          <Input>
            <label htmlFor="icon">Icon</label>
            <select
              name="icon"
              id="icon"
              value={newGoal.icon}
              onChange={handleInput}
            >
              <option value="default">default</option>
            </select>
          </Input>
        </fieldset>
        <Button type="submit">Create</Button>
      </form>
    </AddGoalStyled>
  );
};

const AddGoalStyled = styled.div`
  color: ${({ theme }) => theme.colors.stroke};
  border: 3px solid ${({ theme }) => theme.colors.stroke};
  border-radius: ${({ theme }) => theme.border.small};
  width: 100%;
  max-width: 26rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.main};
  form {
    display: grid;
    gap: 1rem;
    fieldset {
      border: none;
    }
  }
`;

const Input = styled.div`
  margin-top: 0.5rem;
  input,
  select {
    outline: none;
    color: black;
    width: 100%;
    padding: 0.5rem;
    border: 3px solid ${({ theme }) => theme.colors.stroke};
    background: ${({ theme }) => theme.colors.main};
    border-radius: 3px;
    transition: all 0.2s;
    height: 3rem;
    &:focus {
      border-color: ${({ theme }) => theme.colors.tertiary};
      transform: scale(1.01) translateY(-1px);
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &::placeholder {
      color: grey;
      font-weight: normal;
    }
  }
`;

export default AddGoal;
