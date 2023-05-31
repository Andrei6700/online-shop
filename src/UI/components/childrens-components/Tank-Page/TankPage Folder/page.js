import React from "react";
import "./page.css"
//asta e componenta fiu ce va fii pasata catre TankPage,js
//si aici importez nepotii,cred ca asa se zice
import { HeaderPage } from "./components/header-page";
import { FooterPage } from "./components/footer-page";
import { DescriptionPage } from "./components/description-page";
import { FormOrder } from "./components/form-order";

export const Page = () => {
    return (
        <div className="layout-page">
             <HeaderPage />
            <DescriptionPage />
            <FormOrder /> 
            <FooterPage /> 
        </div>
    )
}