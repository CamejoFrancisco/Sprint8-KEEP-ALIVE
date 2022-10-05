import axios from 'axios';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';


const WeatherContainer = styled.div`
    width 121px;
    position: absolute;
    top: 25px;
    right: 41px;

    @media (max-width: 426px){
        right: 0;
    }

    @media (max-width: 376px){
        right: 0;
    }

    @media (max-width: 320px){
        right: 0px;
    }
`;

const Cidade = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
`;

const IconTempContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const Temperatura = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const Clima = () => {
    const [ temperatura, setTemperatura ] = useState(0);
    const [ cidade, setCidade ] = useState('Brasilia');

    useEffect(() => {   
        navigator.geolocation.getCurrentPosition(async function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=e75376c3fdfbe9b424e6194dc179030c`)
                .then(res => res.data)
                .then(res => {
                    const { main, name } = res;
                    setCidade(`${name}`);
                    setTemperatura(Math.round(main.temp));
                });
        });
    }, []);

    return(
        <WeatherContainer>
            <Cidade>{cidade}</Cidade> 
                <IconTempContainer>
                    <TiWeatherPartlySunny />
                </IconTempContainer>
                <Temperatura>
                    {temperatura+"°"}
                </Temperatura>
        </WeatherContainer>
    )
}