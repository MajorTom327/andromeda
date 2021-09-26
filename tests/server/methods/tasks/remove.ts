import { expect } from 'chai';
import Tasks from '/imports/api/collections/Tasks';
import MethodRemoveTask from '/server/methods/tasks/Remove';


describe('Method tasks.remove', function () {

  let userId: string = "me";
  let otherId: string = "other";

  let taskId: string;
  let otherTaskId: string;

  beforeEach(function () {
    Tasks.remove({});

    taskId = Tasks.insert({
      label: "task",
      detail: "detail",
      project: "project",
      date: "2021-01-01",
      user: userId,
    });

    otherTaskId = Tasks.insert({
      label: "task",
      detail: "detail",
      project: "project",
      date: "2021-01-01",
      user: otherId,
    });

  });

  it("Should delete the user task", function () {
    MethodRemoveTask.call({ userId }, taskId);

    let task = Tasks.findOne(taskId);
    expect(task, "Should have delete the user task").to.be.undefined;

    let otherTask = Tasks.findOne(otherTaskId);
    expect(otherTask, "Should keep the other task").to.not.be.undefined;
  });

  it("Should not delete task of another user", function () {
    MethodRemoveTask.call({ userId }, otherTaskId);

    let task = Tasks.findOne(taskId);
    expect(task, "Should not have delete the user task").to.not.be.undefined;

    let otherTask = Tasks.findOne(otherTaskId);
    expect(otherTask, "Should not have delete the other user task").to.not.be.undefined;
  })
})