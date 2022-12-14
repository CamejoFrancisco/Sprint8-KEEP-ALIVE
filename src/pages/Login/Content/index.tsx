import React, { useState } from "react";
import styled from "styled-components"
import logo from "../../../assets/images/logoCompasso.png";
import userIcon from "../../../assets/images/icon-user.svg";
import iconPassword from "../../../assets/images/icon-password.svg";
import { NavigateFunction, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Alert } from "react-bootstrap";

const Container = styled.div`
    width: 379px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow:hidden;
    color: #E0E0E0
`;

const SmallResImg = styled.img`
    width: 80vw;
    height: 8.5%;
    align-self:center;
    margin-top: 29px;
    margin-bottom: 19px;

    @media screen and (min-width: 1024px){
        display: none;
    }

    @media screen and (max-width: 769px){
        width: 30vw;
        height: 7.5%;
    }

    @media (max-width: 769px) and (orientation: landscape) {
        position: absolute;
        width: 25vw;
        height: 14%;
        margin-top:10px;
        left: 2px;
    }

    @media screen and (max-width: 426px){
        width: 58vw;
        height: 7.5%;
    }

    @media screen and (max-width: 376px){
        width: 65vw;
        height: 7.5%;
    }

    @media screen and (max-width: 321px){
        width: 75vw;
        height: 7.5%;
    }

`;

const Greeting = styled.p`
    font-size: 60px;
    font-weight: 400;
    line-height: 76px;

    @media (max-width: 769px) and (orientation: landscape) {
        font-size: 25px;
        text-align: center;
        line-height: 20px;
        margin-bottom: 10px;
        margin-top:5%;
    }

    @media screen and (max-width: 767px){
        font-size: 45px;
        margin-top: 0;
       
    }

    

    
`;


const LoginTag = styled.p`
    margin-top: 135px;

    font-size: 30px;
    font-weight: 400;
    line-height: 38px;

    @media (max-width: 769px) and (orientation: landscape) {
        font-size: 20px;
        margin:0;
        text-align: center;
        line-height: 25px;
    }

    @media screen and (max-width: 767px){
        margin-top: 80px;
    }

    
`;

const MainParagraph = styled.p`
    margin-top: 17px;
    width: 301px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    

    @media (max-width: 769px) and (orientation: landscape) {
        font-size: 10px;
        text-align: center;
        margin-top: 0;
        flex-direction: center;
        padding-left: 20%;
    }
`;

const InputContainer = styled.div`
    position: relative;
`;

const Icon = styled.img`
    width: 20px;

    position: absolute;
    right: -38px;
    bottom: 20px;
    //border: 1px solid red;
    transition: 500ms;

    @media screen and (max-width: 767px){


        &.invalid {
            border: 1px solid #E9B425;
        }

        &:not(:placeholder-shown) 
        {
            display: block;
            right: 20px;
        }
    }
`;

const Input = styled.input`
    margin-top: 32px;
    width: 100%;
    height: 60px;

    padding: 20px;

    background: none;
    border: 1px solid white;
    border-radius: 50px;
    outline: none;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #E0E0E0;

    @media screen and (min-width: 768px){
        
        //telas grandes

        &:not(:placeholder-shown) + ${Icon}
        {
            right: 20px;
        }
    }

        &.invalid {
            border: 1px solid #E9B425;
        }

        @media (max-width: 769px) and (orientation: landscape) {
            margin-top: 12px;
            width: 100%;
            height: 4px; 
        }
  
`;

const ErrorMessage = styled.p`
    margin: 28px auto 0;

    width: 283px;
    height: 40px;

    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #E9B425;

    &:not(.invalid) {
        visibility: hidden;
    }

    @media (max-width: 769px) and (orientation: landscape) {
        margin: 12px;
        height: 12px; 
        width: 100vw;
        font-size: 10px;
        padding-left: 15%;
        text-align: start;
    }
`;

const Button = styled.button`
    margin-top: 47px;
    width: 100%;
    height: 67px;
    
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    border: none;
    border-radius: 50px;

    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: white;

    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));

    transition: 500ms;

    &:hover {
        transform: scale(1.05);
    }


    @media screen and (max-width: 768px){
        width: 100%;
        height: 67px;
        margin:0;
        
    }

    @media (max-width: 769px) and (orientation: landscape) {
        height: 40px; 
        width: 100%;
        font-size: 16px;
        font-weight: 400;

        &:hover {
            transform: scale(1.001);
        }
        
    }
   
`;

const ChangePage = styled.div`
    margin: 28px auto 0;

    width: 283px;
    height: 40px;

    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`;

interface HandlePressType {
    email: string,
    password: string,
    setValidation: React.Dispatch<React.SetStateAction<boolean>>,
    navigate: NavigateFunction
}


const LoginContent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth()

    async function handlePress({email, password, setValidation, navigate}: HandlePressType) {

        const pw = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Z a-z 0-9]).{6,}$/);
        
        if (!email.includes('@') || !pw.test(password)) {
            setValidation(false);
        } else {
            setValidation(true);

            try {
                setError('');
                setLoading(true);
                await login(email, password)
                navigate("/home");
            }   catch(error) {
                    //alert('Email ou senha n??o cadastrados no sistema');
                    setValidation(false);
                    console.log(error);     
            }
            setLoading(false);  
            
        }

        
    }

    return (
        <Container>
            <SmallResImg src={logo}/>
            <Greeting>Ol??,</Greeting>
            <MainParagraph>Para continuar navegando de forma segura, efetue o login na rede.</MainParagraph>
            <LoginTag>Login</LoginTag>
            
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Usu??rio"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={userIcon} />
            </InputContainer>

            <InputContainer>
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={iconPassword} />
            </InputContainer>
            <ErrorMessage className={validation ? undefined : "invalid"}>
                Ops, usu??rio ou senha inv??lidos. Tente novamente!
            </ErrorMessage>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button onClick={() => handlePress({ email, password, setValidation, navigate })}>
                Continuar
            </Button>
            <ChangePage>Voc?? n??o possui cadastro? <Link className="link" to="/signup">SIGN UP</Link></ChangePage>
        </Container>
    )
}



export default LoginContent;