import React from "react"
import "./ContentChildrens.css"
import { Link } from "react-router-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { tankData } from "./tank-data/TankData"
import SecondPage from "../../UI-Form/SecondPage"

export const ContentChildrens = () => {
  return (
    <div className="layout-content">
      {tankData.map((tank) => (
        <a href="/SecondPage" className="image-item" key={tank.name}>
          <img src={tank.image} alt={tank.name} style={{ objectFit: "cover" }} />
          <div className="item-info">
            <p>{tank.name}</p>
            <p>{tank.text}</p>
            <p>{tank.price}</p>
            <button>Buy</button>
          </div>  
        </a>
      ))}
    </div>
  );
};