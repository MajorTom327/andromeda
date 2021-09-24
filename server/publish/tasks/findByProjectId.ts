import Tasks from '/imports/api/collections/Tasks'

export const PublishTasksFindByProjectId = function (this: any, projectId: string) {
  return Tasks.find({ project: projectId, user: this.userId })
}

export default PublishTasksFindByProjectId;
