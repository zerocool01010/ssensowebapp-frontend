import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_ssenso.png';

const Header = () => {

  const location = useLocation()
  const currentPath = location.pathname

  const navBarItems = ['prefecturas', 'clanes', 'historia', 'personajes']

  const navBarHTMLElement = navBarItems.map((item) => (
    <Link>
      <div className={`text-lg capitalize font-inkAnt ${item === currentPath ? 'text-[#F7DBA1]' : 'text-black'}`}>{item}</div>
    </Link>
  ))

  /* extraer el path location con useLocation */
  /* extraer solo el nombre final de la url con un slice, de modo que nos quede el string limpio. Guardar esto en una variable X */
  /* crear un arreglo F de tipo string con los nombres de los elementos del navbar */
  /* hacer un bucle para crear dinamicamente los elementos del navbar:
      - recorrer el arreglo F y por cada iteracion crear un elemento con la forma: <Link>
            <div className='text-black text-lg capitalize font-inkAnt'>{elemName}</div>
          </Link>
      - cuando se cumpla la condicion X === F agregar una clase tailwind para estilizar y pintar este elemento del navbar con el color correspondiente    
          */

  return <>
    <header className="w-full bg-[#F7DBA1] flex flex-col items-center p-1">
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