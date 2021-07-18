import React from 'react';

type Props = {
  count: number
};

const PreventEmpty: React.FC<Props> = ({ count, children }) => {
  if (count === 0) {
    return (
      <div className="flex justify-center">
        <img className="w-1/2" src="/img/empty.svg" />
      </div>
    );
  } else {
    return <>{children}</>

  }
}

PreventEmpty.defaultProps = {
  count: 0
};

export default PreventEmpty;