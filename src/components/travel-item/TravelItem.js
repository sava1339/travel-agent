import React from 'react';
import {useParams} from "react-router-dom";
import {data} from "../../serverData/data";
import './TravelItem.css'

const TravelItem = () => {
    const par = useParams()
    const card = -1+ +(par.cardId)
    console.log(data)
    return (
        <div className="travel-card">
            <div className="image">
                <img src="http://localhost:8081/src/serverData/img/placeholder.webp" alt=""/>
            </div>
            <p>Название: {data[card].name}</p>
            <p>Описание: {data[card].desc}</p>
            <p>Местоположение: {data[card].loc}</p>
            <p>Погода: {data[card].weather} по Цельсию</p>
            <p>Транспорт: {data[card].transport}</p>
            <p>Стоимость путешествия: {data[card].price}$</p>
        </div>
    );
};

export default TravelItem;