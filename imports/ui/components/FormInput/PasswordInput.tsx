import React from 'react';
import Input from './BaseInput';

type Props = {
  label: string
  register: any
  placeholder?: string
  error?: boolean
};

const PasswordInput: React.FC<Props> = ({ label, register, error, placeholder }) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      register={register}
      error={error}
      type="password"
    />
  );
}

PasswordInput.defaultProps = {
};

export default PasswordInput;