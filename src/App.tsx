import React from "react";

import AddGoal from "./components/goals/AddGoal";
import GoalsList from "./components/goals/GoalsList";
import styled from "./styles/styled";

function App() {
  return (
    <AppStyled>
      <AddGoal></AddGoal>
      <GoalsList></GoalsList>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  padding: 1rem;
`;

export default App;
