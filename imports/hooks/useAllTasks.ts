import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import Tasks from '../api/collections/Tasks';
import ITask from '../api/types/Task';

type Response = [
  boolean,
  Mongo.Cursor<ITask>
]

export const useAllTasks = (task: Partial<ITask>): Response => useTracker(() => {
  const ready = Meteor.subscribe('tasks.all').ready();
  const tasks = Tasks.find(task)

  return [ready, tasks];
});

export default useAllTasks;