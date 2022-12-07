import axios from "axios";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";
import { useCookies } from "react-cookie";
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

export interface userProps {
  user_id: any;
  first_name: string;
  dob_day: string;
  dob_month: string;
  dob_year: string;
  show_gender: boolean;
  gender_identity: string;
  gender_interest: string;
  url: string;
  about: string;
  matches: any[];
}

const Dashboard: React.FC = () => {

  const [user, setUser] = useState<userProps>();
  const [cookies, setCookie, removeCookie] = useCookies<any>(['user'])

  const userId = cookies.UserId
  const getUser = async() => {
    try {
      const response = await axios.get('http://localhost:8000/user', {
        params: {userId}
      })
      setUser(response.data)
    } catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
      getUser();
  }, [])

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
      <ChatContainer user={user} />
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
