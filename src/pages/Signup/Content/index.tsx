import React, { useState } from "react";
import '../../../App.css'
import styled from "styled-components"
import logo from "../../../assets/images/logoCompasso.png"
import userIcon from "../../../assets/images/icon-user.svg";
import iconPassword from "../../../assets/images/icon-password.svg";
import { useAuth } from "../../../context/AuthContext";
import { NavigateFunction, useNavigate, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";


const Container = styled.div`
    width: 379px;
    height: 1000px;
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


const SignUpTag = styled.p`
    margin-top: 14px;
    margin-bottom: 19px;

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
    
    margin-bottom: 15px; 
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

const MovePage = styled.div`
    margin: 28px auto 0;

    width: 283px;
    height: 40px;

    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`;

const Button = styled.button`
    margin-top: 15px;
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

interface HandleSubmitType {
    email: string,
    password: string,
    passwordConfirm: string,
    setValidation: React.Dispatch<React.SetStateAction<boolean>>,
    navigate: NavigateFunction
}



const SignUpContent = () => {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [validation, setValidation] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth()

    //Checklist password verification
    const [passwordLength, setPasswordLength] = useState(false);
    const [containsNumbers, setContainsNumbers] = useState(false);
    const [containsUppercase, setContainsUppercase] = useState(false);
    const [containsLowercase, setContainsLowercase] = useState(false);
    const [containsSpecialChar, setContainsSpecialChar] = useState(false);

    function handleChange(password:string) {
        console.log(password);
        setPassword(password);
        

        //Check > 6 characters
        setPasswordLength(password.length > 5 ? true : false)

        
        //Check for numbers
        var numbersVerification = password.match(/\d+/g);
        setContainsNumbers(numbersVerification != null ? true : false);

        //Check for Uppercase
        var uppercaseVerification = password.match(/[A-Z]/);
        setContainsUppercase(uppercaseVerification != null ? true : false);

        //Check for Lowercase
        var lowercaseVerification = password.match(/[a-z]/);
        setContainsLowercase(lowercaseVerification != null ? true : false);

        //Check for special characters
        var symbols = new RegExp(/[^A-Z a-z 0-9]/);
        setContainsSpecialChar(symbols.test(password) ? true : false);
    }

    async function handleSubmit({email, password, passwordConfirm, setValidation, navigate}: HandleSubmitType) {
    
        {/*const pw = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/);*/}


        {/*if (password !== 
            passwordConfirm) {
                return alert("As senhas devem ser iguais")
            }*/}

        if(email.includes('@') && passwordLength && containsNumbers && containsUppercase && containsLowercase && containsSpecialChar){
            alert("Cadastrado")
        }else{
            alert("Não cadastrado")
        }   
    
        /*if (!email.includes('@') || !pw.test(password)) {
            setValidation(false);
            alert("Senha deve ser >= 6 caracteres, 1 número, 1 letra maiúscula, 1 minúscula, 1 caractere especial")
        } else {
            setValidation(true);

            try {
                setError('');
                setLoading(true);
                await signup(email, password)
                navigate("/home");
            }   catch(error) {
                    setError('Não foi possível criar uma conta');
                    console.log(error);     
            }
            setLoading(false);   
        }*/
       
    }

    const navigate = useNavigate();

    return (
        <Container>
            <SmallResImg src={logo}/>
            {/*<Greeting>Olá,</Greeting>*/}
            {/*<MainParagraph>Para continuar navegando efetue seu cadastro na rede.</MainParagraph>*/}
            <SignUpTag>Sign Up</SignUpTag>
            
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={userIcon} />
            </InputContainer>

            <InputContainer>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={userIcon} />
            </InputContainer>

            <InputContainer>
                <Input
                    type="text"
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={userIcon} />
            </InputContainer>

            <InputContainer>
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => handleChange(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={iconPassword} />
            </InputContainer>

            <InputContainer>
                <Input
                    type="password"
                    placeholder="Repetir senha"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className={validation ? undefined : "invalid"}
                />
                <Icon src={iconPassword} />
            </InputContainer>

            <div className="title">Password Checker</div>
            <div className="content">
                <div>
                    <div className={passwordLength ? 'green' : ''}>Contém pelo menos 6 caracteres.</div>
                    <div className={containsNumbers ? 'green' : ''}>Contém 1 número</div>
                    <div className={containsUppercase ? 'green' : ''}>Contém 1 letra maiúscula.</div>
                    <div className={containsLowercase ? 'green' : ''}>Contém 1 letra minúscula.</div>
                    <div className={containsSpecialChar ? 'green' : ''}>Contém caractere especial</div>
                </div>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}
            {/*<ErrorMessage className={validation ? undefined : "invalid"}>
                Verifique os campos!
            </ErrorMessage>*/}
            <Button disabled={loading} onClick={() => handleSubmit({ email, password, passwordConfirm, setValidation, navigate })}>
                Continuar
            </Button>
            <MovePage>Já possui cadastro? <Link to="/login">LOGIN</Link></MovePage>
        </Container>
    )
}



export default SignUpContent;