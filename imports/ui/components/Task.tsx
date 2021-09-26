import React from 'react';
import ITask from '../../api/types/Task';
import { formatDateFR } from '../../helpers/date';
import ListActions from './ListActions';
import useTasks from '/imports/hooks/useTasks';
import ReactMarkdown from 'react-markdown'
interface Props {
  task: ITask
}

const Task = ({ task }: Props) => {
  const { handleRemoveTask } = useTasks();

  const handleRemove = () => handleRemoveTask(task._id)

  return (
    <ListActions onRemove={handleRemove}>
      <div className="card-title flex flex-col sm:flex-row sm:justify-between gap-2">
        <h4 className="text-lg">
          {task.label}
        </h4>
        <h5 className="badge badge-outline">{formatDateFR(task.date)}</h5>

      </div>


      <div className="text-accent markdown">
        <ReactMarkdown>
          {task.detail}
        </ReactMarkdown>
      </div>
    </ListActions>
  )
}

export default Task
