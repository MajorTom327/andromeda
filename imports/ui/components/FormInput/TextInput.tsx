import React from 'react';
import Input from './BaseInput';

type Props = {
  label: string
  placeholder?: string
  register: any
  error?: boolean
};

const TextInput: React.FC<Props> = ({ label, register, error, placeholder }) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      register={register}
      error={error}
      type="text"
    />
  );
}

TextInput.defaultProps = {
};

export default TextInput;