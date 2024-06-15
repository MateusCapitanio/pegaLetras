import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion'
import Button from './Button';

interface propsModalRules {
  closeModalRules: Dispatch<SetStateAction<boolean>>
}

const ModalRules = ({closeModalRules}: propsModalRules) => {
  return (
    <div className='fixed flex justify-center items-center bg-black bg-opacity-80 w-screen h-screen z-[1000]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='bg-black bg-opacity-50 backdrop-blur-lg border border-main-color rounded-lg shadow-lg shadow-main-color/50 max-w-[500px] max-h-[500px] sm:max-h-[800px]  opacity-100 p-5 mx-5 overflow-y-auto'>
        <div className='flex justify-end'>
          <Button className='' type='button' onClick={() => closeModalRules(false)}>x</Button>
        </div>
        <h1 className='text-3xl font-bold mb-5'>Como o game funciona:</h1>
        <ul className='flex flex-col gap-5'>
          <li> - Ao iniciar o game, o jogador deve pressionar as teclas que aparecerem para ele na ordem correta;</li>
          <li> - Caso aperte uma tecla errada ou fora de ordem, o jogo termina;</li>
          <li> - Caso o tempo total de 100 segundos se esgote, o jogo termina;</li>
          <li> - Sempre que você finaliza uma sequência dentro do tempo outra é gerada, quanto mais sequências você fizer, mais pontos você ganha, cada acerto vale 10 pontos.</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default ModalRules;
