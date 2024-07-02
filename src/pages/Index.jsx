import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [dontSwitchResults, setDontSwitchResults] = useState(Array(100).fill(null));
  const [switchResults, setSwitchResults] = useState(Array(100).fill(null));
  const [dontSwitchTally, setDontSwitchTally] = useState(0);
  const [switchTally, setSwitchTally] = useState(0);

  const startSimulations = () => {
    let dontSwitchWins = 0;
    let switchWins = 0;
    const dontSwitchResults = [];
    const switchResults = [];

    for (let i = 0; i < 100; i++) {
      const options = ["A", "B", "C"];
      const winningOption = options[Math.floor(Math.random() * 3)];
      const initialChoice = options[Math.floor(Math.random() * 3)];

      // Don't Switch Strategy
      if (initialChoice === winningOption) {
        dontSwitchWins++;
        dontSwitchResults.push(true);
      } else {
        dontSwitchResults.push(false);
      }

      // Remove one incorrect option
      const remainingOptions = options.filter(
        (option) => option !== initialChoice && option !== winningOption
      );
      const removedOption =
        remainingOptions[Math.floor(Math.random() * remainingOptions.length)];

      // Switch Strategy
      const switchChoice = options.find(
        (option) => option !== initialChoice && option !== removedOption
      );
      if (switchChoice === winningOption) {
        switchWins++;
        switchResults.push(true);
      } else {
        switchResults.push(false);
      }
    }

    setDontSwitchResults(dontSwitchResults);
    setDontSwitchTally(dontSwitchWins);
    setSwitchResults(switchResults);
    setSwitchTally(switchWins);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Monty Hall Problem Visual Tester</h1>
      <Button onClick={startSimulations} className="mb-4">
        Start Simulations
      </Button>
      <div className="flex justify-around">
        <div>
          <h2 className="text-xl mb-2">Don't Switch Strategy</h2>
          <p>Wins: {dontSwitchTally}</p>
          <div className="grid grid-cols-5 gap-1">
            {dontSwitchResults.map((result, index) => (
              <div
                key={index}
                className={`w-8 h-8 border ${
                  result ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2">Switch Strategy</h2>
          <p>Wins: {switchTally}</p>
          <div className="grid grid-cols-5 gap-1">
            {switchResults.map((result, index) => (
              <div
                key={index}
                className={`w-8 h-8 border ${
                  result ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;