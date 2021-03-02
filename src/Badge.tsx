import React from 'react';

interface BadgeProps {
  ariaLabel?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, ariaLabel = '' }) => {
  if (!children) {
    return null;
  }

  return (
    <span className={'badge'} aria-label={ariaLabel}>
      {children}
    </span>
  );
};
