import { Mongo } from 'meteor/mongo';
import ITask from '../types/Task';

export const Tasks = new Mongo.Collection<ITask>('tasks');

export default Tasks;