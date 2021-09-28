import React from 'react';
import Input from './BaseInput';
import { TFieldError } from '../../../types/reactHookFormTypes';

type Props = {
  label: string
  placeholder?: string
  register: any
  error?: TFieldError
};

const EmailInput: React.FC<Props> = ({ label, register, error, placeholder }) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      register={register}
      error={error}
      type="email"
    />
  );
}

EmailInput.defaultProps = {
};

export default EmailInput;