import styled from 'styled-components';
import React, { useState } from 'react';

const Wraped = styled.div`
width:100%;
display:flex;
flex-direction: row; 
background-color: #333;
justify-content: space-between; 
`;

const TopNav = styled.div`
@media (max-width: 768px) {
   display: none; 
 }
background-color: #333;
overflow: hidden;

>a {
  float: left;
  display: block;
  color: #f2f2f2;
  color: ${props=>props.responsive === false ? 'yellow':'red'};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
`;

const TopNavVertical = styled.div`
  position:fixed;
  top:0;
  right:0;
  width:${props=>props.width}px;
  height:300px;
  background:pink;
  transition: width 2s ease-in-out;
  transform: translateX(0%);
    transition: transform 0.4s ease-in-out;
`;
const Logo = styled.div`
  width: 60px;
  height: 60px;
  background: url(/img/logo1.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

const ToogleIcon = styled.div`
  @media (max-width: 768px) {
    display: flex; 
  }
  display: none; 
  height: auto;  
  width: 30px; 
  color: red; 
  background: url(/img/toogle.png)
  
`;
const IconClose = styled.div`
position:relative;

`;

function Navbar() {
  //declaro una funcion de estado // el array esta compuesto por el estado (primer parametro) y la funcion para cambiar el estado (segundo parametro)
  const [toogleClass,setToogleClass] = useState(false); 
const [navWidht, setWidthNav] =useState("0px")
  //aplico cambios al state a traves de la funcion handleToogle que emite el evento onClick
  console.log(toogleClass)

  function handleToogle(){

    if(toogleClass===false){
      setToogleClass(true)
      setWidthNav("200")
    }
    if(toogleClass===true){
      setToogleClass(false)
      setWidthNav("0")
    }
    console.log(toogleClass)
  }

  return <Wraped>
            <Logo>
            </Logo>
            <TopNav responsive={toogleClass}>
              <a href="#home" className="active">Home</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <a href="javascript:void(0);" className="icon" onClick="myFunction()">
              <i className="fa fa-bars"></i>
              </a>
            </TopNav>
           { toogleClass &&
           <TopNavVertical width={navWidht}><IconClose onClick={handleToogle}>X</IconClose></TopNavVertical>
          }  
            <ToogleIcon onClick={handleToogle}>
            </ToogleIcon>
          </Wraped>;
}


export default Navbar