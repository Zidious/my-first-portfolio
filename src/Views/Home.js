import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import RecentProjects from './RecentProjects';
import { Link } from 'react-scroll';
import Form from '../components/Form';

function Home() {
  return (
    <div>
      <div className='flex h-screen py-3 pb-20 bg-gray-500 bg-opacity-50 justify-center'>
        <div className='self-center pt-12 text-center max-w-2xl'>
          <div className='md:text-2xl xl:text-4xl text-3xl font-bold'>
            I have a passion to build.
          </div>
          <div className='mt-6 flex justify-center h-12 relative'>
            <div className='recent-projects'>
              <Link
                className='recent-projects'
                to='recent-projects-end'
                smooth={true}
                duration={1300}>
                <button className='bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white hover:transparent py-2 px-4 border border-black rounded'>
                  Recent Projects
                </button>
              </Link>
            </div>
          </div>
          <div className='mt-6 flex justify-center relative'>
            <FontAwesomeIcon icon={faArrowDown} size='2x' />
          </div>
        </div>
      </div>
      <div className='recent-projects-end'>
        <RecentProjects />
      </div>

      <div className='flex-grow justify-center w-full bg-gray-500 bg-opacity-50'>
        <Form />
      </div>
    </div>
  );
}

export default Home;
