import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_ssenso.png';

const Header = () => {

  const location = useLocation()
  const currentPath = location.pathname
  let currentPathSliced = currentPath.slice(1)
  if (currentPathSliced === '') {
    currentPathSliced = 'prefecturas'
  }

  const navBarItems = ['prefecturas', 'clanes', 'historia', 'personajes']

  const navBarHTMLElement = navBarItems.map((item) => (
    <Link to={`/${item}`}>
      <div className={`text-lg capitalize font-inkAnt ${item === currentPathSliced ? 'text-[#F7DBA1]' : 'text-black'}`}>{item}</div>
    </Link>
  ))
  
  return <>
    <header className="w-full bg-[#DEC38A] flex flex-col items-center p-1 border border-b-4 border-[#F7DBA1]">
      <Link to="/">  {/* Aca estoy ruteando a App, pero quiero hacerlo a Home después */}
        <img src={logo} className='w-[109px] h-[50px]' alt="Logo" />
      </Link>
      <div className='w-full flex flex-row justify-between px-10'>
        {navBarHTMLElement}
      </div>
    </header>
  </>


};

export default Header;