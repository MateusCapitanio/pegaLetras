import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';

// Avatars
import angel from '/public/avatars/angel.svg'
import buster from '/public/avatars/buster.svg'
import chester from '/public/avatars/chester.svg'
import mimi from '/public/avatars/mimi.svg'
import precious from '/public/avatars/precious.svg'
import zoe from '/public/avatars/zoe.svg'
import Button from './Button';

const Avatars = () => {

  return (
    <div className='flex justify-center items-center absolute bg-black w-screen h-screen bg-opacity-50'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='flex flex-wrap justify-center gap-5 bg-black bg-opacity-50 border border-main-color border-opacity-20 rounded-lg p-5 backdrop-blur-lg max-w-[350px] min-w-[350px] md:min-w-[500px]'
      >
        <Button className='' type='button' onClick={(e: any) => alert(e.target.id)}>
          <Image id='angel' className='w-32 bg-black rounded-full border-2 border-main-color' alt='angel' src={angel} />
        </Button>
        <Button className='' type='button' onClick={(e: any) => alert(e.target.id)}>
          <Image id='buster' className='w-32 bg-black rounded-full border-2 border-main-color' alt='buster' src={buster} />
        </Button>
        <Button className='' type='button' onClick={(e: any) => alert(e.target.id)}>
          <Image id='chester' className='w-32 bg-black rounded-full border-2 border-main-color' alt='chester' src={chester} />
        </Button>
        <Button className='' type='button' onClick={(e: any) => alert(e.target.id)}>
          <Image id='mimi' className='w-32 bg-black rounded-full border-2 border-main-color' alt='mimi' src={mimi} />
        </Button>
        <Button className='' type='button' onClick={(e: any) => alert(e.target.id)}>
          <Image id='precious' className='w-32 bg-black rounded-full border-2 border-main-color' alt='precious' src={precious} />
        </Button>
        <Button className='' type='button' onClick={(e: any) => alert(e.target.id)}>
          <Image id='zoe' className='w-32 bg-black rounded-full border-2 border-main-color' alt='zoe' src={zoe} />
        </Button>
      </motion.div>
    </div>
  );
}

export default Avatars;
