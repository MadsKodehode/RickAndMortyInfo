function Card({ data }) {
  //Mapping the data and creating card element for each one\\
  return data.map((character) => (
    <div className="card">
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
          Species: <span>{character.species}</span>
        </h4>
        <h4>
          Gender: <span>{character.gender}</span>
        </h4>
        <h4>
          Origin: <span>{character.origin.name}</span>
        </h4>
      </div>
    </div>
  ));
}

export default Card;
