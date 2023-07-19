// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { render } from "@testing-library/react";
import React from "react";
import  ReactDOM  from "react-dom";
import "./style.css";

function Post({title,imageBanner,logoImg,Desciption1,Desciption2}){
  return (
    <div className="centerData">
    <div className="mainWrapper">
      <div className="header" >
        <div className="logo">
          <img src={logoImg} alt="no image found" />
        </div>
        <div className="titles"><h3>{title}</h3></div>
      </div>
      <div className="content"><p>{Desciption1}</p></div>
       <div className="imgbanner">
        <img src={imageBanner} alt="No image found"/>
      </div>
      <div className="content"><p>{Desciption2}</p></div>
    </div>
    </div>
  )
}
function Newspost(){
  return (
    <div className="mainContainer">
      <Post
      logoImg ="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/2560px-BBC_News.svg.png"
      title = "Ukrin Against Russia"
      Desciption1 = "Russian-installed officials in Kherson confirmed the advance, but said Moscow's forces were digging in Ukrainian troops also moved towards Russian-held Luhansk in the east Ukraine's President Volodymyr Zelensky said"
      imageBanner = "https://ichef.bbci.co.uk/news/976/cpsprodpb/167DE/production/_126962129_ukrtroopsapc21sep22afp.jpg.webp"
      Desciption2 = "Toney scored a sublime backheel flick for the opener in Friday's win and slotted in a penalty, which he won himself when being fouled by Joel Veltman."
      />
      <Post
      logoImg ="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/2560px-BBC_News.svg.png"
      title = "Penalty Perfection Possible?"
      Desciption1 = "Russian-installed officials in Kherson confiident Volodymyr Zelensky said That takes him up to 55 goals in 100 games since joining Brentford from Peterborough in 2020. But more pressingly, he is level on Premier League goals with England's first-choice striker Harry Kane on eight this season."
      imageBanner = "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/F5BA/production/_127160926_mediaitem127160924.jpg"
      Desciption2 = "If you want to create a top scorer then they need to be technically very good so the way he can connect with the ball, left foot, right foot, the free-kick against Leeds, the chip, he's so good technically. He's just got that character about him as well. Brentford manager Thomas Frank said: I think he's getting closer and closer [to being alongside world-class strikers]"
      />
      
      <Post
      logoImg ="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/2560px-BBC_News.svg.png"
      title = "Turkist Explosion"
      Desciption1 = "Video footage shows miners emerging blackened and bleary-eyed accompanied by rescuers at the facility in Amasra, on the Black Sea coast.The family and friends of the missing could also be seen at the mine, anxiously awaiting news of their loved ones."
      imageBanner = "https://ichef.bbci.co.uk/news/976/cpsprodpb/151AE/production/_127164468_mediaitem127164467.jpg.webp"
      Desciption2 = "The explosion is believed to have occurred at around 300m deep. Some 49 people were working in the risky zone between 300 and 350m (985 to 1,150ft) underground, Interior Minister Suleyman Soylu said."
      />
    </div>
  )
}
ReactDOM.render(<Newspost />, document.querySelector("#root"));