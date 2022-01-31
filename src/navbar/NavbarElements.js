import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #101522;
    height:110px;
    display:flex;
    justify-content: center;
    align-items:center;
    position:sticky;
    top:0;
    z-index:10;
    margin-bottom: 75px;
    @media screen and (max-width:960px){
        transtion: 0.8s all ease;
    }
`;

export const NavbarContainer =  styled.div`
    display:flex;
    justify-content: space-between;
    height:80px;
    background: #101522;

    z-index:1;
    width:100%;
    
    max-width:1600px;
`;

export const NavLogo = styled(LinkR)`
    margin-top:18px;
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:2rem;
    display;flex;
    align-items:center;
    font-weight:bold;
    text-decoration:none;

`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
    }


`;

export const NavMenu = styled.ul`
    list-style:none;
    text-align:center;
    align-items:center;
    display:flex;

    margin-top:12px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavItem = styled.li`
    align-items: center;
    text-align:center;
`;


export const NavLinks = styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 2rem;
    height:100%;
    text-align:center;
    font-size:20.5px;
    align-items: center;
    cursor:pointer;
    &.active{
        border-bottom:3px solid white;
        
    }

`;

/*export const NavBtn = styled.div`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }

`;

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:10px 22px;
    color:#010686;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    text-decoration:none;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`;*/