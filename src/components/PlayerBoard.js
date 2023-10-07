import React, { useState, useEffect } from "react";
import "./ChampionBoard.css"
import ChampionStats from "./ChampionStats";
import {useParams } from "react-router-dom"


export default function CardHolder({ setMessage }) {
  
  const {name} = useParams()
  
  const searchValue = name

  const [championDetails, setChampionDetails] = useState(null);
  const [winRate, setWinRate] = useState(null);
  const [banRate, setBanRate] = useState(null);
  const [spellNames, setSpellNames] = useState([]);
  const [spellImgNames, setSpellImgNames] = useState([]);

  console.log("hi");


  useEffect(() => {
    const fetchChampionData = async () => {
      const link =
        "http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion/" +
        searchValue +
        ".json";
      const imageTile = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + searchValue + "_0.jpg";
      try {


        const response = await fetch(link);
        const result = await response.json();
        const lore = result.data[searchValue].lore;
        const title = result.data[searchValue].title;
        const stats = result.data[searchValue].stats;
        const passive = result.data[searchValue].passive.name;
        const passiveImg = result.data[searchValue].passive.image.full;

        const championDetails = {
          image: imageTile,
          lore: lore,
          title: title,
          passive: passive,
          hp: stats.hp,
          hpperlevel: stats.hpperlevel,
          mp: stats.mp,
          mpperlevel: stats.mpperlevel,
          movespeed: stats.movespeed,
          armor: stats.armor,
          armorperlevel: stats.armorperlevel,
          spellblock: stats.spellblock,
          spellblockperlevel: stats.spellblockperlevel,
          attackrange: stats.attackrange,
          hpregen: stats.hpregen,
          hpregenperlevel: stats.hpregenperlevel,
          mpregen: stats.mpregen,
          mpregenperlevel: stats.mpregenperlevel,
          crit: stats.crit,
          critperlevel: stats.critperlevel,
          attackdamage: stats.attackdamage,
          attackdamageperlevel: stats.attackdamageperlevel,
          attackspeedperlevel: stats.attackspeedperlevel,
          attackspeed: stats.attackspeed,
          passiveImg: passiveImg,
        };
        setChampionDetails(championDetails);
        setMessage("");
      } catch (error) {
        setChampionDetails(null);
        setMessage("Champion Not found");
        console.error(error.message);
      }
    };

    // To-do tempoary fix until I become better with Nodejs for backend
    const fetchWinRate = async () => {
      try {
        const url = "https://u.gg/lol/champions/" + searchValue + "/build";
        const response = await fetch(url);
        const htmlContent = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        const winRateData = doc.querySelector(".win-rate .value").textContent;
        setWinRate(winRateData);
        const banRateData = doc.querySelector(".ban-rate .value").textContent;
        setBanRate(banRateData);
      } catch (error) {
        console.error("Error fetching win rate:", error);
        setWinRate(null);
      }
    };

    const fetchSpellNames = async () => {
      try {
        const url = "https://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion/" + searchValue + ".json";
        const response = await fetch(url);
        const jsonData = await response.json();

        if (jsonData && jsonData.data && jsonData.data[searchValue]) {
          const championData = jsonData.data[searchValue];
          const spellNames = Object.values(championData.spells).map(
            (spell) => spell.name
          );
          setSpellNames(spellNames);
          const spellImgNames = Object.values(championData.spells).map(
            (spell) => spell.image.full
          );
          setSpellImgNames(spellImgNames)
        } else {
          setSpellNames([]);
          setSpellImgNames([])
        }
      } catch (error) {
        console.error("Error fetching spell names:", error);
        setSpellNames([]);
        setSpellImgNames([]);
      }
    };

    if (searchValue) {
      fetchChampionData();
      fetchWinRate();
      fetchSpellNames();
    } else {
      setChampionDetails(null);
    }
  }, [searchValue]);

  return (
    <div>
      {championDetails ? (
        <>
          <div className="row">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 text-center">
                <h1>{searchValue}</h1>
                <h1>{championDetails.title}</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div> Win rate: {winRate}</div>
            </div>
            <div className="col-md-6">
              <div>Ban rate: {banRate}</div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>{championDetails.lore}</div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={championDetails.image} alt={searchValue} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="d-flex justify-content-center">Abilities:</h3>
              <div className="d-flex flex-row justify-content-around mb-3">
                <div className="d-flex flex-column bd-highlight mb-3">
                  <img
                    className="abilityImg"
                    src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/passive/${championDetails.passiveImg}`}
                    alt="pSpellName"
                    style={{ width: '100px', height: '100px' }}
                  ></img>
                  {console.log(championDetails.passiveImg)}
                  <div className="">{championDetails.passive}</div>
                </div>
                {spellImgNames.map((spellImgName, index) => (
                  <div className="d-flex flex-column bd-highlight mb-3" key={index}>
                    <img
                      className="abilityImg"
                      src={`http://ddragon.leagueoflegends.com/cdn/13.15.1/img/spell/${spellImgName}`}
                      alt={spellImgName}
                      style={{ width: '100px', height: '100px' }}
                    ></img>
                    <div className="">{spellNames[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ChampionStats 
          championDetails = {championDetails}/>
        </>
      ) : (
        <p>No champion found.</p>
      )}
    </div>
  );
}
