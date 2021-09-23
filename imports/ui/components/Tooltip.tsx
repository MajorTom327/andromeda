import classNames from 'classnames';
import React from 'react';

type Props = {
  tip: string,
  className?: string,
  direction?: 'top' | 'bottom' | 'left' | 'right',
};

const Tooltip: React.FC<Props> = ({ children, tip, className, direction }) => {
  const classes = classNames('tooltip', {
    'tooltip-top': direction === 'top',
    'tooltip-bottom': direction === 'bottom',
    'tooltip-left': direction === 'left',
    'tooltip-right': direction === 'right',
  }, className)
  return (
    <div data-tip={tip} className={classes}>
      {children}
    </div>
  );
}

Tooltip.defaultProps = {
};

export default Tooltip;