import React from 'react';
import useAllTasks from '/imports/hooks/useAllTasks';
import { DateTime } from 'luxon';
import Loading from '../Loading';
import TaskView from './TaskView';
import PreventEmpty from '../PreventEmpty';


type Props = {
  date?: string
};

const ListTask: React.FC<Props> = ({ date }) => {
  const [taskReady, tasks] = useAllTasks({ date })

  if (!taskReady) {
    return (<Loading />)
  }
  return (
    <div className="flex flex-col gap-4">
      <PreventEmpty count={tasks.length}>
        {tasks.map((task) => <TaskView key={task._id} task={task} />)}
      </PreventEmpty>

    </div>
  );
}

ListTask.defaultProps = {
  date: DateTime.local().toISODate()
};

export default ListTask;