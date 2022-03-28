import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavbarStyled = styled.nav`
  background-color: rgb(192, 23, 34);
  padding: 10px 20px;
  width: 100%;

  h1 {
    color: #FFF;
    text-align: left;
  }
`;

const NavigationLinks = styled.div`
  padding: 10px 20px;
  text-align: left;

  a {
    color: #000;
  }
`;

function Navbar() {
  return (
    <div>
      <NavbarStyled>
        <h1>CWS Employees and Projects</h1>
      </NavbarStyled>
      <NavigationLinks>
        <Link to="/employees">
          Employees
        </Link>
        <span> | </span>
        <Link to="/projects">
          Projects
        </Link>
      </NavigationLinks>
    </div>
  );
};

export default Navbar;