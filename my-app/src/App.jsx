import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// PollOption component to handle rendering each voting option
function PollOption({ label, count, onVote }) {
  return (
    <div className="poll-option">
      <h3>{label}</h3>
      <p>Votes: {count}</p>
      <button onClick={onVote}>Vote</button>
    </div>
  );
}

function App() {
  
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Bird', count: 0 },
  ]);

  // Handle voting
  const handleVote = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].count += 1; 
    setOptions(updatedOptions); 
  };

  
  const getLeader = () => {
    const leader = options.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    });
    return leader;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vote for your favorite pet!</h1>
      {options.map((option, index) => (
        <PollOption
          key={index}
          label={option.option}
          count={option.count}
          onVote={() => handleVote(index)} // Pass the voting handler
        />
      ))}
      <div className="leader">
        <h2>Current Leader: {getLeader().option}</h2>
        <p>Votes: {getLeader().count}</p>
      </div>
    </>
  );
}

export default App;
