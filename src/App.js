import "./App.css";
import "./common.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import VisaCountries from "./components/VisaCountries/VisaCountries";
import VisaApplicationProcess from "./components/VisaApplicationProcess/VisaApplicationProcess";
import Information from "./components/Information/Information";
import BottonNavBar from "./components/BottonNavBar/BottonNavBar";
import Consult from "./components/Consult/Consult";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <VisaCountries />
      <VisaApplicationProcess />
      <Information />
      <BottonNavBar />
      <Consult />
    </div>
  );
}

export default App;


