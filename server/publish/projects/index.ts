import { Meteor } from 'meteor/meteor';
import { PublishProjectsAll } from './all';

Meteor.publish('projects.all', PublishProjectsAll);