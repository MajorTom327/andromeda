import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { Projects } from '../api/collections';
import { IProject } from '../api/types/Project';

type Response = [
  boolean,
  Mongo.Cursor<IProject>
]

export const useAllProjects = (): Response => useTracker(() => {
  const ready = Meteor.subscribe('projects.all').ready();
  const projects = Projects.find()

  return [ready, projects];
});

export default useAllProjects;