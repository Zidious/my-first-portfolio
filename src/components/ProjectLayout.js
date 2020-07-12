import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectLayout(props) {
  return (
    <div class='sm:w-full md:w-full lg:w-1/2 xl:w-1/2 text-gray-700 text-left shadow-lg px-4 py-2 m-5 border'>
      <div className='flex-grow mt-1'>
        <div class='uppercase tracking-wide text-sm text-indigo-600 font-bold'>
          Creation: {props.creationName}
        </div>
        <a
          href={props.website}
          target='_blank'
          class='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'>
          {props.title}
        </a>
        <p className='mt-2 text-gray-700'>Description: {props.description}</p>
        <p className='mt-2 text-gray-700'>
          Features: <br />
          {props.features}
        </p>
      </div>

      <div className='flex bottom-0 justify-between pt-10'>
        <div className='text-gray-700'>
          Repository:
          <a href={props.repoLink} target='_blank'>
            <FontAwesomeIcon
              icon={props.repo}
              size='2x'
              color='black'
              className='hover:text-gray-600'
            />
          </a>
        </div>
        <div className='text-gray-700'>
          Language:
          <FontAwesomeIcon icon={props.icon} size='2x' color='black' />
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;