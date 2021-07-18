import { Projects } from '/imports/api/collections'

export const PublishProjectsOne = function (this: any, id: string) {
  return Projects.find({ _id: id, user: this.userId });
}

export default PublishProjectsOne;