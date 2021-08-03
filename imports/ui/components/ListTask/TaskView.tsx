import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickAway } from 'ahooks';
import { Meteor } from 'meteor/meteor';
import React, { useRef, useState } from 'react';
import ITask from '/imports/api/types/Task';
import useLongPress from '/imports/hooks/useLongPress';
import useProject from '/imports/hooks/useProject';

type Props = {
  task: ITask
};

const TaskView: React.FC<Props> = ({ task }) => {
  const [ready, project] = useProject(task.project);

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

  return (
    <div className="flex" ref={ref}>
      <div className="flex-grow p-4 hover:shadow-lg bg-gray-500" {...longPress}>
        <div className="flex justify-between">
          <h4 className="text-lg">
            {task.label}
          </h4>
          {ready ? <h5 className="p-2 px-4 rounded-full bg-gray-600">{project?.name}</h5> : (<div>Chargement en cours...</div>)}

        </div>

        <p className="text-gray-400">
          {task.detail}
        </p>
      </div>
      {isOptionEnabled && (
        <>
          <div className="bg-gray-800 w-24 text-2xl" onClick={() => setIsOptionEnabled(false)}>
            <div className="flex h-full flex-col justify-center">
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          </div>
          <div className="bg-red-500 w-24 text-2xl" onClick={() => Meteor.call('tasks.remove', task._id)}>
            <div className="flex h-full flex-col justify-center">
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

TaskView.defaultProps = {
};

export default TaskView;