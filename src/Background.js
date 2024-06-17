import React from "react";
import video1 from "./assets/raining.mp4";
import video2 from "./assets/cloudy.mp4";
import video3 from "./assets/sunny.mp4";
import video4 from "./assets/clear.mp4"
import video5 from "./assets/mist.mp4"
import video6 from "./assets/snow.mp4"
import video7 from "./assets/thunderstorm.mp4"
import video8 from "./assets/smoke.mp4"
import video9 from "./assets/haze.mp4"
import video10 from"./assets/fog.mp4"
import video11 from "./assets/dust.mp4"

function Background(props) {
  const videos = [
    {
      name: "Rain",
      background: video1,
    },
    {
      name: "Clouds",
      background: video2,
    },
    {
        name: "Sunny",
        background: video3,
      }, 
      {
        name: "Clear",
        background: video4,
      }, 
      {
        name: "Mist",
        background: video5,
      }, 
      {
        name: "Snow",
        background: video6,
      }, 
      {
        name: "Thunderstorm",
        background: video7,
      },
      {
        name: "Smoke",
        background: video8,
      },
      {
        name: "Haze",
        background: video9,
      },
      {
        name:"Fog",
        background:video10,
      }, 
      {
        name:"Dust",
        background:video11,
      }
  ];

  const videoURL = videos.find((el) => el.name === props.weatherDescription)?.background;

  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div>
      <video id="background" key={videoURL} autoPlay loop muted style={videoStyle}>
        <source src={videoURL} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;