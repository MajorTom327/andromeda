import classNames from 'classnames';
import React from 'react';


type Props = {
  type?: 'default' | 'danger' | 'success' | 'info' | 'shadow',
  onClick?: () => void,
  className?: string,
};

const Button: React.FC<Props> = ({ children, onClick, type, className }) => {

  const classes = classNames(
    'btn',
    {
      '': type === 'shadow',
      'bg-base-300': type === 'default',
      'btn-error': type === 'danger',
      'btn-success': type === 'success',
      'btn-info': type === 'info',
    },
    className
  )
  return (<button className={classes} onClick={onClick}>{children}</button>);
}

Button.defaultProps = {
  type: 'default'
};

export default Button;