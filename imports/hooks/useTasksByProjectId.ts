import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Tasks from '../api/collections/Tasks';
import ITask from '../api/types/Task';

type Response = [
  boolean,
  ITask[]
]

export const useTasksByProjectId = (projectId: string): Response => useTracker(() => {
  const ready = Meteor.subscribe('tasks.findByProjectId', projectId).ready();
  const tasks = Tasks.find({project: projectId}).fetch()

  return [ready, tasks];
});

export default useTasksByProjectId;
