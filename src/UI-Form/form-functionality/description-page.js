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
      <div>
        <img className="image-tank " src={produs.image} alt={produs.name} />
      </div>

      <div className="text-tank">
        <p>{produs.text_descriere}</p>
        <p>{produs.cannon_description}</p>
        <p>{produs.armor_description}</p>
        <p>{produs.capacity_description}</p>
        <p>{produs.mobility_desciption}</p>
      </div>
    </div>
  );
};

export default DescriptionPage;
