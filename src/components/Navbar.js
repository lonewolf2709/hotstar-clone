import styled from "styled-components"
import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom";
// import {signInWithGoogle} from "../firebase"
import {auth,provider} from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { selectUserName,selectUserEmail,selectUserPhoto,setUserLoginDetails, setSignOutState} from "../features/user/userSlice";
import {useDispatch,useSelector} from "react-redux";
function Navbar(props)
{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                navigate("/home");
            }
            else{
                navigate("/");
            }
        })
    },[userName]);
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            setUser(result.user);
        }).catch((error)=>{
            alert(error);
        })
    }
    const signOutWithGoogle=()=>{
        auth
        .signOut()
        .then(()=>{
            dispatch(setSignOutState());
        }).catch((err)=>alert(err.message));
    }
    const setUser=(user)=>{
        dispatch(
            setUserLoginDetails(
                {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }
            )
        )
    }
    return <NavbarMain>
        <NavbarLogo src="./images/logo.svg"></NavbarLogo>
        {
            !userName?<NavButton onClick={signInWithGoogle}>LOGIN</NavButton>:
            <>
        <NavMenu>
        <NavLink to="/home"><img src="./images/home-icon.svg" alt=""></img><span>HOME</span></NavLink>
        <NavLink to="/search"><img src="./images/search-icon.svg" alt=""></img><span>SEARCH</span></NavLink>
        <NavLink to="/watchlist"><img src="./images/watchlist-icon.svg" alt=""></img><span>WATCHLIST</span></NavLink>
        <a href="#about"><NavLink to=""><img src="./images/original-icon.svg" alt=""></img><span>ORIGINALS</span></NavLink></a>
        <NavLink to="/movies"><img src="./images/movie-icon.svg" alt=""></img><span>MOVIES</span></NavLink>
        <NavLink to="/series"><img src="./images/series-icon.svg" alt=""></img><span>SERIES</span></NavLink>
        </NavMenu>
        <SignOut>
        <UserImg src={userPhoto} alt="userimage"></UserImg>
        <DropDown onClick={signOutWithGoogle}><span>Sign Out</span></DropDown>
        </SignOut>
        </>
        }
    </NavbarMain>
}
const NavbarMain=styled.div`
   position:fixed;
   background-color:#090b13;
   display:flex;
   align-items:center;
   padding:0 36px;
   width:100%;
   height:70px;
   justify-content:space-between;
   letter-spacing:16px;
   z-index:3;
`
const NavbarLogo=styled.img`
    padding:0px;
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    width:80px;
`
const NavMenu=styled.div`
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    justify-content:flex-end;
    padding:0px;
    margin-right:auto;
    margin-left:25px;
    @media (max-width:890px)
    {
        display:none;
    }
`
const NavButton=styled.button`
    padding:8px 16px;
    color:rgb(194, 191, 191);;
    font-size:1rem;
    font-weight:550;
    letter-spacing:1.5px;
    background-color:transparent;
    border:1px solid whitesmoke;
    border-radius:10px;
    transition:all 0.5s ease 0s;
    &:hover{
        background-color:rgb(194, 191, 191);
        color:rgb(40, 39, 39);
    }
`
const NavLink=styled(Link)`
    display:flex;
    align-items:center;
    padding:0 12px;
    img{
        height:20px;
        min-width:20px;
        width:20px;
    }
    span{
        color:rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 4px;
        white-space:nowrap;
        border:0 0 0 0;
        position:relative;
        margin-top:5px;
        &:hover{
            border-bottom:2px solid white;
        }
    }
` 
const UserImg=styled.img`
    height:100%;
    border-radius:50%;
`
const DropDown=styled.div`
    position:absolute;
    top:48px;
    right:0px;
    background-color:rgb(19,19,19);
    border :1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100px;
    opacity:0;
`
const SignOut=styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }
    &:hover{
        ${DropDown}
        {
            opacity:1;
            transition-duration:1s;
        }
    }
`
export default Navbar;