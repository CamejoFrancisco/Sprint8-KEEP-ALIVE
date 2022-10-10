import styled from "styled-components";
import GlobalStyle from "../../components/GlobalStyles";
import SignupBackground from "../Login/Background/index";
import SignUpContent from "./Content";


const SignUpContainer = styled.div`
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    height: 100vh;    
    display: flex;
    

    @media screen and (max-width: 767px) {
        
        height: 100%;
        width: 100vw;
        
    }
`;


export default function Signup() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <SignUpContainer>
                <SignUpContent />
                <SignupBackground />
            </SignUpContainer>
        </>
    )
}