import React from 'react';

type Props = {
};

const Loading: React.FC<Props> = ({ }) => {
  return (
    <div className="w-full py-12 z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
}

Loading.defaultProps = {
};

export default Loading;