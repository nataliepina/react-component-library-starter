import React from 'react';

interface ToolTipProps {
  content?: React.ReactNode;
  modifier?: 'start' | 'end';
  placement?: 'top' | 'right' | 'bottom' | 'left';
  role?: string;
}

export const ToolTip: React.FC<ToolTipProps> = ({
  content,
  modifier,
  placement = 'top',
  role = 'tooltip',
  children,
}) => {
  const positioning = modifier ? `${placement}-${modifier}` : placement;

  if (!children && !content) {
    return null;
  }

  return (
    <div className={`tooltip-${positioning}`} role={role}>
      <div className={'tooltip-content'}>{content ? content : children}</div>
      <div className={'tooltip-marker'} />
    </div>
  );
};
