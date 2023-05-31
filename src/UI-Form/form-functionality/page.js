import React from "react";
import { HeaderPage } from "../form-functionality/header-page";
import { DescriptionPage } from "../form-functionality/description-page";
import { FooterPage } from "../form-functionality/footer-page";
import "./page.css";
import FormOrder from "./form-order";

export const Page = () => {
  return (
    <div className="layout-page">
      <HeaderPage />
      <DescriptionPage />
      <FormOrder />
      <FooterPage />
    </div>
  );
};
