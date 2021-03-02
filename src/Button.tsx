import React from 'react';
interface ButtonProps {
  ariaLabel?: string;
  buttonText?: string;
  disabled?: boolean;
  iconName?: string;
  inverse?: boolean;
  role?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({
  ariaLabel = 'Click Here',
  disabled = false,
  inverse = false,
  role = 'button',
  buttonText,
  onClick,
}: ButtonProps) => {
  const customClass = `${inverse ? '-inverse' : ''}`;

  return (
    <button
      aria-label={ariaLabel}
      className={`${customClass}`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      role={role}
    >
      {buttonText && <span className="btn-text">{buttonText}</span>}
    </button>
  );
};
