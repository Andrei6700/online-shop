import React from "react";
import "./pagina-main.css";

import { Header } from "../page-layout/header";
import { Filters } from "../page-layout/filters";
import { Content } from "../page-layout/content";
import { Footer } from "../page-layout/footer";


export const PaginaMain = () => {
    return (
        <div className="layout">
            <Header />
            <Filters />
            <Content />
            <Footer />
        </div>
    )
}