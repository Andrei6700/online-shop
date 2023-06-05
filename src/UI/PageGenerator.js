import React from "react";
import { useParams } from "react-router-dom";
import { tankData } from "./page-setup/tank-data/TankData";

function PaginaProdus() {
  const { id } = useParams();

  const produs = tankData.find((tank) => tank.name === id);

  if (!produs) {
    return <div>Produsul nu a fost găsit.</div>;
  }

  return (
    <div>
      <img src={produs.image} alt={produs.name} />
      <h2>{produs.name}</h2>
      <p>{produs.text}</p>
      <p>{produs.price}</p>
      <button>Buy</button>
    </div>
  );
}

export default PaginaProdus;
