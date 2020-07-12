import React from 'react';

function Form() {
  return (
    <div className='mx-4 card  max-w-lg p-10 md:rounded-lg my-8 mx-auto'>
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='title'>
          <h1 className='font-bold text-center'>Have a question?</h1>
        </div>

        <div className='form mt-4'>
          <div className='flex flex-col text-sm'>
            <div className='text-sm flex flex-col'>
              <label className='font-bold mt-4 mb-2'>Name</label>
              <input
                className=' appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500'
                type='text'
                name='name'
                placeholder='Enter a name'
              />
            </div>
            <div className='text-sm flex flex-col'>
              <label className='font-bold mt-4 mb-2'>Email</label>
              <input
                className=' appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500'
                type='email'
                name='email'
                placeholder='Enter a email'
              />
            </div>
            <div className='text-sm flex flex-col'>
              <label className='font-bold mt-4 mb-2'>Message</label>
              <textarea
                name='message'
                className=' appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500'
                placeholder='Enter your message'></textarea>
            </div>
          </div>

          <div className='submit'>
            <button
              type='submit'
              className=' w-full bg-transparent hover:bg-gray-800 text-black font-semibold hover:text-white hover:transparent mt-8 py-2 px-4 border border-black rounded'>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
