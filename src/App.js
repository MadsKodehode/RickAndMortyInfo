import "./App.css";
import { useEffect, useState } from "react";
import Portal from "./imgs/portal.svg";
import Logo from "./imgs/rickmorty-logo 1.svg";
import Card from "./components/Card";
import Header from "./components/Header";
function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState(1);

  //Next page function
  function nextPage() {
    //Takes the amount of pages from the api and stops running if we try to click next
    if (count === apiUrls.pages) return;
    setCount((current) => current + 1);
  }

  //Previous page function
  function prevPage() {
    if (count === 1) return;
    setCount((current) => current - 1);
  }

  //Api urls
  const apiUrls = {
    main: "https://rickandmortyapi.com/api",
    info: "https://rickandmortyapi.com/api/character",
    chararcter: `https://rickandmortyapi.com/api/character/?page=${count}`,
    pages: info.pages,
    count: info.count,
  };

  //Fetching the data and storing it in the data state
  useEffect(() => {
    fetch(apiUrls.chararcter)
      .then((response) => response.json())
      .then((data) => {
        //Storing data info so that we get an updated amount of pages\\
        setInfo(data.info);

        //Storing the results
        setData(data.results);
      });

    //Dependencies set to count so that whenever the count state changes it will update the data based on count
  }, [count]);

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
