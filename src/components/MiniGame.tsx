import React, { useEffect, useState } from 'react';

const MiniGame = () => {
  const [time, setTime] = useState(100);
  const [mainColor, setMainColor] = useState<string | null>(null)

  useEffect(() => {
    const intervalTimeout = setInterval(() => {
      setTime(prevState => Math.max(prevState - 0.5, 0))
    }, 1000)
    if (time <= 0) {
      return () => clearInterval(intervalTimeout)
    }
  }, []);

  return (
    <div className='absolute flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-lg'>
      <div className='flex flex-col bg-[#0B0B11] bg-opacity-80 border border-main-color rounded-lg gap-5 py-5 px-10'>
        <ul className='grid grid-cols-3 sm:flex  gap-5'>
          <li onClick={() => setMainColor('bg-main-color')} className={`${mainColor ? mainColor : 'bg-[#625f7b]'} border-2 border-main-color p-5 ${mainColor === null ? 'opacity-50' : 'opacity-100'} rounded-lg`}>A</li>
          <li className={`${mainColor ? mainColor : 'bg-[#625f7b]'} border-2 border-main-color p-5 ${mainColor === null ? 'opacity-50' : 'opacity-100'} rounded-lg`}>B</li>
          <li className={`${mainColor ? mainColor : 'bg-[#625f7b]'} border-2 border-main-color p-5 ${mainColor === null ? 'opacity-50' : 'opacity-100'} rounded-lg`}>C</li>
          <li className={`${mainColor ? mainColor : 'bg-[#625f7b]'} border-2 border-main-color p-5 ${mainColor === null ? 'opacity-50' : 'opacity-100'} rounded-lg`}>D</li>
          <li className={`${mainColor ? mainColor : 'bg-[#625f7b]'} border-2 border-main-color p-5 ${mainColor === null ? 'opacity-50' : 'opacity-100'} rounded-lg`}>E</li>
          <li className={`${mainColor ? mainColor : 'bg-[#625f7b]'} border-2 border-main-color p-5 ${mainColor === null ? 'opacity-50' : 'opacity-100'} rounded-lg`}>F</li>
        </ul>
        <span style={{ width: `${time}%` }} className={`h-1 bg-main-color rounded-full transition-all duration-1000`}></span>
      </div>
    </div>
  );
}

export default MiniGame;
