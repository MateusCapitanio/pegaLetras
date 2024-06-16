import React, { Dispatch, KeyboardEvent, SetStateAction, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import Button from './Button';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Howl, Howler } from 'howler'

interface propsMinigame {
  setCloseMinigame: Dispatch<SetStateAction<boolean>>
}

const MiniGame = ({ setCloseMinigame }: propsMinigame) => {
  const [time, setTime] = useState(100);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
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

  const handleRemoveListener = () => {
    setTimeout(() => {
      window.removeEventListener('keydown', handleGetKeydown);
    }, 99000);
  }

  const handlePlayErrorClick = () => {
    const backgroundMusic = new Howl({
      src: ['/music/fail.mp3'],
      volume: 0.2
    }) 

    return backgroundMusic.play()
  }

  const handleSavePoints = (totalPoints: number) => {
    if (totalPoints != 0) {
      totalPointsArray.push(totalPoints)
    }

    const arrayOrder = totalPointsArray.sort((a, b) => b - a)
    localStorage.setItem('totalPoints', JSON.stringify(arrayOrder))
  }

  const handleClickKey = () => {
    const keyClicked = new Howl({
      src: ['/music/keyboardClick.wav'],
      volume: 1,
    });
    keyClicked.play()
  }

  const resetColorLetters = () => {
    const letterButton = document.querySelectorAll('.letterButton');
    letterButton.forEach(element => {
      element.classList.replace('bg-main-color', 'bg-[#373547]')
    })
  }

  const handleGetKeydown: any = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      return
    } else {
      positionLetter += 1
      handleClickKey()
      const letter = document.getElementById(`${e.key.toUpperCase()}-${positionLetter}`);
      if (letter) {
        setTotalPoints(prevState => prevState + 10)
        if (positionLetter === 6) {
          positionLetter = 0
          setSelectedLetters(handleShuffleArray())
        }
      } else {
        handlePlayErrorClick()
        positionLetter = 0
        setMistake('Ops... Você errou!')
        window.removeEventListener('keydown', handleGetKeydown);
        console.log('ERROU!')
      }
      if (letter) {
        letter.classList.replace('bg-[#373547]', 'bg-main-color')
      }
    }
  }

  useEffect(() => {
    const arrayStoragePoints = JSON.parse(localStorage?.getItem('totalPoints')!)

    if (arrayStoragePoints) {
      setTotalPointsArray(arrayStoragePoints)
    }

    setSelectedLetters(handleShuffleArray())

    return window.addEventListener('keydown', handleGetKeydown);

  }, []);

  useEffect(() => {
    const intervalTimeout = setInterval(() => {
      setTime(prevState => Math.max(prevState - 0.5, 0))
    }, 1000)
    if (time <= 0) {
      return () => clearInterval(intervalTimeout)
    }
  }, []);

  useEffect(() => {
    resetColorLetters()
  }, [selectedLetters]);

  useEffect(() => {
    handleRemoveListener()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='fixed flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-lg z-[1000]'>
      <div className='flex flex-col bg-[#0B0B11] bg-opacity-80 border border-main-color rounded-lg gap-5 py-5 px-10'>
        <h1 className='text-4xl font-bold text-center'>Pega-Letras</h1>
        <ul className='grid grid-cols-3 sm:flex  gap-5'>
          {selectedLetters.map((letter, i) => (
            <Button disabled={time === 0} onClick={(e: React.MouseEvent<HTMLButtonElement>) => console.log(e.currentTarget.id)} id={`${letter.toLocaleUpperCase()}-${i + 1}`} key={letter + i} className={`letterButton w-16 h-20 cursor-default bg-[#373547] border-2 border-main-color p-5 rounded-lg`} type='button' >
              <li>{letter.toUpperCase()}</li>
            </Button>
          ))}
        </ul>
        <span style={{ width: `${time}%` }} className={`h-1 bg-main-color rounded-full transition-all duration-1000`}></span>
        <div className='flex flex-col items-center w-full'>
          {mistake !== '' && (
            <>
              <span className='mb-5'>{mistake}</span>
              <div className='flex gap-5'>
                <Button className='border border-main-color px-5 py-1 rounded-md' type='button' onClick={() => {
                  const avatar = searchParams?.get('avatar')
                  router.push(`?avatar=${avatar}`)
                  setCloseMinigame(false);
                  handleSavePoints(totalPoints)
                  window.location.reload()
                }}>Finalizar</Button>
                <Button className='bg-main-color shadow-lg shadow-main-color/50 px-5 py-1 rounded-md hover:bg-main-color-hover' type='button' onClick={(e: any) => {
                  e.preventDefault()
                  handleRemoveListener()
                  window.addEventListener('keydown', handleGetKeydown);
                  setSelectedLetters(handleShuffleArray())
                  setTime(100)
                  setMistake('')
                  setTotalPoints(0)
                }}>Reiniciar</Button>
              </div>
            </>
          )}
          {(time === 0 && mistake === '') && (
            <>
              <span className='mb-5'>Ops... o tempo acabou!</span>
              <div className='flex gap-5'>
                <Button className='border border-main-color px-5 py-1 rounded-md' type='button' onClick={() => {
                  const avatar = searchParams?.get('avatar')
                  router.push(`?avatar=${avatar}`)
                  setCloseMinigame(false);
                  handleSavePoints(totalPoints)
                  window.location.reload()
                }}>Finalizar</Button>
                <Button className='bg-main-color shadow-lg shadow-main-color/50 px-5 py-1 rounded-md hover:bg-main-color-hover' type='button' onClick={(e: any) => {
                  e.preventDefault()
                  handleRemoveListener()
                  window.addEventListener('keydown', handleGetKeydown);
                  setSelectedLetters(handleShuffleArray())
                  setTime(100)
                  setMistake('')
                  setTotalPoints(0)
                }}>Reiniciar</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div >
  );
}

export default MiniGame;
