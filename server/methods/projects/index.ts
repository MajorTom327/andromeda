import { Meteor } from 'meteor/meteor';
import CreateProject from './Create';

Meteor.methods({
  'projects.create': CreateProject
})