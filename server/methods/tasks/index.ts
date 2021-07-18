import { Meteor } from 'meteor/meteor';
import { MethodCreateTask } from './Create';

Meteor.methods({
  'tasks.create': MethodCreateTask
})