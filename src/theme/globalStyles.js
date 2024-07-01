// App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => props.bgColor || "#6200ea"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#3700b3"};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button bgColor="#03dac6" hoverColor="#018786">
          Click Me
        </Button>
      </Container>
    </>
  );
}

export default App;
