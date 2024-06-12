import React from 'react';

interface buttonProps {
  text: string
  className: string
  type: 'submit' | 'reset' | 'button'
  onClick?: () => void
  disabled?: boolean
}

const Button = ({text, className, type, onClick, disabled}: buttonProps) => {
  return (
    <div>
      <button className={className} type={type} disabled={disabled} onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;
