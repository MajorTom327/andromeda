import { expect } from 'chai';
import { DateTime } from 'luxon';
import { times } from 'ramda';
import Tasks from '/imports/api/collections/Tasks';
import ITask from '/imports/api/types/Task';
import PublishTasksAll from '/server/publish/tasks/all';

const generateTask = (payload: Partial<ITask>): ITask => {

  const seed = Math.floor(Math.random() * 100000);
  return {
    _id: `task-${seed}`,
    label: `label-${seed}`,
    detail: `detaill-${seed}`,
    project: `project-${seed}`,
    date: DateTime.local().toISODate(),
    user: 'user',
    ...(payload || {})
  }
}

describe('Publish tasks.all', function () {

  let userId: string = "me";
  let otherUserId: string = "other";

  let projectId: string = "project";

  let userTasks: string[] = []
  let otherTasks: string[] = []

  before(function () {
    Tasks.remove({});

    userTasks = times(() => Tasks.insert(generateTask({ project: projectId, user: userId })), 3);
    otherTasks = times(() => Tasks.insert(generateTask({ project: projectId, user: otherUserId })), 3);
  })

  it("Should return all task of user", function () {
    const tasks = PublishTasksAll.call({ userId }, {}).fetch();

    expect(tasks.length).to.equal(userTasks.length);

    tasks.forEach(task => {
      expect(task.user).to.equal(userId);
      expect(task._id).to.be.oneOf(userTasks);
    })
  })

  it("Should not have access of other user tasks (Per _id)", function () {
    const tasks = PublishTasksAll.call({ userId }, { _id: otherTasks[0] }).fetch();

    expect(tasks.length).to.equal(0);
  })

  it("Should not have access of other user tasks (Per userid)", function () {
    const tasks = PublishTasksAll.call({ userId }, { user: otherUserId }).fetch();

    tasks.forEach(task => {
      expect(task.user).to.equal(userId);
      expect(task._id).to.be.oneOf(userTasks);
    })
  })
})