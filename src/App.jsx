import './App.css';
import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/loginform.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ArtistSearch from "./components/ArtistSearch.jsx";

function App()
{
  return (
    <BrowserRouter>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/search" element={<ArtistSearch/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
            </Routes>

    </BrowserRouter>
  )
}
export default App
