import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import SearchBar from "../src/components/SearchBar";
import CardHolder from "../src/components/CardHolder";
import ChampionBoard from "../src/components/ChampionBoard";
import PlayerBoard from   "../src/components/PlayerBoard";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from './components/Layout';
import Header from './components/Header';



function App() {
  const [searchValue, setSearchValue] = useState();
  const [message, setMessage] = useState('');
  const [results, setResults] = useState([]);
  const [championNames, setChampionNames] = useState([]);

  
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
    <BrowserRouter>
    
        <Routes>
        
          <Route path="/" element={<Layout championNames ={championNames}/>} >
            <Route
              path="/champion/:championName"
              element={<ChampionBoard />}
            />
            <Route
              path="/player/:playerName"
              element={<PlayerBoard isPlayer={true} />}
            />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
