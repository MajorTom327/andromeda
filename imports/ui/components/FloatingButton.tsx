import React from 'react';

type Props = {
  onClick: () => void
};


const FloatingButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="shadow-2xl fixed bottom-8 right-4 btn btn-circle btn-lg text-4xl bordered border-base-content" onClick={onClick}>
      {children}
    </button>
  );
}

FloatingButton.defaultProps = {
};

export default FloatingButton;