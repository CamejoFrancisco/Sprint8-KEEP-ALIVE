import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../context/AuthContext";

const FooterContainer = styled.div`
    width: 100vw;
    height: 100px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

    position: absolute;
    bottom: 0px;

    @media screen and (max-width: 769px) {
        height: 325px;
        display: flex;
        flex-direction:column;
    }

    @media (max-width: 426px){
        height: 290px;
        display: flex;
        flex-direction:column;
    }

    @media (max-width: 376px){
        height: 280px;
        display: flex;
        flex-direction:column;
    }

    @media (max-width: 320px){
        height: 280px;
        display: flex;
        flex-direction:column;
    }
`;

const Disclaimer = styled.div`
    width: 548px;
    margin-left: 32px;

    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: right;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        width: 100vw;
        margin-top: 5%;
        margin-left: 0;
        margin-bottom: 10%;
        display: flex;
        text-align: center;
    }

    @media (max-width: 320px){
        margin-bottom: 5%;
    }
    
`;

const Line = styled.div`
    width: 1px;
    height: 60px;

    margin: 0px 35px;

    border-right: 1px solid #FFFFFF;

    @media screen and (max-width: 768px) {
        
        display:none;

    }
`;

const TimerContainer = styled.div`
    margin: 0 19vw 0 4.6vw;
    width: 239px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-bottom: 3%;

    }
`;

const TextMedium = styled.div`
    width: 109px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
`;

const TimerDiv = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
`;

const TimerText = styled(TextMedium)`
    text-align: center;
`;

interface LinkContainerType {
    prop?: any
}

const LinkContainer = styled.div<LinkContainerType>`
    width: 131px;
    height: 100%;
    padding: 0 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;

    background-color: ${props => props.prop ? "#FFFFFF" : "none" };

    &>a{
        color: ${props => props.prop ? "#C13216" : "#FFFFFF" };
        cursor: pointer;
        text-decoration: none;
    }

`;

const HomeFooter = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    function redirect (){
        window.open("http://www.google.com.uy");
    }

    async function handleLogOut() {
        try{
            await logout()
            navigate("/")
        } catch(err){
            {/*console.log(err);*/}
            alert(err);
        }
    }

    const [timer, setTimer] = useState<number>(60);
    
    
    useEffect(() => {
        if (timer === 0) {
            handleLogOut();
            return;
        }
        setTimeout(() => {setTimer(prevTimer => prevTimer -1)}, 1000);
    }, [timer]);

    
    
    return (
        <FooterContainer>
            <div></div>
            
            <Disclaimer>
                Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
            </Disclaimer>
            <Line />
            <TimerContainer>
                <TextMedium>Application refresh in</TextMedium>
                <div>
                    <TimerDiv>{timer}</TimerDiv>
                    <TimerText>seconds</TimerText>
                </div>
            </TimerContainer>
            <LinkContainer prop>
                <a onClick={redirect}>Continuar Navegando</a>
            </LinkContainer>
            <LinkContainer>
                <a onClick={handleLogOut}>Logout</a>
            </LinkContainer>
        </FooterContainer>
    )
}

export default HomeFooter;