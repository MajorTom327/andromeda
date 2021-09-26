import Tasks from '/imports/api/collections/Tasks'
import ITask from '/imports/api/types/Task';

export const PublishTasksAll = function (this: any, task: Partial<ITask>) {

  return Tasks.find({ ...task, user: this.userId })
}

export default PublishTasksAll;
