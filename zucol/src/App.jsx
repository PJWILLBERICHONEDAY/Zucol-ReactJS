import React, { useState } from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("Greetings");

  const getActiveComponent = () => {
    switch (currentView) {
      case "Greetings":
        return <GreetingsModule />;
      case "Timer":
        return <TimerModule />;
      case "Counter":
        return <CounterModule />;
      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <h1 className="app-title">Welcome to Zucol</h1>
        <nav className="nav-buttons">
          <button onClick={() => setCurrentView("Greetings")}>Greetings</button>
          <button onClick={() => setCurrentView("Timer")}>Timer</button>
          <button onClick={() => setCurrentView("Counter")}>Counter</button>
        </nav>
      </header>
      <main className="content">{getActiveComponent()}</main>
      <footer className="footer">
        Powered by <strong>Zucol</strong>
      </footer>
    </div>
  );
}

const GreetingsModule = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="greetings-section">
      <h2>Enter Your Name</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Type your name here"
      />
      {userName && <Greetings name={userName} />}
    </div>
  );
};

const TimerModule = () => (
  <div className="timer-section">
    <h2>Timer</h2>
    <Timer />
  </div>
);

const CounterModule = () => (
  <div className="counter-section">
    <h2>Counter</h2>
    <Counter />
  </div>
);

export default App;
