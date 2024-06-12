import React from 'react';
import Image from 'next/image';

// icons
import { FaPencil } from "react-icons/fa6";

// Avatars
import angel from '/public/avatars/angel.svg'
import buster from '/public/avatars/buster.svg'
import chester from '/public/avatars/chester.svg'
import mimi from '/public/avatars/mimi.svg'
import precious from '/public/avatars/precious.svg'
import zoe from '/public/avatars/zoe.svg'

interface UserInterface {
  size: number;
  className: string;
}

const User = ({ size, className }: UserInterface) => {
  return (
    <div className='relative'>
      <Image className={className} alt='avatar' src={angel} />
      <FaPencil className='absolute bottom-0 right-1' size={size} />
    </div>
  );
}

export default User;
