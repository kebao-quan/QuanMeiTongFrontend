import React from "react";

import Information from "../components/Information/Information";
import VisaCountriesPageContent from "../components/VisaCountriesPageContent/VisaCountriesPageContent";
import Consult from "../components/Consult/Consult";
import BottonNavBar from "../components/BottonNavBar/BottonNavBar";

const VisaCountries = () => (
  <>
    <VisaCountriesPageContent />
    <Information />
    <BottonNavBar />
    <Consult />
  </>
);

export default VisaCountries;
