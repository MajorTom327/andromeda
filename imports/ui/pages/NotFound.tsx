import React from 'react';

type Props = {
};

const NotFound: React.FC<Props> = ({ }) => {
  return (<div className="flex justify-center">
    <div className="container flex flex-col gap-4 my-4 ">
      <div className="flex justify-center">
        <h1 className="text-6xl">Page introuvable</h1>
      </div>
      <div className="flex justify-center ">
        <img className="w-1/3" src='img/notfound.svg' />
      </div>
    </div>
  </div>);
}

NotFound.defaultProps = {
};

export default NotFound;