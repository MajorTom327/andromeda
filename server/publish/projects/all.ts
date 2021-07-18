import { Projects } from '/imports/api/collections'

export const PublishProjectsAll = function (this: any) {
  return Projects.find({ user: this.userId });
}

export default PublishProjectsAll;