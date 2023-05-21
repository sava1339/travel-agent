import React from 'react';
import {Route, Routes, useParams} from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import './App.css'
import TravelSelect from "./components/travel-select/Travelselect";
import TravelItem from "./components/travel-item/TravelItem";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/"  element={<Main/>} />
                <Route path="/travelSelect/:request" element={<TravelSelect/>}/>
                <Route path="/travelCard/:cardId" element={<TravelItem/>} />
                <Route path="*" element={<Main/>}/>
            </Routes>
        </div>
    );
};

export default App;