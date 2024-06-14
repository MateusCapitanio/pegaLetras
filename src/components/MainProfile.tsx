import React, { useEffect, useState } from 'react';
import User from './User';
import Avatars from './Avatars';
import Button from './Button';
import MiniGame from './MiniGame';
import ModalRules from './ModalRules';

const MainProfile = () => {
  const [openAvatars, setOpenAvatars] = useState(false);
  const [openMiniGame, setOpenMiniGame] = useState(false);
  const [name, setName] = useState('');
  const [showRules, setShowRules] = useState(false)
  const [maxPoint, setMaxPoint] = useState(0)

  useEffect(() => {
    const name = JSON.parse(localStorage?.getItem('userLogged')!)
    const maxPointArray = JSON.parse(localStorage?.getItem('totalPoints')!)

    if (maxPointArray) {
      setMaxPoint(maxPointArray[0]);
    }
    if (name) {
      return setName(name)
    }

  }, []);

  return (
    <div className='flex h-screen justify-center items-center'>
      <section className='sm:flex gap-5 mt-32 sm:mt-0 flex-wrap'>
        <aside className='flex flex-col items-center gap-5  bg-[#0B0B11] bg-opacity-50 border border-main-color rounded-lg p-5 px-10 shadow-lg shadow-main-color/50'>
          <button onClick={() => setOpenAvatars(!openAvatars)}>
            <User iconClassName='bg-black p-2 rounded-full border border-4 border-main-color absolute bottom-2 right-5' className='w-52 bg-black rounded-full border-8 border-main-color' renderPencil size={50} />
          </button>
          <span className='font-bold'>{name}</span>
          <div className='flex flex-col items-center border border-main-color p-3 rounded-lg'>
            <h1>Maior pontuação</h1>
            <span className='font-bold'>{maxPoint}</span>
          </div>
          <Button  className='bg-main-color shadow-lg shadow-main-color/50 px-5 py-1 rounded-md hover:bg-main-color-hover' type='button' onClick={() => {
            setOpenMiniGame(true)
          }}
          >
            Iniciar Game
          </Button>
          <Button onClick={() => setShowRules(true)} type='button' className='text-lg'>Ler as regras do game</Button>
        </aside>
        <section className='bg-red-500 min-w-[297px] mt-10 sm:mt-0'>
          <h1>Histórico de pontuação:</h1>
        </section>
      </section>
      {openAvatars && <Avatars setCloseModal={setOpenAvatars} />}
      {openMiniGame && <MiniGame setCloseMinigame={setOpenMiniGame} />}
      {showRules && <ModalRules closeModalRules={setShowRules} />}
    </div>
  );
}

export default MainProfile;
