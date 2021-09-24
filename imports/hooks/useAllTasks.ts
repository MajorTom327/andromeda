import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Tasks from '../api/collections/Tasks';
import ITask from '../api/types/Task';

type Response = [
  boolean,
  ITask[]
]

export const useAllTasks = (task: Partial<ITask>): Response => useTracker(() => {
  const ready = Meteor.subscribe('tasks.all', task).ready();
  const tasks = Tasks.find(task).fetch()

  return [ready, tasks];
});

export default useAllTasks;
