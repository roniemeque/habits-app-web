import React from "react";

import AddGoal from "./components/goals/AddGoal";
import GoalsList from "./components/goals/GoalsList";
import styled from "./styles/styled";

function App() {
  return (
    <AppStyled>
      <GoalsList></GoalsList>
      <AddGoal></AddGoal>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  padding: 1rem;
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
