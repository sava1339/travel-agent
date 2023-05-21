import React from 'react';
import mainImg from './source/Main-png-1.webp'
import './Main.css'
import {Link} from "react-router-dom";
const Main = () => {
    return (
        <>
            <div className="main">
                <div className="back-main-img"></div>
                <img className="center-main-img" src={mainImg} alt=""/>
                <div className="main-black"></div>
                <div className="main-text">
                    <h1>Самые лучшие идеи для путешествия</h1>
                    <p>Открой мир с нами: найди идеальное путешествие</p>
                </div>
                <button className="main-button"><Link to="/travelSelect/*" >Получить предложения</Link></button>
            </div>
            <div className="reviews"></div>
        </>
    );
};

export default Main;