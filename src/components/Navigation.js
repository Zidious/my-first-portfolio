import React from 'react';
import Logo from '../assets/avataaars.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div>
      <nav className='flex items-center justify-between xl:justify-center lg:justify-center flex-wrap p-1 shadow-xl border-b border-black border-opacity-25'>
        <img
          className='xl:justify-start h-20 mr-2'
          src={Logo}
          alt='GabeOlesenLogo'></img>

        <Link to='/'>
          <div className='font-semibold text-black text-3xl'>Gabe Olesen</div>
        </Link>

        <div className='block lg:hidden mr-2'>
          <button>
            <FontAwesomeIcon icon={faBars} size='1x' />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
