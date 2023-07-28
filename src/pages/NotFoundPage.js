import React from "react";

import Navbar from "../components/NavBar/NavBar";
import NotFoundContent from "../components/NotFoundContent/NotFoundContent";
import BottonNavBar from "../components/BottomNavBar/BottonNavBar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <NotFoundContent />
      <BottonNavBar />
    </>
  );
}
