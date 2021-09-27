import { DateTime } from 'luxon';
import { isEmpty, isNil, reject } from 'ramda';
import React, { useEffect, useState } from 'react';
import ITask from '../../../api/types/Task';
import FormSearch from '../FormSearch';
import Loading from '../Loading';
import PreventEmpty from '../PreventEmpty';
import TaskView from './TaskView';
import useAllTasks from '/imports/hooks/useAllTasks';


type Props = {
  date?: string
};

const ListTask: React.FC<Props> = ({ date }) => {
  const [filter, setFilter] = useState<string | undefined>(undefined)
  const [taskReady, tasks] = useAllTasks({ date }, filter);


  const onSearch = (value: string) => {
    if (isEmpty(value)) {
      setFilter(undefined);
      return;
    }
    const pattern = value
    setFilter(pattern);
  }

  if (!taskReady) {
    return (<Loading />)
  }
  return (
    <div className="flex flex-col gap-4">
      <FormSearch onSearch={onSearch} />
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
