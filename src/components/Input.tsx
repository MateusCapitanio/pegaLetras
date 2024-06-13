import React, { ChangeEvent } from 'react';

interface inputProps {
  id: string
  type: string
  className: string
  placeholder?: string
  maxLength?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({id, type, className, placeholder, maxLength, onChange}: inputProps) => {
  return (
    <div>
      <input onChange={onChange} maxLength={maxLength} placeholder={placeholder} id={id} type={type} className={className} />
    </div>
  );
}

export default Input;
