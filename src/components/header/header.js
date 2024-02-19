import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_ssenso.png';

const Header = () => {
  return <>
    <header className="w-full bg-[#F7DBA1] flex flex-col items-center p-1">
      <Link to="/">  {/* Aca estoy ruteando a App, pero quiero hacerlo a Home después */}
        <img src={logo} className='w-[109px] h-[50px]' alt="Logo" />
      </Link>
      <div className='w-full flex flex-row justify-between px-10'>
        <div className='text-black text-lg capitalize font-inkAnt'>prefecturas</div>
        <div className='text-black text-lg capitalize font-inkAnt'>clanes</div>
        <div className='text-black text-lg capitalize font-inkAnt'>historia</div>
        <div className='text-black text-lg capitalize font-inkAnt'>personajes</div>
      </div>
    </header>
  </>


};

export default Header;