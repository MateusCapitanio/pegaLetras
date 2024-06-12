import React from 'react';

interface inputProps {
  id: string
  type: string
  className: string
  placeholder?: string
}

const Input = ({id, type, className, placeholder}: inputProps) => {
  return (
    <div>
      <input placeholder={placeholder} id={id} type={type} className={className} />
    </div>
  );
}

export default Input;
