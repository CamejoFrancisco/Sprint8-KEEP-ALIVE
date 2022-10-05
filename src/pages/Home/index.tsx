import styled from "styled-components";
import GlobalStyle from "../../components/GlobalStyles";
import logo from "../../assets/images/logo.png";
import uol from "../../assets/images/Bola_Uol.png";

import HomeMainContent from "./MainContent";
import Relogio from "./Relogio";
import { Clima } from "./Clima";
import HomeFooter from "./Footer";

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${uol});
    background-repeat: no-repeat;
    background-position: left bottom 24px;
    background-size: 30%;
    position: relative;

    @media screen and (max-width: 769px) {
        background-position: left bottom 300px;
        
    }

    @media (max-width: 426px){
        background-position: left bottom 510px;
    }

    @media (max-width: 376px){
        background-position: left bottom 530px;
    }

    @media (max-width: 320px){
        background-position: left bottom 550px;
    }
`;

const Logo = styled.img`
    position: absolute;
    top: 25px;
    left: 40px;

    @media (max-width: 426px){
        left: 0;
    }

    @media (max-width: 376px){
        left: 0;
    }

    @media (max-width: 320px){
        left: 0;
    }
    
`;

const Temperature = styled.img`
    position: absolute;
    top: 25px;
    right: 40px;
`;

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <HomeContainer>
                <Logo src={logo} alt="Compass.uol Logo" />
                <Relogio />
                <Clima />
                <HomeMainContent />
                <HomeFooter />
            </HomeContainer>
        </>
    )
}