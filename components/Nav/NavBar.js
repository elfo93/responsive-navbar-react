import React from 'react'; 
import styled from 'styled-components';
import Burger from '../Nav/Burger';


const Nav = styled.nav`
  width: 100%; 
  height: 55px;
  border-bottom: 2px solid; 
  padding: 0  20px; 
  display: flex;
  justify-content: space-between; 

  .logo {
    padding: 15px 0; 
  }
`
const Logo = styled.div`
  width: 60px;
  height: 60px;
  background: url(/img/logo1.png);
  background-repeat: no-repeat;
  background-size: contain;
`;


const NavBar = () => {
  return (
    <Nav>
      <Logo className="logo">
      </Logo>
      <Burger />
    </Nav>
  )
}

export default NavBar
