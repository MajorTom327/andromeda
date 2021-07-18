import { Meteor } from 'meteor/meteor';
import PublishProjectsAll from './all';
import PublishProjectsOne from './one';

Meteor.publish('projects.all', PublishProjectsAll);
Meteor.publish('projects.one', PublishProjectsOne);