import React from "react";

import "./Styles/App.css";

import { IconStar } from "./assets/Icons";
import { BgPattern } from "./assets/Icons";
import Question from "./Components/Question";
import data from "./assets/data.json";
function App() {
  return (
    <div className="App">
      <div className="Top__Background">
        <BgPattern />
      </div>
      <div className="Container">
        <div className="Title">
          <section>
            <IconStar />
          </section>
          <h1>FAQs</h1>
        </div>
        <div className="Question__Container">
          {data.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
