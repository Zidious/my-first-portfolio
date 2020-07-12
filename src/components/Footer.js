import React from 'react';
import Socials from './Socials';
function Footer() {
  return (
    <footer className='flex-grow w-full   inset-x-0 bottom-0 text-center p-1'>
      <Socials />
      <div className='py-1'>&copy; Gabe Olesen</div>
      <div>Powered by 🍪</div>
    </footer>
  );
}

export default Footer;
