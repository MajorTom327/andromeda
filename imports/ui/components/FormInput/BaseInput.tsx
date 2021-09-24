import classNames from 'classnames';
import { defaultTo } from 'ramda';
import React from 'react';

type Props = {
  label: string
  placeholder?: string
  register: any
  error?: boolean,
  type: string
};

const Input: React.FC<Props> = ({ label, register, placeholder, error, type }) => {
  const cleanPlaceholder = defaultTo(label, placeholder);

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={cleanPlaceholder}
        className={classNames("input input-bordered", { 'input-error': error })}
        {...register} />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">Ce champs est requis</span>
        </label>
      )}
    </div>
  );
}

Input.defaultProps = {
};

export default Input;