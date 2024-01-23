import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial /* isSpecial={true}와 같음 */ />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
