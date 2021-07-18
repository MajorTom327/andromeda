import { Projects } from '/imports/api/collections'

export const PublishProjectsOne = function (id: string) {
  return Projects.find({ _id: id });
}

export default PublishProjectsOne;