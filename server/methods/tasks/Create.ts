import Tasks from '/imports/api/collections/Tasks';
import ITask from '/imports/api/types/Task';

export const MethodCreateTask = function (this: any, task: ITask) {
  const id = Tasks.insert({ ...task, user: this.userId });

  return id;
}

export default MethodCreateTask;