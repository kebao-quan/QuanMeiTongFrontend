import React from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import VisaCountries from "../components/VisaCountries/VisaCountries";
import VisaApplicationProcess from "../components/VisaApplicationProcess/VisaApplicationProcess";
import Information from "../components/Information/Information";
import BottonNavBar from "../components/BottonNavBar/BottonNavBar";
import Consult from "../components/Consult/Consult";

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