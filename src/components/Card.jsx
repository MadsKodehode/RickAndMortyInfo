function Card({ data }) {
  return data ? (
    data.map((character) => (
      <div className="card" key={character.id}>
        <img className="profile" src={character.image}></img>
        <h2 className="name">
          {character.id}. {character.name}
        </h2>
        <div className="info">
          <h4 className="gender">
            Gender: <span>{character.gender}</span>
          </h4>
          <h4 className="status">
            Status: <span>{character.status}</span>
          </h4>
          <h4 className="species">
            Species: <span>{character.species}</span>
          </h4>
          <h4 className="location">
            Last know location: <span>{character.location.name}</span>
          </h4>
        </div>
      </div>
    ))
  ) : (
    <h1>Waiting for data</h1>
  );
}

export default Card;
