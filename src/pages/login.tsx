import React, { useState } from 'react';
import "../app/globals.css";
import User from '@/components/User';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { motion } from 'framer-motion'

const Login = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex flex-col p-5 justify-evenly items-center bg-transparent backdrop-blur-lg border border-main-color shadow-lg shadow-main-color rounded-lg border-opacity-20 w-[350px] h-[500px]'>
        <div className='inline-block'>
          <button>
            <User iconClassName='bg-black p-2 rounded-full border border-4 border-main-color absolute bottom-2 right-5' className='w-52 bg-black rounded-full border-8 border-main-color' size={50} />
          </button>
        </div>
        <label htmlFor='inputUsername'>
          <Input maxLength={15} id='inputUsername' className='max-w-64 bg-transparent border border-main-color border-opacity-40 p-2 outline-none rounded-md' placeholder='Digite seu nome' type='text' />
        </label>
        <Button className='bg-main-color shadow-lg shadow-main-color/50 px-5 py-1 rounded-md' type='submit'>Entrar</Button>
      </div>
    </div>
  );
}

export default Login;
