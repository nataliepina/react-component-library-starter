import React from 'react';
interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  value?: string;
}

export const Switch = ({ disabled, onChange, ...rest }: SwitchProps) => {
  const onChangeAction = !disabled ? onChange : undefined;

  return (
    <label className="switch">
      <input
        className={'switch-input'}
        type={'checkbox'}
        onChange={onChangeAction}
        disabled={disabled}
        {...rest}
      />
    </label>
  );
};
