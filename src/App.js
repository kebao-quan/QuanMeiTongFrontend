import './App.css';
import './common.css'
//import DDS_lanhupage_0 from './components/lanhu/DDS_lanhupage_0';
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import VisaCountries from './components/VisaCountries/VisaCountries';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import VisaApplication from './components/VisaApplication/VisaApplication';
// import Downloads from './components/Downloads/Downloads';
// import Tickets from './components/Tickets/Tickets';
// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
//import { useState } from 'react';

function App() {
  return (
    <div className="App flex-col">
      <NavBar />
      <SearchBar />
      <VisaCountries />
      {/* <DDS_lanhupage_0 /> */}
    </div>
  );
}

export default App;
