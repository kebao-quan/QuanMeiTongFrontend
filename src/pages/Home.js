import React from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import VisaCountries from "../components/VisaCountries/VisaCountries";
import VisaApplicationProcess from "../components/VisaApplicationProcess/VisaApplicationProcess";
import Information from "../components/Information/Information";
import Consult from "../components/Consult/Consult";
import BottonNavBar from "../components/BottonNavBar/BottonNavBar";

const Home = () => (
  <>
    <SearchBar />
    <VisaCountries />
    <VisaApplicationProcess />
    <Information />
    <BottonNavBar />
    <Consult />
  </>
);


export default Home;