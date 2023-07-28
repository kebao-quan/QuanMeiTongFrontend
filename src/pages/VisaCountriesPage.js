import React, { useEffect } from "react";

import NavBar from "../components/NavBar/NavBar";
import VisaCountriesPageContent from "../components/VisaCountriesPageContent/VisaCountriesPageContent";
import VisaCountriesDetailContent from "../components/VisaCountriesDetailContent/VisaCountriesDetailContent";
import Information from "../components/Information/Information";
import Consult from "../components/Consult/Consult";
import BottonNavBar from "../components/BottomNavBar/BottonNavBar";

import { useParams, useNavigate } from "react-router-dom";

import { getCountryName } from "../utils/CountryData";

const VisaCountriesDetailPage = ({ countryCode }) => {
  return (
    <>
      <NavBar />
      <VisaCountriesDetailContent countryCode={countryCode} />
      <BottonNavBar />
      <Consult />
    </>
  );
};

const VisaCountriesPage = () => (
  <>
    <NavBar />
    <VisaCountriesPageContent />
    <Information />
    <BottonNavBar />
    <Consult />
  </>
);

const VisaCountries = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const countryCode = country;
  useEffect(() => {
    //检查是否有动态路由参数，
    //  如果有，检查是否是合法的国家名，如果不是，跳转到404页面
    //  如果没有，跳转到VisaCountriesPage
    if (countryCode !== undefined && getCountryName(countryCode) === null) {
      navigate("/404");
    }
  }, [countryCode, navigate]);
  if (countryCode !== undefined) {
    return <VisaCountriesDetailPage countryCode={countryCode} />;
  }
  return <VisaCountriesPage />;
};

export default VisaCountries;
