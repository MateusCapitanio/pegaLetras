import React, { Dispatch, KeyboardEvent, MouseEvent, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import Button from './Button';
import { motion } from 'framer-motion'
import Link from 'next/link';

interface propsMinigame {
  setCloseMinigame: Dispatch<SetStateAction<boolean>>
}

const MiniGame = ({ setCloseMinigame }: propsMinigame) => {
  const [time, setTime] = useState(100);
  const [SelectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [key, setKey] = useState('')
  const [indexLetter, setIndexLetter] = useState(0);
  const [mistake, setMistake] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalPointsArray, setTotalPointsArray] = useState<number[]>([])

  let positionLetter = 0

  const router = useRouter();
  const searchParams = useSearchParams();

  const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const handleShuffleArray = () => {
    const shuffledArray = arrayLetters.sort(() => Math.random() - 0.5)
    const arraySixLetters = shuffledArray.slice(0, 6)
    return arraySixLetters;
  }

  const handleSavePoints = (totalPoints: number) => {
    totalPointsArray.push(totalPoints)

    const arrayOrder = totalPointsArray.sort((a, b) => b - a)
    localStorage.setItem('totalPoints', JSON.stringify(arrayOrder))
  }

  const handleGetKeydown: any = (e: KeyboardEvent) => {
    positionLetter += 1
    const letter = document.getElementById(`${e.key.toUpperCase()}-${positionLetter}`);
    if (letter) {
      setTotalPoints(prevState => prevState + 10)
      if (positionLetter === 6) {
        const letterButton = document.querySelectorAll('.letterButton');
        letterButton.forEach(element => {
          element.classList.replace('bg-main-color', 'bg-[#373547]')
        })
        positionLetter = 0
        setSelectedLetters(handleShuffleArray())
      }
    } else {
      setMistake('Ops... Você errou!')
      console.log('ERROU!')
    }
    if (letter) {
      letter.classList.replace('bg-[#373547]', 'bg-main-color')
    }
    setKey(e.key);
  }

  useEffect(() => {
    const arrayStoragePoints = JSON.parse(localStorage?.getItem('totalPoints')!)

    if (arrayStoragePoints) {
      setTotalPointsArray(arrayStoragePoints)
    }

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
        <h1 className='text-4xl font-bold text-center'>Pega-Letras</h1>
        <ul className='grid grid-cols-3 sm:flex  gap-5'>
          {SelectedLetters.map((letter, i) => (
            <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log(e.currentTarget.id)} id={`${letter.toLocaleUpperCase()}-${i + 1}`} key={letter + i} className={`letterButton w-16 h-20 cursor-default bg-[#373547] border-2 border-main-color p-5 rounded-lg`} type='button' >
              <li>{letter.toUpperCase()}</li>
            </Button>
          ))}
        </ul>
        <span style={{ width: `${time}%` }} className={`h-1 bg-main-color rounded-full transition-all duration-1000`}></span>
        <div className='flex flex-col items-center w-full'>
          {mistake !== '' ? (
            <>
              <span className='mb-5'>{mistake}</span>
              <div className='flex gap-5'>
                <Button  className='border border-main-color px-5 py-1 rounded-md' type='button' onClick={() => {
                  const avatar = searchParams?.get('avatar')
                  router.push(`?avatar=${avatar}`)
                  setCloseMinigame(false);
                  handleSavePoints(totalPoints)
                  window.location.reload()
                }}>Sair</Button>
                <Button  className='bg-main-color shadow-lg shadow-main-color/50 px-5 py-1 rounded-md hover:bg-main-color-hover' type='button' onClick={() => window.location.reload()}>Reiniciar</Button>
              </div>
            </>
          ) : ''}
        </div>
      </div>
    </motion.div >
  );
}

export default MiniGame;
