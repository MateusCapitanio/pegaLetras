import React, { MouseEventHandler, ReactNode } from 'react';

interface buttonProps {
  id?: string
  children: ReactNode
  className: string
  type: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  value?: string
}

const Button = ({id, children, className, type, onClick, disabled, value}: buttonProps) => {
  return (
    <div>
      <button id={id} value={value} className={className} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
