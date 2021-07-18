import { Meteor } from 'meteor/meteor';
import MethodCreateProject from './Create';

Meteor.methods({
  'projects.create': MethodCreateProject
})