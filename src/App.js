import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import SearchBar from "../src/components/SearchBar";
import CardHolder from "../src/components/CardHolder";
import ChampionBoard from "../src/components/ChampionBoard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function App() {
  const[ searchValue, setSearchValue] = useState();
  const[ message, setMessage ] = useState('');
  const[results, setResults] = useState([]);
  const[championNames, setChampionNames] = useState([]);

  useEffect(() => {
    const fetchChampionNames = async () => {
      const link =
        "http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion.json";
      try {
        const response = await fetch(link);
        const result = await response.json();
        const names = Object.keys(result.data);
        setChampionNames(names);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchChampionNames();
  }, []);

  return (
    <div className='body'>
    <Container >
    <h1 className='col-md-6 d-flex justify-content-center align-items-center header'>Dictionary of League of Legends</h1>
    <div className='spacer'/>
    <SearchBar setSearchValue = {setSearchValue} championNames={championNames} searchValue = {searchValue}/>
    <div className ="belowSearchBar">
    <ChampionBoard searchValue = {searchValue} setMessage = {setMessage} results/>
    {message ? <h1>{message}</h1> : <h1></h1>}
    </div>
    </Container>
    </div>
  );
}

export default App;
