import React from "react";
import { useParams } from "react-router-dom";
import { tankData } from "../../UI/page-setup/tank-data/TankData";

export const HeaderPage = () => {
  const { id } = useParams();

  const produs = tankData.find((tank) => tank.name === id);

  return (
    <div className="header-page">
      <div>
        <h2>{produs.name}</h2>
      </div>
    </div>
  );
};
