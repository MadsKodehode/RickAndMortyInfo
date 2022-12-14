import { useState } from "react";

function Card({ data }) {
  //Mapping the data and creating card element for each one\\
  const [currentChar, setCurrentChar] = useState(null);

  //onClick the currentchar state is set to the id of the clicked character card and then compares it
  //and returns additional info for that specific character with same id as the state

  return data.map((character) =>
    currentChar === character.id ? (
      <div
        className="card"
        onClick={() => setCurrentChar(null)}
        key={character.id}
      >
        <div className="profile-wrap">
          <img className="profile" src={character.image}></img>
          <h2 className="name">
            {character.id}. {character.name}
          </h2>
        </div>
        <div className="info">
          <h4>
            Status: <span>{character.status}</span>
          </h4>
          <h4>
            Gender: <span>{character.gender}</span>
          </h4>
          <h4>
            Species: <span>{character.species}</span>
          </h4>
          <h4>
            Origin: <span>{character.origin.name}</span>
          </h4>
          <h4>
            Last known location: <span>{character.location.name}</span>
          </h4>
        </div>
      </div>
    ) : (
      <div className="profile-wrap" key={character.id}>
        <img
          className="profile-big"
          src={character.image}
          onClick={() => setCurrentChar(character.id)}
        ></img>
        <h2 className="name">
          {character.id}. {character.name}
        </h2>
      </div>
    )
  );
}

export default Card;
