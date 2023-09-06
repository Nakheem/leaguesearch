import { useState } from "react"
import { Carousel } from "react-carousel-minimal";
import leagueLogo from "../images/LeagueLogo.png";
import "../components/CardHolder.css"



export default function CardHolder({searchValue, results}){
    const data = [];
    const dataAtStart = [{image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg"}]
    const skins = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+ searchValue+"_"  ;
    

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    const listItems = results.map(result =>{
        const temp = {
            image: skins + result.value +".jpg",
            caption: result.championName
        };
        data.push(temp);
    }   
    );
   
    return(
        <>
            <Carousel
            className= "carsousel"
            data={results.length == 0 ? dataAtStart : data}
            time={2000}
            width="350px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
            }
        }
      />
        
        </>
    )
}