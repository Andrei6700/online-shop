import React from "react";
import {HeaderPage} from "./header-page";
import {DescriptionPage} from "./description-page";
import {FooterPage} from "./footer-page";
import "./page.css";
import FormOrder from "./form-order";

export const Page = () => {
  return (
    <div className="layout-page">
      <HeaderPage />
      <DescriptionPage />
      <FormOrder/>
      <FooterPage />
    </div>
  );
};
