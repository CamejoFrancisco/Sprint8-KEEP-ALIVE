import styled from "styled-components";
import image from "../../../assets/images/notebook.png";
import compass_logo from "../../../assets/images/logoCompasso.png";

const Picture = styled.div`
    width: 50vw;
    height: 100vh;
    background-image: url(${image});
    background-size: cover;
    background-position: right center;
    position: relative;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled.div`
    width: 306px;
    height: 69px;
    background-image: url(${compass_logo});
    position: absolute;
    top: 35px;
    right: calc(25vw - 153px);
`;

const LoginImage = () => {
    return (
        
        <Picture>
            <Logo />
        </Picture>
    )
}

export default LoginImage;