import React from 'react';

type Props = {
  onClick: () => void
};

const FloatingButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div
      className="fixed right-4 bottom-8 h-16 w-16 rounded-full flex justify-center bg-gray-500 hover:bg-gray-600 select-none shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col justify-center text-4xl align-top">
        {children}
      </div>
    </div>);
}

FloatingButton.defaultProps = {
};

export default FloatingButton;