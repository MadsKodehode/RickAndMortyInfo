import { useState } from "react";

function Header({ onClick, inputState, searchChars }) {
  //Destructuring the onClick prop so we can use the functions\\
  const [nextPage, prevPage] = onClick;
  const [input, setInput] = inputState;

  return (
    <header>
      <button className="prev" onClick={prevPage}>
        Prev
      </button>
      <h1 className="title">Rick & Morty</h1>
      <button className="next" onClick={nextPage}>
        Next
      </button>
      <input
        className="srch"
        type="text"
        placeholder="search for characters"
        value={input}
        onChange={(e) => searchChars(e.target.value)}
      ></input>
    </header>
  );
}
export default Header;
