import { Meteor } from 'meteor/meteor';
import { MethodCreateTask } from './Create';
import MethodRemoveTask from './Remove';

Meteor.methods({
  'tasks.create': MethodCreateTask,
  'tasks.remove': MethodRemoveTask,
})