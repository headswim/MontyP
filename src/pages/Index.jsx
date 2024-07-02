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
      // Don't Switch Strategy
      const dontSwitchOptions = ["A", "B", "C"];
      const dontSwitchWinningOption = dontSwitchOptions[Math.floor(Math.random() * 3)];
      const dontSwitchInitialChoice = dontSwitchOptions[Math.floor(Math.random() * 3)];

      if (dontSwitchInitialChoice === dontSwitchWinningOption) {
        dontSwitchWins++;
        dontSwitchResults.push(true);
      } else {
        dontSwitchResults.push(false);
      }

      // Switch Strategy
      const switchOptions = ["A", "B", "C"];
      const switchWinningOption = switchOptions[Math.floor(Math.random() * 3)];
      const switchInitialChoice = switchOptions[Math.floor(Math.random() * 3)];

      const remainingOptions = switchOptions.filter(
        (option) => option !== switchInitialChoice && option !== switchWinningOption
      );
      const removedOption =
        remainingOptions[Math.floor(Math.random() * remainingOptions.length)];

      const switchChoice = switchOptions.find(
        (option) => option !== switchInitialChoice && option !== removedOption
      );
      if (switchChoice === switchWinningOption) {
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