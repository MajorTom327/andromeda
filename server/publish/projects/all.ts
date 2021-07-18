import { Projects } from '/imports/api/collections'

export const PublishProjectsAll = function () {
  return Projects.find({});
}

export default PublishProjectsAll;