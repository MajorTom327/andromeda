import Tasks from '/imports/api/collections/Tasks';
import ITask from '/imports/api/types/Task';

export const MethodCreateTask = function (task: ITask) {
  const id = Tasks.insert(task);

  return id;
}

export default MethodCreateTask;