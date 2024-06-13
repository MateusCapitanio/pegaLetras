import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface avatarsProps {
  setCloseModal: Dispatch<SetStateAction<boolean>>
}

const Avatars = ({ setCloseModal }: avatarsProps) => {
  const searchParams = useSearchParams();
  const selectedAvatar = searchParams?.get('avatar');

  return (
    <div className='flex justify-center items-center absolute bg-black w-screen h-screen bg-opacity-50'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='relative flex flex-col justify-center gap-5 bg-black bg-opacity-50 border border-main-color border-opacity-20 rounded-lg p-5 backdrop-blur-lg max-w-[350px] min-w-[350px] md:min-w-[500px]'
      >
        <div className='absolute top-3 right-3'>
          <Button className='font-bold' onClick={() => setCloseModal(false)} type='button'>x</Button>
        </div>
        <div className='relative flex flex-wrap justify-center gap-5'>
          <Link href={`?avatar=angel`} className='' type='button' onClick={() => setCloseModal(false)}>
            <Image id='angel' className='w-32 bg-black rounded-full border-2 border-main-color' alt='angel' src={angel} />
          </Link>
          <Link href={`?avatar=buster`} className='' type='button' onClick={() => setCloseModal(false)}>
            <Image id='buster' className='w-32 bg-black rounded-full border-2 border-main-color' alt='buster' src={buster} />
          </Link>
          <Link href={`?avatar=chester`} className='' type='button' onClick={() => setCloseModal(false)}>
            <Image id='chester' className='w-32 bg-black rounded-full border-2 border-main-color' alt='chester' src={chester} />
          </Link>
          <Link href={`?avatar=mimi`} className='' type='button' onClick={() => setCloseModal(false)}>
            <Image id='mimi' className='w-32 bg-black rounded-full border-2 border-main-color' alt='mimi' src={mimi} />
          </Link>
          <Link href={`?avatar=precious`} className='' type='button' onClick={() => setCloseModal(false)}>
            <Image id='precious' className='w-32 bg-black rounded-full border-2 border-main-color' alt='precious' src={precious} />
          </Link>
          <Link href={`?avatar=zoe`} className='' type='button' onClick={() => setCloseModal(false)}>
            <Image id='zoe' className='w-32 bg-black rounded-full border-2 border-main-color' alt='zoe' src={zoe} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Avatars;
