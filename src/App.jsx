import React, { useState, useEffect } from "react";

import "./App.css";
import { Accordion } from "./componnents";

import dataJson from "./data.json";

function App() {
  return (
    <div className="accordion container">
      <div className="container__title">
        <span className="span">Accordeon + Design pattern</span>
      </div>
      <div className="accordion__container">
        {dataJson &&
          dataJson.map(({ question, answer }, index) => (
            <Accordion key={`${index}-${question}`}>
              <Accordion.Header>
                <h1 className="accordion__title">{question}</h1>
              </Accordion.Header>
              <Accordion.Content>
                <p className="accordion__description">{answer}</p>
              </Accordion.Content>
            </Accordion>
          ))}
      </div>
    </div>
  );
}

export default App;
