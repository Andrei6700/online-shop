import React from "react";
import "./page.css"

import { HeaderPage } from "../page-components/header-page";
import { FooterPage } from "../page-components/footer-page";
import { DescriptionPage } from "../page-components/description-page";
import { FormOrder } from "../page-components/form-order";

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