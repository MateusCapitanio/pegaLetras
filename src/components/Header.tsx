import React, { useState } from 'react';
import User from './User';
import { motion } from 'framer-motion'
import Button from './Button';
import { useRouter } from 'next/navigation'

const Header = () => {
  const [logoutButton, setLogoutButton] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  }

  return (
    <header className='fixed w-screen bg-[#0B0B11] bg-opacity-50 border-b border-white border-opacity-15 backdrop-blur-sm'>
      <ul className='flex items-center justify-between py-3 px-10'>
        <li className=''><h1 className='text-3xl font-bold'>Pega Letras</h1></li>
        <Button className='' type='button' onClick={() => setLogoutButton(!logoutButton)}>
          <li className='relative'>
            <User renderPencil={false} iconClassName='absolute bottom-0 right-1' className='w-16 bg-black rounded-full border-2 border-main-color' size={25} />
            {logoutButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Button className='absolute bg-black bg-opacity-80 border border-opacity-30 rounded-lg border-red-600 px-8 py-1 right-5 mt-2' type='button' onClick={handleLogout}>Sair</Button>
              </motion.div>
            )}
          </li>
        </Button>

      </ul>
    </header>
  );
}

export default Header;
