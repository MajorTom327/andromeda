import Tasks from '/imports/api/collections/Tasks';
import ITask from '/imports/api/types/Task';

import escapeHtml from '/imports/helpers/escapeHtml';

export const MethodCreateTask = function (this: any, task: ITask) {

  const taskToInsert = Object.assign(task, {
    label: escapeHtml(task.label),
    detail: escapeHtml(task.detail),
    user: this.userId
  })
  
  const id = Tasks.insert(taskToInsert);

  return id;
}

export default MethodCreateTask;
