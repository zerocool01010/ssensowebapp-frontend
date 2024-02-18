import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_ssenso.png';
import './header.css'; 
/* tiro los botones del nav aca en el return o creo un componente navbar? */
const Header = () => {
    return (
      <header className="header">
        <Link to="/">  {/* Aca estoy ruteando a App, pero quiero hacerlo a Home después */}
          <img src={logo} alt="Logo" />
        </Link>
      </header>
    );
  };
  
  export default Header;