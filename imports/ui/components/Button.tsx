import classNames from 'classnames';
import React from 'react';


type Props = {
  type?: 'default' | 'danger' | 'success' | 'info',
  onClick: () => void
};

const Button: React.FC<Props> = ({ children, onClick, type }) => {

  const classes = classNames(
    'btn',
    {
      '': type === 'default',
      'btn-error': type === 'danger',
      'btn-success': type === 'success',
      'btn-info': type === 'info',
    })
  return (<button className={classes} onClick={onClick}>{children}</button>);
}

Button.defaultProps = {
  type: 'default'
};

export default Button;