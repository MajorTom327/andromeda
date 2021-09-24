import { useClickAway } from 'ahooks';
import React, { useRef, useState } from 'react';
import useTasks from '../../../hooks/useTasks';
import ListActions from '../ListActions';
import ITask from '/imports/api/types/Task';
import useLongPress from '/imports/hooks/useLongPress';
import useProject from '/imports/hooks/useProject';
import Loading from '../Loading';
import ReactMarkdown from 'react-markdown';
interface Props {
  task: ITask
}

const TaskView: React.FC<Props> = ({ task }) => {
  const [ready, project] = useProject(task.project);
  const { handleRemoveTask } = useTasks();

  const [isOptionEnabled, setIsOptionEnabled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>();

  const longPress = useLongPress(
    () => {
      setIsOptionEnabled(true);
    },
    () => { }, {
    shouldPreventDefault: true,
    delay: 500,
  })

  useClickAway(() => {
    setIsOptionEnabled(false);
  }, ref);

  const handleRemove = () => handleRemoveTask(task._id)

  if (!ready) return <Loading />

  return (
    <ListActions onRemove={handleRemove}>
      <div className="card-body">
        <div className="card-title flex flex-col sm:flex-row sm:justify-between gap-2">
          <h4 className="text-lg">
            {task.label}
          </h4>
          {ready ? <h5 className="badge badge-outline">{project?.name}</h5> : (<div>Chargement en cours...</div>)}
        </div>
        <div className="text-accent markdown">
          <ReactMarkdown>
            {task.detail}
          </ReactMarkdown>
        </div>
      </div>
    </ListActions>
  );
}

TaskView.defaultProps = {
};

export default TaskView;
