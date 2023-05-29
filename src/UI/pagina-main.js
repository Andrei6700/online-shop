import React from "react";
import "./pagina-main.css";

import { Header } from "./components/header";
import { Filters } from "./components/filters";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export const PaginaMain=()=>{
    return  (
        <div className="layout">
            <Header/>
            <Filters/>
            <Content/>
            <Footer/>
        </div>
    )
}