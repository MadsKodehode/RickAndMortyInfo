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
      <Header onClick={[nextPage, prevPage]}></Header>
      <div className="wrapper">
        <Card data={data}></Card>
      </div>
    </div>
  );
}

export default App;
