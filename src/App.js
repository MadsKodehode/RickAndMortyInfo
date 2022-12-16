import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  //Data state
  const [data, setData] = useState([]);

  //Info state
  const [info, setInfo] = useState([]);

  //Current page state
  const [currentPage, setCurrentPage] = useState(1);

  //State for storing the input value
  const [input, setInput] = useState("");

  //State for storing the searched characters
  const [searched, setSearched] = useState(null);

  function searchChars(value) {
    setInput(value);
    const filtered = data.filter((char) => {
      return char.name.toLowerCase().includes(value);
    });
    setSearched(filtered);
  }

  //Next page function
  function nextPage() {
    //Takes the amount of pages from the api and stops running if we try to click next
    if (currentPage === apiUrls.pages) return;
    setCurrentPage((current) => current + 1);
  }

  //Previous page function
  function prevPage() {
    if (currentPage === 1) return;
    setCurrentPage((current) => current - 1);
  }

  //Api urls and info
  const apiUrls = {
    main: "https://rickandmortyapi.com/api",
    info: "https://rickandmortyapi.com/api/character",
    current: `https://rickandmortyapi.com/api/character/?page=${currentPage}`,
    pages: info.pages,
    count: info.count,
  };

  //Fetching the data and storing it in the data state
  useEffect(() => {
    fetch(apiUrls.current)
      .then((response) => response.json())
      .then((data) => {
        //Storing data info so that we get an updated amount of pages and number of characters\\
        setInfo(data.info);

        //Storing the results
        setData(data.results);
      });

    //Dependencies set to currentPage so that whenever the currentPage state changes it will update the data to the data we want
  }, [currentPage]);

  //Passing what we need to props
  return (
    <div className="App">
      <Header
        onClick={[nextPage, prevPage]}
        inputState={[input, setInput]}
        searchChars={searchChars}
      ></Header>
      <div className="wrapper">
        <Card data={data} searched={searched}></Card>
      </div>
    </div>
  );
}

export default App;
