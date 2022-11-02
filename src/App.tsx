import React from 'react';
import './App.css';
import {HelloReact} from "./components/HelloReact";
import {Counter} from "./components/Counter";
import {GitHubLink} from "./components/GitHubLink";

function App() {
  return (
    <div style={{margin: "10px"}}>
      <HelloReact />
        <hr />
        <Counter increment={1}/>
        <hr />
        <Counter increment={2}/>
      <hr />
      <GitHubLink />

    </div>
  );
}

export default App;
