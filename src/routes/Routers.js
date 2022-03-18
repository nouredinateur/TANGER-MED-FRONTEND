import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./data/Navigation";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Container from "../components/dashboard/container/";
import Ship from "../components/dashboard/ship";
import Yard from "../components/dashboard/yards";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div
        className={`${
          true ? "pl-[15em]  pr-[1.5em]" : ""
        }  bg-white min-h-screen `}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/container" element={<Container />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/yard" element={<Yard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;