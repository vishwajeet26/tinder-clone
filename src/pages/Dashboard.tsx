import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";
const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.unsplash.com/photo-1669623313981-6af02eedb15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.unsplash.com/photo-1669623313981-6af02eedb15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Monica Hall",
    url: "https://images.unsplash.com/photo-1669623313981-6af02eedb15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Jared Dunn",
    url: "https://images.unsplash.com/photo-1669623313981-6af02eedb15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://images.unsplash.com/photo-1669623313981-6af02eedb15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
];

const Dashboard: React.FC = () => {
  const characters = db;
  const [lastDirection, setLastDirection] = useState<string>();

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  }; 

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >  
               <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p> You swiped {lastDirection} </p>: <p>:</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
