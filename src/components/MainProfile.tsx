import React, { useEffect, useState } from 'react';
import User from './User';
import Avatars from './Avatars';

const MainProfile = () => {
  const [openAvatars, setOpenAvatars] = useState(false);
  const [name, setName] = useState('');


  useEffect(() => {
    const name = JSON.parse(localStorage?.getItem('userLogged')!)
    if (name) {
      return setName(name)
    }

  }, []);

  return (
    <div className='flex h-screen justify-center items-center'>
      <section>
        <aside className='flex flex-col items-center gap-5  bg-[#0B0B11] bg-opacity-50 border border-main-color rounded-lg p-5 px-10 shadow-lg shadow-main-color/50'>
          <button onClick={() => setOpenAvatars(!openAvatars)}>
            <User iconClassName='bg-black p-2 rounded-full border border-4 border-main-color absolute bottom-2 right-5' className='w-52 bg-black rounded-full border-8 border-main-color' renderPencil size={50} />
          </button>
          <span className='font-bold'>{name}</span>
          <div className='flex flex-col items-center border border-main-color p-3 rounded-lg'>
            <h1>Maior pontuação</h1>
            <span>0</span>
          </div>
        </aside>
      </section>
      {openAvatars && <Avatars setCloseModal={setOpenAvatars} />}
    </div>
  );
}

export default MainProfile;
