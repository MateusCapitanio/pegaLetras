'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

// icons
import { FaPencil } from "react-icons/fa6";

// Avatars
import angel from '/public/avatars/angel.svg'
import buster from '/public/avatars/buster.svg'
import chester from '/public/avatars/chester.svg'
import mimi from '/public/avatars/mimi.svg'
import precious from '/public/avatars/precious.svg'
import zoe from '/public/avatars/zoe.svg'
import { useSearchParams } from 'next/navigation';

interface UserInterface {
  size: number;
  className: string;
  iconClassName: string;
  renderPencil: boolean;
}

const User = ({ size, className, iconClassName, renderPencil }: UserInterface) => {
  const [userSelected, setUserSelected] = useState('');
  const searchParams = useSearchParams();

  const handleGetImage: any = (userSelected: string) => {
    const selectedAvatar = searchParams?.get('avatar');

    if ((selectedAvatar === 'angel') || (userSelected === 'angel')) {
      return angel
    } else if ((selectedAvatar === 'buster') || (userSelected === 'buster')) {
      return buster
    } else if ((selectedAvatar === 'chester') || (userSelected === 'chester')) {
      return chester
    } else if ((selectedAvatar === 'mimi') || (userSelected === 'mimi')) {
      return mimi
    } else if ((selectedAvatar === 'precious') || (userSelected === 'precious')) {
      return precious
    } else if ((selectedAvatar === 'zoe') || (userSelected === 'zoe')) {
      return zoe
    }
    return angel
  }

  useEffect(() => {
    const avatarStorage = JSON.parse(localStorage?.getItem('avatar')!)

    if (avatarStorage) {
      setUserSelected(avatarStorage)
    }
    
  }, []);

  return (
    <div className='relative'>
        <Image className={className} alt='avatar' src={handleGetImage(userSelected)} />
        {renderPencil && <FaPencil className={iconClassName} size={size} />}
    </div>
  );
}

export default User;
