import React from "react";
import Cat from "./Cat";
import Dog from "./Dog";
import PersonProp from "./PersonProp";
import PersonChild from "./PersonChild";
import AllData from "./AllData";
import "../index.css";

const App = () => {

  const obj = { member1: 'num1', member2: 'member 2' };
  const ironManDescription = 'Железный Человек - это Тони Старк, гениальный изобретатель и миллиардер.';

  return (
    <div className="app">
      <Cat />
      <Dog />
      <div className="obj">
        {Object.entries(obj).map(([key, value]) => (
          <p key={key}>{`${key}: ${value}`}</p>
        ))}
      </div>
      <AllData someProp='Информация про Железного Человека'>
        <PersonProp name="Железный Человек" description={ironManDescription} />
        <PersonChild>
          <h1>Железный Человек</h1>
          <p>{ironManDescription}</p>
        </PersonChild>
      </AllData>
    </div>
  );
};

export default App;