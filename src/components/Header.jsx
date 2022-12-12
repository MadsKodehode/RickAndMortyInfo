function Header({ onClick }) {
  //Destructuring the onClick prop so we can use the functions\\
  const [nextPage, prevPage] = onClick;

  return (
    <header>
      <button className="prev" onClick={prevPage}>
        Prev
      </button>
      <h1 className="title">Rick & Morty</h1>
      <button className="next" onClick={nextPage}>
        Next
      </button>
    </header>
  );
}
export default Header;
