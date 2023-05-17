import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        // margin: 0;
        // padding: 0;
        // outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        color: red;
    }
    #root{
        margin:0 auto;
    }
 `

interface SystemCardStyleProps {
    imgUrl: string;
}

export const SystemCardStyle = styled.div<SystemCardStyleProps>`
    margin: 25px;
    margin-left: -108px !important;
    width: 400px;
    height: 280px;
    background-image: ${({ imgUrl }) => `url(${imgUrl})`};
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 2px 4px 8px black;
    border-radius: 5px;
    // border: 1px solid black;
//  background-blend-mode: screen;
`;
export const Body = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-x: hidden;
    justify-content: center;

`
export const SystemCardATagStyle = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffffde;
    width:100%;
    // margin-bottom: -46px;
`;
export const DivDarkBackground = styled.div`
background-color: rgb(0 0 0 / 32%);
width: 100%;
height: 100%;
position: absolute;
// margin-top: -431px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content: flex-end;
justify-content: center;
align-items: center;

`

export const SystemDialogPopup = styled.dialog`
    position: absolute;
    box-shadow: 2px 4px 8px black;
    border: none;
    margin-top: -247px;
    height: 441px;
    width: 383px;
    display: flex;
    border-radius: 5px;
    justify-content: flex-end;
    outline: none;  
    flex-direction: column
`;
