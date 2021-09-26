import { DateTime } from 'luxon';
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
  const [taskReady, fetchTasks] = useAllTasks({ date })
  const [originalTasks, setOriginalTasks] = useState<ITask[]>([])
  const [allTasks, setAllTasks] = useState<ITask[]>([])

  useEffect(() => {
    if (taskReady) {
      const tasks = fetchTasks.fetch()
      setOriginalTasks(tasks);
      setAllTasks(tasks);
    }
  }, [taskReady])

  const onSearch = (value: string) => {
    const pattern = new RegExp(`.*${value}.*`, 'gi')
    const _tasks = originalTasks.filter(({ label, detail }) => {
      return label.match(pattern) || detail.match(pattern)
    })
    setAllTasks(_tasks);
  }

  if (!taskReady) {
    return (<Loading />)
  }
  return (
    <div className="flex flex-col gap-4">
      <PreventEmpty count={originalTasks.length}>
        <FormSearch onSearch={onSearch} />
        {allTasks.map((task) => <TaskView key={task._id} task={task} />)}
      </PreventEmpty>

    </div>
  );
}

ListTask.defaultProps = {
  date: DateTime.local().toISODate()
};

export default ListTask;
