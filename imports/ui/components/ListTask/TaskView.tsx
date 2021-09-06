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
    <div className="flex drawer drawer-end" ref={ref}>
      <div className="flex-grow card bordered bg-neutral drawer-content" {...longPress}>
        <div className="card-body">
          <div className="card-title flex flex-col sm:flex-row sm:justify-between gap-2">
            <h4 className="text-lg">
              {task.label}
            </h4>
            {ready ? <h5 className="badge badge-outline">{project?.name}</h5> : (<div>Chargement en cours...</div>)}

          </div>

          <p className="text-accent" dangerouslySetInnerHTML={{__html: task.detail.replace(/\n/g, '<br />')}}>
          </p>

        </div>
      </div>
      {isOptionEnabled && (
        <div className="drawer-side">
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a className="flex gap-4 text-error" onClick={() => Meteor.call('tasks.remove', task._id)} >
                <FontAwesomeIcon icon={faTrash} />
                Supprimer
              </a>
            </li>
            <li>
              <a className="flex gap-4" onClick={() => setIsOptionEnabled(false)} >
                <FontAwesomeIcon icon={faTimes} />
                Annuler
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

TaskView.defaultProps = {
};

export default TaskView;
