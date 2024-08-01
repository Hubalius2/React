import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import './index.css';


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0

  function handleInputChange(inputId, newValue) {
    setUserInput((prevUserInput) => {
        return {
          ...prevUserInput, [inputId]: +newValue
        };
      }
    );
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleInputChange} />
      {inputIsValid ? <Results userInput={userInput}/> : <p>Invalid Duration</p>}
    </>
  );
}

export default App
