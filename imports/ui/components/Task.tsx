import React, { useRef, useState } from 'react';
import { formatDateFR } from '../../helpers/date';
import useLongPress from '/imports/hooks/useLongPress';
import { useClickAway } from 'ahooks';
import ListActions from './ListActions';
import useTasks from '/imports/hooks/useTasks';
import ITask from '../../api/types/Task';
interface Props {
  task: ITask
}

const Task = ({task}: Props) => {
  const [isOptionEnabled, setIsOptionEnabled] = useState<boolean>(false);
  const {handleRemoveTask} = useTasks();
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
  const handleCancel = () => setIsOptionEnabled(false);

  return (
    <div className="flex drawer drawer-end" ref={ref}>
      <div className="flex-grow card bordered bg-neutral drawer-content"  {...longPress}>
        <div className="card-body">
          <div className="card-title flex flex-col sm:flex-row sm:justify-between gap-2">
            <h4 className="text-lg">
              {task.label}
            </h4>
            <h5 className="badge text-purple-400">{formatDateFR(task.date)}</h5>

          </div>

          <div className="text-accent" dangerouslySetInnerHTML={{__html: task.detail.replace(/\n/g, '<br />')}}></div>

        </div>

      </div>
      {isOptionEnabled && (<ListActions onRemove={handleRemove} onCancel={handleCancel}/>)}
    </div>
  )
}

export default Task
