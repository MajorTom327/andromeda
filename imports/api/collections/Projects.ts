import { Mongo } from 'meteor/mongo';
import { IProject } from '../types/Project';

export const Projects = new Mongo.Collection<IProject>('projects');

export default Projects;