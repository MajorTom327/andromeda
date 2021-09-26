import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { DateTime } from 'luxon';
import useAllTasks from '/imports/hooks/useAllTasks';
import PreventEmpty from '../components/PreventEmpty';
import TaskView from '../components/ListTask/TaskView';
import Loading from '../components/Loading';

type Props = {
};

const moveBack = (date: DateTime): DateTime => {
  if (date.weekday > 6 || date.weekday === 1) {
    return moveBack(date.minus({ days: 1 }));
  }
  return date.minus({ days: 1 });
};

const moveForward = (date: DateTime): DateTime => {
  if (date.weekday >= 5 && date.weekday < 7) {
    return moveForward(date.plus({ days: 1 }));
  }
  return date.plus({ days: 1 });
}

const Daily: React.FC<Props> = ({ }) => {
  const [date, setDate] = useState(moveBack(DateTime.local()));
  const [taskReady, tasks] = useAllTasks({ date: date.toISODate() });

  const onMoveLeft = () => {
    let current = moveBack(date);

    setDate(current);
  }
  const onMoveRight = () => {
    let current = moveForward(date);

    setDate(current);
  }

  const resetDate = () => {
    setDate(DateTime.local());
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex justify-between">
          <Button className="w-1/4 md:w-1/5" onClick={onMoveLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <button onClick={resetDate} className="text-lg hover:underline">
            {date.toLocaleString(DateTime.DATE_HUGE)}
          </button>

          <Button className="w-1/4 md:w-1/5" onClick={onMoveRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
      </Card>
      {taskReady ? (
        <PreventEmpty count={tasks.count()}>
          {tasks.fetch().map((task) => <TaskView key={task._id} task={task} />)}
        </PreventEmpty>
      ) : (<Loading />)
      }
    </div>);
}

Daily.defaultProps = {
};

export default Daily;