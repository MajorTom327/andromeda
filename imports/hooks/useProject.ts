import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { Projects } from '../api/collections';
import { IProject } from '../api/types/Project';

type Response = [
  boolean,
  IProject | undefined
]

export const useProject = (id: string): Response => useTracker(() => {
  const ready = Meteor.subscribe('projects.one', id).ready();
  const project = Projects.findOne({ _id: id });

  return [ready, project];
});

export default useProject;