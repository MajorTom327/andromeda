import React from 'react';
import Input from './BaseInput';
import { TFieldError } from '/imports/types/reactHookFormTypes';

type Props = {
  label: string
  register: any
  placeholder?: string
  error?: TFieldError
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