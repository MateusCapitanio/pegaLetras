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

interface UserInterface {
  size: number;
  className: string;
  iconClassName: string;
}

const User = ({ size, className, iconClassName }: UserInterface) => {
  const [openAvatars, setOpenAvatars] = useState(false);

  return (
    <div className='relative'>
      {openAvatars && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='bg-red-500 w-[500px] h-[500px]'
        >
          teste
        </motion.div>
      )}
        <Image className={className} alt='avatar' src={angel} />
        <FaPencil className={iconClassName} size={size} />
        {/* <button>teste</button> */}
    </div>
  );
}

export default User;
