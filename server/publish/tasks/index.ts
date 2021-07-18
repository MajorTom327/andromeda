import { Meteor } from 'meteor/meteor';
import PublishTasksAll from './all';

Meteor.publish('tasks.all', PublishTasksAll);