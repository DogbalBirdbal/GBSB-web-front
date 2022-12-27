import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage"
import SelectPlacePage from "./pages/SelectPlacePage";
import SelectAnotherPage from "./pages/SelectAnotherPage";
import SelectResultPage from "./pages/SelectResultPage";
import SelectRestaurantPage from "./pages/SelectRestaurantPage";
import ResultPage from "./pages/ResultPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DayonePage from "./pages/DayonePage";
import "./styles/global.css"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/select/another" element={<SelectAnotherPage />} />
                <Route exact path="/select/result" element={<SelectResultPage />} />
                <Route exact path="/select/food" element={<SelectRestaurantPage />} />
                <Route exact path="/result" element={<ResultPage />} />
                <Route exact path="/result/:id" element={<ResultPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/result/day1" element={<DayonePage/>} />
                <Route exact path="/result/day2" element={<DayonePage/>} />
                <Route exact path="/result/day3" element={<DayonePage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;