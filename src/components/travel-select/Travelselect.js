import React from 'react';
import './TravelSelect.css'
import {data} from "../../serverData/data";
import {useNavigate, useParams} from "react-router-dom";
const TravelSelect = () => {
    let travelRequest = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <div className="travel-top-block"></div>
            <div className="travel-bottom-block">
                <div className="search-travel"></div>
                <div className="travels">
                    {travelRequest.request === "*" ?
                        data.map(el=>
                            <div onClick={()=> navigate('/travelCard/'+el.id)} className="travel-block" key={el.name}>
                                <div className="travel-block-img">
                                    <div></div>
                                </div>
                                <div className="travel-block-info">
                                    <p>{el.name}</p>
                                    <p>Стоимость: {el.price}</p>
                                </div>
                            </div>)
                        :
                        data.map(el=>el.name.toUpperCase().indexOf(travelRequest.request.toUpperCase()) !== -1 ?
                            <div onClick={()=> navigate('/travelCard/'+el.id)} className="travel-block" key={el.name}>
                                <div className="travel-block-img">
                                    <div></div>
                                </div>
                                <div className="travel-block-info">
                                    <p>{el.name}</p>
                                    <p>Стоимость: {el.price}</p>
                                </div>
                            </div>
                            : null)
                    }
                </div>
            </div>
        </div>
    );
};

export default TravelSelect;