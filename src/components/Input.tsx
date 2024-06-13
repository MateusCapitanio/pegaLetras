import React from 'react';

interface inputProps {
  id: string
  type: string
  className: string
  placeholder?: string
  maxLength?: number
}

const Input = ({id, type, className, placeholder, maxLength}: inputProps) => {
  return (
    <div>
      <input maxLength={maxLength} placeholder={placeholder} id={id} type={type} className={className} />
    </div>
  );
}

export default Input;
