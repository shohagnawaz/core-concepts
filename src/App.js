import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Md. Shah Nawaz"></Person>
        <Person name="Md. Shah Shohag"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
    </div>
  );
}

export default App;
