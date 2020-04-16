import React from "react";
import Header from './Components/Header'
import Main from './Components/Main'
import "./App.css";

function App() {
  return (
    <div>
      <Header>
        <div>
          <h1>Nasa Photo of the Day, Plus MORE...</h1>
        </div>
      </Header>
      <Main />
    </div>
  );
}

export default App;
