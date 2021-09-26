import React from 'react';

type Props = {
  onClick: () => void
};


const FloatingButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="fixed bottom-8 right-8 flex justify-end z-50">
      <button className="shadow-2xl  btn btn-circle btn-lg text-4xl bordered border-base-content" onClick={onClick}>
        {children}
      </button>

    </div>
  );
}

FloatingButton.defaultProps = {
};

export default FloatingButton;