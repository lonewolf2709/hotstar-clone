import styled from "styled-components"
import React from "react"
import "./login.css"
function Login(props)
{
    return <div className="container">
        <div className="content">
        <CTA>
            <CTAIcon1 src="./images/cta-logo-one.svg" alt=""></CTAIcon1>
            <CTAButton >GET STARTED</CTAButton>
            <CTAText>Get Premier Access to Raya and the Last Dragon for an additional fee with disney+ subscription. As of 6/06/23, the price of The Disney Bundle will increase by ₹100</CTAText>
            <CTAIcon2 src="./images/cta-logo-two.png" alt=""></CTAIcon2>
        </CTA>
        <BgImage />
        </div>
    </div>
}
const BgImage=styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./images/login-background.jpg");
    position:absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;
const CTA=styled.div`
    margin-bottom:2vw;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:0;
    text-align:center;
    margin-right:auto;
    margin-left:auto;
    width:100%;
    transition-timing-function:ease-out;
    transition:opacity 0.2s;
`
const CTAIcon1=styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`
const CTAButton=styled.button`
    background-color:rgb(125, 10, 232);
    color:white;
    width:100%;
    font-size:1.5rem;
    border-radius:10px;
    padding:15px;
    font-weight:bold;
    margin-bottom:12px;
    letter-spacing:1.5px;
    border:1px solid transparent;
    &:hover{
        background-color:#0483ee;
    }
`
const CTAText= styled.p`
    color:white;
    font-size:1rem;
    width:100%;
    margin:0 0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
`
const CTAIcon2=styled.img`
   width:100%;
   margin-top:10px;
`
export default Login;