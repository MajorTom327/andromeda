import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
import withModal from '../../hoc/withModal';
import Container from '../components/Container';
import ListTask from '../components/ListTask';
import CreateTask from '../forms/CreateTask';

type Props = {
};

const Home: React.FC<Props> = ({ }) => {
  const [currentDate, setCurrentDate] = useState(DateTime.local())

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDate(DateTime.local());
  }, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <Container>
      <div className="alert">
        <div className="w-full flex justify-between text-2xl font-semibold">
          <div>Dashboard</div>
          <div>{currentDate.toLocaleString(DateTime.DATE_SHORT)}</div>
        </div>
      </div>
      <div>
        <ListTask date={currentDate.toISODate()}/>
      </div>
    </Container>
  );
}

Home.defaultProps = {
};

export default withModal(CreateTask)(Home);
