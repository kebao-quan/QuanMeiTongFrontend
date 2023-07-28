import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Information from "../components/Information/Information";
import BottonNavBar from "../components/BottomNavBar/BottonNavBar";
import Consult from "../components/Consult/Consult";
import VisaApplyPageContent from "../components/VisaApplyPageContent/VisaApplyPageContent";

const VisaApply = () => (
  <>
    <NavBar />
    <VisaApplyPageContent />
    <Information />
    <BottonNavBar />
    <Consult />
  </>
);

export default VisaApply;
