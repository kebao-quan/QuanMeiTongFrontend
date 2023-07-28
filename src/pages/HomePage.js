import React from "react";

import NavBar from "../components/NavBar/NavBar";
import HomeSearchBar from "../components/HomeSearchBar/HomeSearchBar";
import HomeVisaCountries from "../components/HomeVisaCountries/HomeVisaCountries";
import VisaApplicationProcess from "../components/VisaApplicationProcess/VisaApplicationProcess";
import Information from "../components/Information/Information";
import Consult from "../components/Consult/Consult";
import BottonNavBar from "../components/BottomNavBar/BottonNavBar";

const Home = () => (
  <>
    <NavBar />
    <HomeSearchBar />
    <HomeVisaCountries />
    <VisaApplicationProcess />
    <Information />
    <BottonNavBar />
    <Consult />
  </>
);

export default Home;
