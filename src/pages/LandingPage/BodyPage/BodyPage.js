import React from "react";
import "./BodyPage.css";
import efeitoBody from "../../../assets/svg/efeito.svg";
import { Section1 } from "./Section1/SectionPage1";
import { Section2 } from "./Section2/SectionPage2";
import { Section3 } from "./Section3/SectionPage3";
import { Footer } from "../../../components/Footer/Footer";

export function BodyPage() {
  return (
    <>
      <Section1 />
      <div className="page2">
        <Section2 />
        <div className="shadow1"></div>
        <div className="divEfeito">
          <img src={efeitoBody} className="efeitoBody" alt="" />
        </div>
      </div>
      <div>
        <Section3 />
      </div>
      <div className="shadow2"></div>
      <Footer />
    </>
  );
}
