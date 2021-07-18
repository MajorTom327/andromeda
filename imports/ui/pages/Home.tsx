import React from 'react';
import { DateTime } from 'luxon';

type Props = {
};

const Home: React.FC<Props> = ({ }) => {

  return (
    <div>
      <div className="flex justify-center">
        <div className="container flex justify-between text-2xl font-semibold p-4 bg-gray-600 rounded">
          <div>Dashboard</div>
          <div>{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</div>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
};

export default Home;