import React, { useState, useEffect } from 'react';
import Logo from '../assets/avataaars.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <nav class='flex items-center justify-between flex-wrap p-1 shadow-xl border-b border-black border-opacity-25'>
        <img class='fill-current h-20 mr-2' src={Logo}></img>

        <div class='flex items-center'>
          <Link to='/'>
            <div class='font-semibold text-black text-4xl'>Gabe Olesen</div>
          </Link>
        </div>

        <div class='block lg:hidden'>
          <button>
            <FontAwesomeIcon icon={faBars} size='2x' />
          </button>
        </div>
        <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div class='text-sm lg:flex-grow'>
            {/* <a
              href='#responsive-header'
              class='block mt-4 lg:inline-block lg:mt-0 text-black hover:underline'>
              Docs
            </a>
            <a
              href='#responsive-header'
              class='block mt-4 lg:inline-block lg:mt-0 text-black hover:underline mr-4'>
              Examples
            </a>
            <a
              href='#responsive-header'
              class='block mt-4 lg:inline-block lg:mt-0 text-black hover:underline'>
              Blog
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
