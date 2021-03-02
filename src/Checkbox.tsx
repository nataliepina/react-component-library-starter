import React from 'react';
interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent) => void;
  value?: string;
}

export const Checkbox = ({
  checked,
  disabled,
  label = '',
  name,
  onChange,
  value,
}: CheckboxProps) => {
  const onChangeAction = disabled ? undefined : onChange;

  return (
    <label>
      <input
        className={'checkbox-input'}
        type={'checkbox'}
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChangeAction}
        value={value}
      />
    </label>
  );
};
