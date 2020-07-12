import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Socials() {
  return (
    <div>
      <a
        href='https://github.com/Zidious'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          size='2x'
          icon={faGithub}
          className='hover:text-gray-600 mx-5'
        />
      </a>
      <a
        href='https://twitter.com/GabeOlesen'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          size='2x'
          icon={faTwitter}
          className='hover:text-blue-500 mx-5'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/gabe-olesen-520281106/'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          size='2x'
          icon={faLinkedin}
          className='hover:text-blue-300 mx-5'
        />
      </a>
      <a
        href='https://www.instagram.com/gabeolesen'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          size='2x'
          icon={faInstagram}
          className='hover:text-purple-800 mx-5'
        />
      </a>
    </div>
  );
}

export default Socials;
