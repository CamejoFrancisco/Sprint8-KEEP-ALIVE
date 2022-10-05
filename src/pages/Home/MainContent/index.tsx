import styled from "styled-components";


const MainTextContainer = styled.div`
    position: absolute;
    right: 7vw;
    top: 31vh;
    

    @media screen and (max-width: 768px) {
        right: 7vw;
        top: 19vh;
    }

    @media screen and (max-width: 426px) {
        top:200px;
    }

    @media screen and (max-width: 376px) {
        top:200px;
    }

    @media screen and (max-width: 321px) {
        top:200px;
    }

    
`;

const Text = styled.p`
    text-align: right;
`;

const Central = styled(Text)`
    font-size: 3vh;
    font-weight: 700;
    line-height: 4vh;
    color: #C12D18;

    @media screen and (max-width: 768px) {
        font-size: 2.4vh;
        font-weight: 700;
    }

    @media screen and (max-width: 426px) {
        font-size: 2.2vh;
    }

    @media screen and (max-width: 376px) {
        font-size: 1.9vh;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.6vh;
    }
`;

const Portuguese = styled(Text)`
    font-size: 2vh;
    font-weight: 400;
    line-height: 3vh;
    color: #222222;

    @media screen and (max-width: 768px) {
        font-size: 1.8vh;
        font-weight: 700;
        line-height: 1.5vh;
    }

    @media screen and (max-width: 376px) {
        
    }

    @media screen and (max-width: 320px) {
        font-size: 1.6vh;
    }
`;

const English = styled(Text)`
    font-size: 6vh;
    font-weight: 700;
    line-height: 8vh;
    color: #C12D18;

    @media screen and (max-width: 768px) {
        font-size: 3.2vh;
    }

    @media screen and (max-width: 376px) {
        font-size: 2.9vh;
    }

    @media screen and (max-width: 320px) {
        font-size: 2.6vh;
    }
`;

const HomeMainContent = () => {
    return (
        <MainTextContainer>
            <Central>Our mission is</Central>
            <Portuguese>Nossa missão é</Portuguese>
            <English>to transform the world</English>
            <Portuguese>transformar o mundo</Portuguese>
            <English>building digital experiences</English>
            <Portuguese>construindo experiências digitais</Portuguese>
            <English>that enable our client’s growth</English>
            <Portuguese>que permitam o crescimento dos nossos clientes</Portuguese>
        </MainTextContainer>
    )
}

export default HomeMainContent;