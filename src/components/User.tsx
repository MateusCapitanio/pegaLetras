import React, { useState } from 'react';
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
}

const User = ({ size, className, iconClassName }: UserInterface) => {
  const searchParams = useSearchParams();

  const handleGetImage: any = () => {
    const selectedAvatar = searchParams?.get('avatar');

    switch (selectedAvatar) {
      case 'angel':
        return angel;
      case 'buster':
        return buster;
      case 'chester':
        return chester;
      case'mimi':
        return mimi;
      case 'precious':
        return precious;
      case 'zoe':
        return zoe;
      default:
        return angel;
    }
  }

  return (
    <div className='relative'>
        <Image className={className} alt='avatar' src={handleGetImage()} />
        <FaPencil className={iconClassName} size={size} />
        {/* <button>teste</button> */}
    </div>
  );
}

export default User;
