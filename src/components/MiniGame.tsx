import React, { KeyboardEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Button from './Button';
import { motion } from 'framer-motion'

const MiniGame = () => {
  const [time, setTime] = useState(100);
  const [SelectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [key, setKey] = useState('')
  const [indexLetter, setIndexLetter] = useState(0);
  let positionLetter = 0

  const router = useRouter();

  const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const handleShuffleArray = () => {
    const shuffledArray = arrayLetters.sort(() => Math.random() - 0.5)
    const arraySixLetters = shuffledArray.slice(0, 6)
    return arraySixLetters;
  }

  const handleGetKeydown: any = (e: KeyboardEvent) => {
    positionLetter += 1
    const letter = document.getElementById(`${e.key.toUpperCase()}-${positionLetter}`);
    // if (letter?.id.includes('0')) {
    //   console.log('PRIMEIRO ELEMENTO');
    // }
    if (letter?.id === (`${e.key.toUpperCase()}-${positionLetter}`)) {
      console.log(positionLetter)
      console.log('ACERTOU!');
    } else {
      console.log(positionLetter)
      console.log('ERROU!');
    }
    if (letter) {
      letter.classList.replace('bg-[#373547]', 'bg-main-color')
    }
    setKey(e.key);
  }

  useEffect(() => {
    setSelectedLetters(handleShuffleArray())
    const intervalTimeout = setInterval(() => {
      setTime(prevState => Math.max(prevState - 0.5, 0))
    }, 1000)
    if (time <= 0) {
      return () => clearInterval(intervalTimeout)
    }

    window.addEventListener('keydown', handleGetKeydown)
    return () => {
      window.removeEventListener('keydown', handleGetKeydown);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='absolute flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-lg'>
      <div className='flex flex-col bg-[#0B0B11] bg-opacity-80 border border-main-color rounded-lg gap-5 py-5 px-10'>
        <ul className='grid grid-cols-3 sm:flex  gap-5'>
          {SelectedLetters.map((letter, i) => (
            <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log(e.currentTarget.id)} id={`${letter.toLocaleUpperCase()}-${i+1}`} key={letter + i} className={`cursor-default bg-[#373547] border-2 border-main-color p-5 rounded-lg`} type='button' >
              <li>{letter.toUpperCase()}</li>
            </Button>
          ))}
        </ul>
        <span style={{ width: `${time}%` }} className={`h-1 bg-main-color rounded-full transition-all duration-1000`}></span>
      </div>
    </motion.div>
  );
}

export default MiniGame;
