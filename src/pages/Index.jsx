import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [results, setResults] = useState({
    dontSwitch: Array(100).fill(null),
    switch: Array(100).fill(null),
  });
  const [tally, setTally] = useState({ dontSwitch: 0, switch: 0 });

  const startSimulation = () => {
    let dontSwitchWins = 0;
    let switchWins = 0;
    const dontSwitchResults = [];
    const switchResults = [];

    for (let i = 0; i < 100; i++) {
      const options = ["A", "B", "C"];
      const winningOption = options[Math.floor(Math.random() * 3)];
      const initialChoice = options[Math.floor(Math.random() * 3)];

      // Remove one incorrect option
      const remainingOptions = options.filter(
        (option) => option !== initialChoice && option !== winningOption
      );
      const removedOption =
        remainingOptions[Math.floor(Math.random() * remainingOptions.length)];

      // Don't Switch Strategy
      if (initialChoice === winningOption) {
        dontSwitchWins++;
        dontSwitchResults.push(true);
      } else {
        dontSwitchResults.push(false);
      }

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

    setResults({ dontSwitch: dontSwitchResults, switch: switchResults });
    setTally({ dontSwitch: dontSwitchWins, switch: switchWins });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Monty Hall Problem Visual Tester</h1>
      <Button onClick={startSimulation} className="mb-4">
        Start Simulation
      </Button>
      <div className="flex justify-around">
        <div>
          <h2 className="text-xl mb-2">Don't Switch Strategy</h2>
          <p>Wins: {tally.dontSwitch}</p>
          <div className="grid grid-cols-5 gap-1">
            {results.dontSwitch.map((result, index) => (
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
          <p>Wins: {tally.switch}</p>
          <div className="grid grid-cols-5 gap-1">
            {results.switch.map((result, index) => (
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