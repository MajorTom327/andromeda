import classNames from 'classnames';
import React from 'react';


type Props = {
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames('card bordered shadow-lg overflow-visible', className)}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
};

export default Card;