"use client";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [showText, setShowText] = useState(false);
  return (
    <main>
      <h1>Hello NextJS 13!!!</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input id="specificText" />
      </div>
      <div>
        <input placeholder="Search..." />
      </div>
      <div>
        <input value="AUDI Q5" />
      </div>
      <div>
        {showText && <span>This is the text!</span>}
        <button onClick={() => setShowText(!showText)}>Show Text</button>
      </div>
    </main>
  );
};

export default HomePage;
