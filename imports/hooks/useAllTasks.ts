import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Tasks from '../api/collections/Tasks';
import ITask from '../api/types/Task';
import { Mongo } from 'meteor/mongo';

type Response = [
  boolean,
  ITask[]
]

export const useAllTasks = (task: Partial<ITask>, search?: string): Response => useTracker(() => {
  const ready = Meteor.subscribe('tasks.all', task).ready();

  if (search) {
    const tasks = Tasks.find({
      ...task,
      $or: [
        { label: { $regex: new RegExp(search, 'gi') } },
        { detail: { $regex: new RegExp(search, 'gi') } }
      ]
    }).fetch();

    return [ready, tasks]

  }
  
  const tasks = Tasks.find(task).fetch()
  return [ready, tasks];
});

export default useAllTasks;
