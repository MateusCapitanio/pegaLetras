import React from 'react';
import User from './User';

const Header = () => {
  return (
    <header className='fixed w-screen bg-[#0B0B11] bg-opacity-50 border-b border-white border-opacity-15 backdrop-blur-sm'>
      <ul className='flex items-center justify-between py-3 px-10'>
        <li className=''><h1 className='text-3xl font-bold'>Pega Letras</h1></li>
        <li><User renderPencil={false} iconClassName='absolute bottom-0 right-1' className='w-16 bg-black rounded-full border-2 border-main-color' size={25} /></li>
      </ul>
    </header>
  );
}

export default Header;
