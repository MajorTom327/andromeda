import React from 'react';
import Input from './BaseInput';

type Props = {
  label: string
  placeholder?: string
  register: any
  error?: boolean
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