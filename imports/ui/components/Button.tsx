import classNames from 'classnames';
import React from 'react';


type Props = {
  type?: 'default' | 'danger' | 'success' | 'info',
  onClick: () => void
};

const Button: React.FC<Props> = ({ children, onClick, type }) => {

  const classes = classNames(
    'border rounded px-4 py-2 text-center text-white text-semibold select-none',
    "outline-none focus:ring",
    {
      'bg-gray-500': type === 'default',
      'bg-red-500 hover:bg-red-600 border-red-600': type === 'danger',
      'bg-green-600 hover:bg-green-700 border-green-700': type === 'success',
      'bg-blue-600 hover:bg-blue-700 border-blue-700': type === 'info',
    })
  return (<button className={classes} onClick={onClick}>{children}</button>);
}

Button.defaultProps = {
  type: 'default'
};

export default Button;