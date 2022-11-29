import React, { useState } from "react";
import ReactDom from "react-dom";
import "./index.css";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";

const Dashboard = () => {
  const characters = [
    {
      name: "Daniella O'Flaherty",
      url: "http://dummyimage.com/139x100.png/ff4444/ffffff",
    },
    {
      name: "Alikee Stanlack",
      url: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
    },
    {
      name: "Anetta Humphries",
      url: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    },
    {
      name: "Staford Berkowitz",
      url: "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
    },
    {
      name: "Bronnie Bahde",
      url: "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
    },
    {
      name: "Cosette Kilpatrick",
      url: "http://dummyimage.com/134x100.png/ff4444/ffffff",
    },
    {
      name: "Tootsie Lanham",
      url: "http://dummyimage.com/214x100.png/dddddd/000000",
    },
    {
      name: "Myrwyn Harmar",
      url: "http://dummyimage.com/159x100.png/cc0000/ffffff",
    },
    {
      name: "Archie Kitchinham",
      url: "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
    },
    {
      name: "Kylynn Gladbeck",
      url: "http://dummyimage.com/216x100.png/cc0000/ffffff",
    },
  ];

  const style = {
    backgroundImage:
      "URL(https://images.unsplash.com/photo-1669583818214-0bdee6e2f631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "#55ccff",
    boxShadow: "5px 10px 18px #888888",
    borderRadius: 10,
    height: 300,
  };
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );
  const animControls = useAnimation();
  return (
    <div className="dashboard">
      {/* <ChatContainer /> */}
      <div className="swiper-container">
        <div className="card-container">
          {/* <Frame
            drag="x"
            rotate={rotateValue}
            opacity={opacityValue}
            dragConstraints={{ left: -1000, right: 1000 }}
            style={style}
          ></Frame> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
