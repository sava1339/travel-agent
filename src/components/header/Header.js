import React, {useState} from 'react';
import fullLogo from './source/logo-full.svg';
import {useNavigate} from 'react-router-dom'
import './Header.css'
const Header = () => {
    const [request,setRequest] = useState("")
    const navigate = useNavigate()
    const search = ()=>{
        if (request !== ""){
            navigate('/travelSelect/'+String(request))
        }else{
            navigate('/travelSelect/'+"*")
        }
    }

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img onClick={()=> navigate('/')} src={fullLogo} alt=""/>
                </div>
                <div className="search">
                    <input onChange={()=> setRequest(event.target.value)} value={request} placeholder="Париж" type="text"/>
                    <button onClick={search}>Найти</button>
                </div>
            </div>
            <nav className="nav">
                <p>Страны</p>
                <p>Города</p>
                <p>Пляжи</p>
                <p>Горы</p>
            </nav>
        </div>
    );
};

export default Header;