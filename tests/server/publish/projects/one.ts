import { expect } from 'chai';
import Projects from '/imports/api/collections/Projects';
import PublishProjectsAll from '/server/publish/projects/all';
import PublishProjectsOne from '/server/publish/projects/one';

describe('Publish projects.one', function () {
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
    const projects = PublishProjectsOne.call({ userId: user }, projectId).fetch();
    const expected = [{
      _id: projectId,
      name: 'Project 1',
      user
    }];

    expect(projects).to.deep.equal(expected);
  });

  it('Should not be able to get other user project', function () {
    const user = me;
    const projects = PublishProjectsOne.call({ userId: user }, otherProject).fetch();
    const expected: any[] = [];

    expect(projects).to.deep.equal(expected);
  })

})