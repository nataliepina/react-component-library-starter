import React from 'react';

interface TextAreaProps {
  assistiveText?: string;
  disabled?: boolean;
  hasError?: boolean;
  hasWarning?: boolean;
  heightModifier?: number;
  label: string;
  modifiers?: string[];
  name: string;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
  readOnly?: boolean;
  value?: string;
  placeHolder?: string;
}

export const TextArea = ({
  disabled = false,
  readOnly = false,
  hasError = false,
  hasWarning = false,
  assistiveText = '',
  heightModifier,
  name,
  onChange,
  label = '',
  ...rest
}: TextAreaProps) => {
  return (
    <div>
      <div>
        <textarea
          {...rest}
          className={'textarea'}
          id={name}
          name={name}
          disabled={disabled}
          onChange={(!readOnly && !disabled && onChange) || undefined}
        ></textarea>
      </div>
    </div>
  );
};
