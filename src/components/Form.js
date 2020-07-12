import React from 'react';

function Form() {
  return (
    <div className='mx-4 card  max-w-lg p-10 md:rounded-lg my-8 mx-auto'>
      <form name='contact' netlify='true'>
        <div className='title'>
          <h1 className='font-bold text-center'>
            {' '}
            Request a Service or Feedback
          </h1>
        </div>

        <div className='options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-4'>
          <p className='w-full mb-2 md:mb-0'>I would like to:</p>
          <select className='w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500'>
            <option value='selected'>Select an option</option>
            <option value='feature'>Enquire Service(s)</option>
            <option value='feedback'>Feedback</option>
          </select>
        </div>

        <div className='form mt-4'>
          <div className='flex flex-col text-sm'>
            <label className='font-bold mb-2 mt-2'>Title</label>
            <input
              className=' appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500'
              type='text'
              placeholder='Enter a title'
            />

            <div className='text-sm flex flex-col'>
              <label className='font-bold mt-4 mb-2'>Name</label>
              <input
                className=' appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500'
                type='text'
                placeholder='Enter a name'
              />
            </div>
            <div className='text-sm flex flex-col'>
              <label className='font-bold mt-4 mb-2'>Email</label>
              <input
                className=' appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500'
                type='email'
                placeholder='Enter a email'
              />
            </div>
            <div className='text-sm flex flex-col'>
              <label className='font-bold mt-4 mb-2'>Description</label>
              <textarea
                className=' appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500'
                placeholder='Enter your description'></textarea>
            </div>
          </div>

          <div className='submit'>
            <button
              type='submit'
              className=' w-full bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white hover:transparent mt-8 py-2 px-4 border border-black rounded'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
