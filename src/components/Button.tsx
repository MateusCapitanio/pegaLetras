import React, { ReactNode } from 'react';

interface buttonProps {
  children: ReactNode
  className: string
  type: 'submit' | 'reset' | 'button'
  onClick?: () => void
  disabled?: boolean
}

const Button = ({children, className, type, onClick, disabled}: buttonProps) => {
  return (
    <div>
      <button className={className} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
