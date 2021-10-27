import classNames from 'classnames';
import React from 'react';


type Props = {
  className?: string;
  onMouseDown?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onMouseUp?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
};

const Card: React.FC<Props> = ({ children, className,
  onMouseDown,
  onTouchStart,
  onMouseUp,
  onMouseLeave,
  onTouchEnd,
}) => {
  return (
    <div
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchEnd={onTouchEnd}
      className={classNames('card bordered overflow-visible', className)}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
};

export default Card;
