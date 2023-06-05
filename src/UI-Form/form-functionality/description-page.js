import React from "react";
import { useParams } from "react-router-dom";
import { tankData } from "../../UI/page-setup/tank-data/TankData";

export const DescriptionPage = () => {


  const { id } = useParams();

  const produs = tankData.find((tank) => tank.name === id);

  if (!produs) {
    return <div>Produsul nu a fost găsit.</div>;
  }

  return (
    <div className="description-page">
      <img src={produs.image} alt={produs.name} />
      <h2>{produs.name}</h2>
      <p>{produs.text}</p>
      <p>{produs.price}</p>
    </div>
  );
}

export default DescriptionPage;