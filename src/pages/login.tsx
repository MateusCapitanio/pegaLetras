import React, { ChangeEvent, useEffect, useState } from 'react';
import "../app/globals.css";
import User from '@/components/User';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Avatars from '@/components/Avatars';
import { useRouter } from 'next/router'

const Login = () => {
  const [openAvatars, setOpenAvatars] = useState(false);
  const [logged, setLogged] = useState(false);
  const [disabledLoginButton, setDisabledLoginButton] = useState(true);
  const [username, setUsername] = useState('');


  const router = useRouter();

  useEffect(() => {
    const logged = localStorage?.getItem('userLogged');

    if (logged) {
      router.push('/');
      setLogged(true);
      return;
    }

  }, []);

  return (
    !logged && (
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='flex flex-col p-5 justify-evenly items-center bg-transparent backdrop-blur-lg border border-main-color shadow-lg shadow-main-color rounded-lg border-opacity-20 w-[350px] h-[500px]'>
          <div className='inline-block'>
            <button onClick={() => setOpenAvatars(!openAvatars)}>
              <User renderPencil iconClassName='bg-black p-2 rounded-full border border-4 border-main-color absolute bottom-2 right-5' className='w-52 bg-black rounded-full border-8 border-main-color' size={50} />
            </button>
          </div>
          <label htmlFor='inputUsername'>
            <Input onChange={(e) => {
              const usernameTarget = e.target.value
              setUsername(usernameTarget)
              if (usernameTarget.length >= 4) {
                setDisabledLoginButton(false)
              } else {
                setDisabledLoginButton(true)
              }
            }} maxLength={15} id='inputUsername' className='max-w-64 bg-transparent border border-main-color border-opacity-40 p-2 outline-none rounded-md ' placeholder='Digite seu nome' type='text' />
          </label>
          <Button className='bg-main-color shadow-lg shadow-main-color/50 px-5 py-1 rounded-md disabled:bg-main-color-disabled disabled:opacity-50 disabled:cursor-not-allowed hover:bg-main-color-hover'       disabled={disabledLoginButton}
            type='submit'
            onClick={() => {
              localStorage.setItem('userLogged', JSON.stringify(username));
              router.push('/');
              setLogged(true);
            }}
          >
            Entrar
          </Button>
        </div>
        {openAvatars && <Avatars setCloseModal={setOpenAvatars} />}
      </div>
    )
  );
}

export default Login;
