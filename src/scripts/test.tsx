import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import { Move, Words } from "./components/Words";
import { Move, FadeContainer } from "./components/FadeContainer";

const App = () => {
  const [index, setIndex] = useState(0);

  const moves: Move[] = [false, "in", "out"];

  return (
    <div className="container">
      <button
        onClick={() => {
          setIndex((index) => (index + 1) % moves.length);
        }}
      >
        change move
      </button>
      <FadeContainer duration={1000} move={moves[index]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, porro
        asperiores nobis eos laboriosam labore, iusto assumenda incidunt nisi
        harum quae obcaecati natus esse libero est suscipit earum. Pariatur,
        totam.
      </FadeContainer>
    </div>
  );
};

const start = () => {
  const rootEl = document.querySelector(".js-test");

  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);
  }
};

export { start };
