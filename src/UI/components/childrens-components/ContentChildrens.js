import React from "react"
import ADATS from "./tancuri-img/ADATS.jpg"
import CCVL from "./tancuri-img/CCVL.jpg"
import HSTV_L from "./tancuri-img/HSTV_L.jpg"
import IT_1 from "./tancuri-img/IT_1.jpeg"
import Leopard_2A6 from "./tancuri-img/Leopard_2A6.jpg"
import M1_Abrams from "./tancuri-img/M1_Abrams.jpg"
import M103 from "./tancuri-img/M103.jpeg"
import Ozelot from "./tancuri-img/Ozelot.jpeg"
import PUMA from "./tancuri-img/PUMA.jpg"
import SOMUA_SM from "./tancuri-img/SOMUA_SM.jpg"
import T_80U from "./tancuri-img/T_80U.jpeg"
import TAM_2C from "./tancuri-img/TAM_2C.jpeg"
import Tiger_2 from "./tancuri-img/Tiger_2.jpeg"
import Tiger_E from "./tancuri-img/Tiger_E.jpeg"
import WIESEL_1A from "./tancuri-img/WIESEL_1A.jpg"
import XM975 from "./tancuri-img/XM975.png"
import "./ContentChildrens.css"

export const ContentChildrens = () => {
  return (
    <div className="layout-content">

      <div className="image-item">
        <img src={M103} alt="M103"  style={{ objectFit: "cover" }}/>
      </div>

      <div className="image-item">
        <img src={Ozelot} alt="Ozelot"  style={{ objectFit: "cover" }}/>
      </div>

      <div className="image-item">
        <img src={PUMA} alt="PUMA" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={SOMUA_SM} alt="SOMUA_SM"  style={{ objectFit: "cover" }}/>
      </div>

      <div className="image-item">
        <img src={ADATS} alt="ADATS" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={CCVL} alt="CCVL" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={HSTV_L} alt="HSTV_L"  style={{ objectFit: "cover" }}/>
      </div>

      <div className="image-item">
        <img src={IT_1} alt="IT_1"  style={{ objectFit: "cover" }}/>
      </div>

      <div className="image-item">
        <img src={Leopard_2A6} alt="Leopard_2A6"  style={{ objectFit: "cover" }}/>
      </div>

      <div className="image-item">
        <img src={M1_Abrams} alt="M1_Abra" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={TAM_2C} alt="TAM_2C" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={Tiger_2} alt="Tiger_2" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={WIESEL_1A} alt="WIESEL_1A" style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={XM975} alt="XM975"  style={{ objectFit: "cover" }} />
      </div>

      <div className="image-item">
        <img src={Tiger_E} alt="Tiger_E" style={{ objectFit: "cover" }}/>
        <div className="item-info">
          <p>Tiger E</p>
          <p>Tanc Tiger E, German, 100mm</p>
          <p>15.000.300$</p>
          <button>Buy</button>
          </div>
      </div>

      <div className="image-item">
        <img src={T_80U} alt="T_80U" style={{ objectFit: "cover" }} />
      </div>
    </div>

  )
}