import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import VisaCountries from "../pages/VisaCountriesPage";
import VisaApply from "../pages/VisaApplyPage";
import NotFound from "../pages/NotFoundPage";
import { Navigate } from "react-router-dom";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage />},
  { path: "/countries", element: <VisaCountries /> },
  { path: "/countries/:country", element: <VisaCountries />},
  { path: "/apply", element: <VisaApply /> },
  { path: "/404", element: <NotFound/>},
  { path: "*", element: <Navigate to="/404" replace /> }
];

export default routes;
