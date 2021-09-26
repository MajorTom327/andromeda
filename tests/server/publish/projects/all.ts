import { expect } from 'chai';
import Projects from '/imports/api/collections/Projects';
import PublishProjectsAll from '/server/publish/projects/all';

describe('Publish projects.all', function () {
  const me: string = 'me';
  const other: string = 'other';

  let projectId: string;
  let otherProject: string

  before(function () {
    Projects.remove({});

    projectId = Projects.insert({
      name: 'Project 1',
      user: me
    });

    otherProject = Projects.insert({
      name: 'Project 2',
      user: other
    });
  });

  it('Should return the projects only for user', function () {
    const user = me;
    const projects = PublishProjectsAll.call({ userId: user }).fetch();
    const expected = [{
      _id: projectId,
      name: 'Project 1',
      user
    }];

    expect(projects).to.deep.equal(expected);
  })

})