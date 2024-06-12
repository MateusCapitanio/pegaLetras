import React from 'react';
import "../app/globals.css";
import User from '@/components/User';
import Input from '@/components/Input';

const Login = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex flex-col justify-center bg-transparent backdrop-blur-lg border border-main-color shadow-lg shadow-main-color rounded-lg border-opacity-20 w-[350px] h-[500px]'>
        <div className='bg-red-500 inline-block'>
          <User className='w-52 bg-black rounded-full border-8 border-main-color' size={50} />
        </div>
        <label htmlFor='inputUsername'>
          <Input id='inputUsername' className='' placeholder='Digite seu nome' type='text' />
        </label>
      </div>
    </div>
  );
}

export default Login;
