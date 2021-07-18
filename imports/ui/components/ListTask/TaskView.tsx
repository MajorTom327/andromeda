import React from 'react';
import ITask from '/imports/api/types/Task';
import useProject from '/imports/hooks/useProject';

type Props = {
  task: ITask
};

const TaskView: React.FC<Props> = ({ task }) => {
  const [ready, project] = useProject(task.project);

  return (
    <div className="p-4 hover:shadow-lg rounded bg-gray-500">
      <div className="flex justify-between">
        <h4 className="text-lg">
          {task.label}
        </h4>
        {ready ? <h5 className="p-2 px-4 rounded-full bg-gray-600 select-none">{project?.name}</h5> : (<div>Chargement en cours...</div>)}

      </div>

      <p className="text-gray-400">
        {task.detail}
      </p>
    </div>
  );
}

TaskView.defaultProps = {
};

export default TaskView;