import { Meteor } from 'meteor/meteor';
import PublishTasksAll from './all';
import PublishTasksFindByProjectId from './findByProjectId';

Meteor.publish('tasks.all', PublishTasksAll);
Meteor.publish('tasks.findByProjectId', PublishTasksFindByProjectId);