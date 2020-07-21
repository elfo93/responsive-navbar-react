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
color: ${props=>props.open === 'close'? 'red':'green'};

  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
`;



const Logo = styled.div`
  width: 60px;
  height: 60px;
  background: url(/img/logo1.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

const Toogle = styled.div`
  @media (max-width: 768px) {
    display: flex; 
  }
  display: none; 
  height: auto;  
  width: 30px; 
  color: red; 
  background: url(/img/toogle.png)
  
`

function Navbar() {
  //declaro una funcion de estado
  const [toogleClass,setToogleClass] = useState("close"); 
  //aplico cambios al state a traves de la funcion handleToogle que emite el evento onClick
  console.log(toogleClass)
  function handleToogle(){
    alert("hola")
    if(toogleClass==="close"){
      setToogleClass("open")
    }
    if(toogleClass==="open"){
      setToogleClass("close")
    }
  }
  return <Wraped>
            <Logo>
            </Logo>
            <TopNav className={toogleClass}  open={toogleClass}>
              <a href="#home" class="active">Home</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <a href="javascript:void(0);" class="icon" onClick="myFunction()">
              <i class="fa fa-bars"></i>
              </a>
            </TopNav>
            <Toogle onClick={handleToogle}>
            </Toogle>
          </Wraped>;
}

export default Navbar